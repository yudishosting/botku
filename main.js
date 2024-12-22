
const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const path = require('path'); 
const readline = require("readline");
const FileType = require('file-type')
const _ = require('lodash')
const yargs = require('yargs/yargs')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()


const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("session")
const Rifky = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
auth: state,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});

if (!Rifky.authState.creds.registered) {
const phoneNumber = await question('𝙼𝚊𝚜𝚞𝚔𝚊𝚗 𝙽𝚘𝚖𝚎𝚛 𝚈𝚊𝚗𝚐 𝙰𝚔𝚝𝚒𝚏 𝙰𝚠𝚊𝚕𝚒 𝙳𝚎𝚗𝚐𝚊𝚗 𝟼𝟸 :\n');
let code = await Rifky.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`𝙲𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 :`, code);
}

store.bind(Rifky.ev)

Rifky.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Rifky.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Rifky, mek, store)
require("./case")(Rifky, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Setting
Rifky.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Rifky.getName = (jid, withoutContact= false) => {
id = Rifky.decodeJid(jid)
withoutContact = Rifky.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Rifky.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Rifky.decodeJid(Rifky.user.id) ?
Rifky.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Rifky.public = true

Rifky.serializeM = (m) => smsg(Rifky, m, store);
Rifky.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
startBotz();
} else if (reason === DisconnectReason.loggedOut) {
} else {
Rifky.end(`Unknown DisconnectReason: ${reason}|${connection}`);
}
} else if (connection === 'open') {
console.log('[Connected] ' + JSON.stringify(Rifky.user.id, null, 2));
}
});

Rifky.ev.on('creds.update', saveCreds)

Rifky.sendText = (jid, text, quoted = '', options) => Rifky.sendMessage(jid, { text: text, ...options }, { quoted })
//=========================================\\
Rifky.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

//STICKER
Rifky.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
  await Rifky.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }).then(response => {
    fs.unlinkSync(buffer);
    return response;
  });
};

Rifky.vidToSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
  await Rifky.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};

Rifky.imgToSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
  let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
  await Rifky.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};



Rifky.ev.on("messages.upsert", async (chatUpdate, msg) => {
  try {
    const mek = chatUpdate.messages[0];
    if (!mek.message) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') 
      ? mek.message.ephemeralMessage.message
      : mek.message;
    
    if (mek.key && mek.key.remoteJid === 'status@broadcast') {
      const r = "👀";
      const k = mek.key;
      if (k.participant) {
        await Rifky.readMessages([k]);
        await Rifky.sendMessage('status@broadcast', {
          react: {
            text: r,
            key: k
          }
        }, {
          statusJidList: [k.participant]
        });
        console.log(`
memberikan reaksi ke status ${k.participant}
REAKSI: [${r}]`
        );
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

//===================AUTO DELSESI======================\\

setInterval(() => {
  fs.readdir("session", (err, files) => {
    if (err) return console.error('Unable to scan directory\n' + err);
    files.forEach(file => {
      if (file !== "creds.json") {
        try { fs.unlinkSync(path.join("session", file)); }
        catch (error) { console.error(`Unable to delete file: ${file}\n${error}`); }
      }
    });
  });
}, 3600000);
//=========================================\\


Rifky.sendTextWithMentions = async (jid, text, quoted, options = {}) => Rifky.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\
Rifky.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

return Rifky
}

startBotz()

function smsg(Rifky, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = Rifky.decodeJid(m.fromMe && Rifky.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = Rifky.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = Rifky.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === Rifky.decodeJid(Rifky.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => Rifky.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => Rifky.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => Rifky.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => Rifky.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? Rifky.sendMedia(chatId, text, 'file', '', m, { ...options }) : Rifky.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => Rifky.copyNForward(jid, m, forceForward, options)

return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
