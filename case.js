//===================[ TEMPAT MODULE ]=====================\\
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const cheerio = require('cheerio');
const os = require('os');
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const FormData = require("form-data");

module.exports = async (yudis, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

//==================[ TEMPAT CONST LIB ]=====================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');

//===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
const budy = (typeof m.text === 'string') ? m.text : '';
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (yudis.user.id.split(':')[0]+'@s.whatsapp.net' || yudis.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await yudis.decodeJid(yudis.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await yudis.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================[ TEMPAT FUNCTION DATABASE ]====================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));


//===================[ TAMPILAN CONSOLE ]==================\\
if(m.message){const groupType = m.isGroup ? 'Group' : 'Private';console.log(chalk.hex('#F4E1D2')('══════════════════════════════════════════')+'\n'+chalk.hex('#6B8E23').bold('                    HALO                    ')+'\n'+chalk.hex('#00CED1')('📍 Dari: ')+chalk.hex('#20B2AA').bold(`${groupType} | ${m.sender.split('@')[0]}`)+'\n'+chalk.hex('#2E8B57')('💬 Pesan:')+chalk.hex('#20B2AA').bold(budy||m.mtype)+'\n'+chalk.hex('#D2691E')('🕒 Waktu:')+chalk.hex('#FFA07A').bold(moment().tz('Asia/Jakarta').format('HH:mm:ss'))+'\n'+chalk.hex('#F4E1D2')('══════════════════════════════════════════'));}
//==================[ FUNCTION FITUR ]=====================\\
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await yudis.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
    
// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
yudis.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
yudis.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async (buffer, ukur1, ukur2) => {
   return new Promise(async (resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

const fkethmb = await reSize(ppuser, 300, 300)

let jimp = require("jimp")

const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

yudis.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
    let type = await yudis.getFile(path, true)
    let { res, data: file, filename: pathFile } = type
    if (res && res.status !== 200 || file.length <= 65536) {
        try {
            throw { json: JSON.parse(file.toString()) }
        }
        catch (e) {
            if (e.json) throw e.json
        }
    }
    let opt = { filename }
    if (quoted) opt.quoted = quoted
    if (!type) options.asDocument = true
    let mtype = '',
        mimetype = type.mime,
        convert
    if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
    else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
    else if (/video/.test(type.mime)) mtype = 'video'
    else if (/audio/.test(type.mime))(
        convert = await (ptt ? toPTT : toAudio)(file, type.ext),
        file = convert.data,
        pathFile = convert.filename,
        mtype = 'audio',
        mimetype = 'audio/ogg; codecs=opus'
    )
    else mtype = 'document'
    if (options.asDocument) mtype = 'document'

    delete options.asSticker
    delete options.asLocation
    delete options.asVideo
    delete options.asDocument
    delete options.asImage

    let message = {
        ...options,
        caption,
        ptt,
        [mtype]: { url: pathFile },
        mimetype
    }
    let m
    try {
        m = await yudis.sendMessage(jid, message, { ...opt, ...options })
    }
    catch (e) {
        m = null
    }
    finally {
        if (!m) m = await yudis.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
        file = null
        return m
    }
}

//Setting Self
if (global.public === false) {
if (!m.key.fromMe && !isCreator) return
}


//===================[ FUNCTION REPLY ]=====================\\


const metaai = { 
    key: { remoteJid: '0@s.whatsapp.net', participant: '0@s.whatsapp.net' },
    message: { newsletterAdminInviteMessage: { newsletterJid: '120363210705976689@newsletter', newsletterName: '', caption: `${namabot} | 2024 - 2025` } }
};

const ments = (teks) => teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender];

const fcall = { 
    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },
    message: { extendedTextMessage: { text: body } }
};

const reply = (teks) => { 
    yudis.sendMessage(from, { 
        text: `${teks}`, 
        contextInfo: { 
            groupMentions: [{ groupJid: m.chat }],
            forwardingScore: 999, 
            isForwarded: false, 
            externalAdReply: { 
                showAdAttribution: true, 
                mediaType: 1, 
                previewType: 0, 
                renderLargerThumbnail: false, 
                mediaUrl: `https://wa.me/6282143985744`, 
                title: `Yudis Robot - Ai Masa Kini`, 
                sourceUrl: `https://wa.me/6282143985744`, 
                thumbnail: fkethmb 
            } 
        } 
    }, { quoted: metaai });
};

//==================[ FUNCTION WAKTU ]======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

//===================[ UPLOADER ]=====================\\
async function uploadToCatbox(filePath) {
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(filePath));
    form.append('reqtype', 'fileupload');
    try {
        const response = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: { ...form.getHeaders() },
        });
        if (response.data) {
            const filename = response.data.trim();
            return `${filename}`;
        } else {
            throw new Error('Gagal mendapatkan URL dari Catbox.');
        }
    } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw error;
    }
}
//===================[ AUTO RECTYP ]=====================\\
if (global.autorecording) yudis.sendPresenceUpdate('recording', from);
yudis.sendPresenceUpdate('unavail 11 ofable', from);

if (global.autorecordtype) {
    let yudisrecordin = ['recording', 'composing'];
    let yudisrecordinfinal = yudisrecordin[Math.floor(Math.random() * yudisrecordin.length)];
    yudis.sendPresenceUpdate(yudisrecordinfinal, from);
}

if (global.autoread) yudis.readMessages([m.key]);

if (global.autotyping) yudis.sendPresenceUpdate('composing', from);


function formatp(size) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
    }
    return `${size.toFixed(2)} ${units[i]}`;
}

//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {
 case 'menu': {
    let m2 = "`"
    let anu = `
⊑ *INFORMATION* ⊒
ꆜ *Nama* : ${botname}
ꆜ *Owner* : ${botname}
ꆜ *Number :* ${m.sender.split("@")[0]}
ꆜ *Prefix* : Multi Prefix
ꆜ *Versi* : 7.0.8 New
ꆜ *Platform* : Chrome ( Ubuntu )
ꆜ *Waktu Run Time* : ${runtime(process.uptime())}

 *${m2}乂 M E N U  O W N E R${m2}*
♧  ꜱᴇʟꜰ (ᴍᴏᴅᴇ ᴘʀɪᴠᴀᴛᴇ)
♧  ᴘᴜʙʟɪᴄ (ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ)
♧  ɢᴇᴛꜱᴡ (ᴄᴏᴍᴍᴀɴᴅ ꜱᴛᴀᴛᴜꜱ ᴡʜᴀᴛꜱᴀᴘᴘ)
♧  ʀᴠᴏ (ʀᴇᴘʟʏ ꜰᴏᴛᴏ ꜱᴇᴋᴀʟɪ ʟɪʜᴀᴛ)
♧  ᴅᴇʟ (ʜᴀᴘᴜꜱ ᴘᴇꜱᴀɴ)
♧  ɢᴇᴛᴘᴘ (ᴀᴍʙɪʟ ꜰᴏᴛᴏ ᴘʀᴏꜰɪʟ ɢᴄ)
♧  ᴘɪɴɢ (ᴄᴇᴋ ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ)
♧  ᴀᴜᴛᴏꜱᴡᴠɪᴇᴡ (ᴏᴘꜱɪᴏɴᴀʟ)
♧  ᴀᴜᴛᴏʀᴇᴄᴏʀᴅ (ᴏᴘꜱɪᴏɴᴀʟ)
♧  ᴀᴜᴛᴏʀᴇᴀᴅ (ᴏᴘꜱɪᴏɴᴀʟ)
♧  ᴀᴜᴛᴏᴛʏᴘɪɴɢ (ᴏᴘꜱɪᴏɴᴀʟ)

 *${m2}乂 M E N U  T O O L S${m2}*
♧  ᴘʟᴀʏ (ᴘᴜᴛᴀʀ ᴍᴜꜱɪᴋ)
♧  ꜱᴍᴇᴍᴇ (ꜱᴛɪᴄᴋᴇʀ ᴛᴇᴋꜱ)
♧  ᴛᴛꜱᴇᴀʀᴄʜ (ᴄᴀʀɪ ᴠɪᴅᴇᴏ)
♧  ꜱᴛɪᴄᴋᴇʀ (ᴜʙᴀʜ ꜰᴏᴛᴏ/ᴠɪᴅᴇᴏ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ)
♧  ᴛᴏᴜʀʟ (ɢᴀᴍʙᴀʀ ᴋᴇ ʟɪɴᴋ)
♧  ꜰᴀᴋᴇᴛᴡᴇᴇᴛ (ʙᴜᴀᴛ ꜰᴀᴋᴇ ᴛᴡᴇᴇᴛ)
♧  ꜱᴘᴀᴍᴘᴀɪʀɪɴɢ (ꜱᴘᴀᴍ ᴘᴀɪʀɪɴɢ)
♧  ᴛᴏɪᴍɢ (ᴄᴏɴᴠᴇʀᴛ ꜱᴛɪᴄᴋᴇʀ ᴋᴇ ɢᴀᴍʙᴀʀ)

 *${m2}乂 M E N U  D O W N L O A D${m2}*
♧  ᴛᴛsʟɪᴅᴇ (Unduh Video TT Slide)
♧  ᴛɪᴋᴛᴏᴋ (Unduh Video TikTok)
♧  ɪɢ (Unduh Video Instagram)
♧  ꜱꜰɪʟᴇ (ᴜɴᴅᴜʜ ᴅᴀʀɪ ʟɪɴᴋ ꜱꜰɪʟᴇ)

 *${m2}乂 M E N U  G R O U P${m2}*
♧  ᴋɪᴄᴋ (ᴋᴇʟᴜᴀʀᴋᴀɴ ᴀɴɢɢᴏᴛᴀ)
♧  ᴀᴅᴅ (ᴛᴀᴍʙᴀʜᴋᴀɴ ᴀɴɢɢᴏᴛᴀ +62×××)
♧  ᴘʀᴏᴍᴏᴛᴇ (ᴊᴀᴅɪᴋᴀɴ ᴀᴅᴍɪɴ)
♧  ᴅᴇᴍᴏᴛᴇ (ᴛᴜʀᴜɴᴋᴀɴ ᴀᴅᴍɪɴ)
♧  ꜱᴇᴛᴅᴇꜱᴄ (ᴜʙᴀʜ ᴅᴇꜱᴋʀɪᴘꜱɪ ɢʀᴜᴘ)
♧  ꜱᴇᴛᴘᴘɢᴄ (ɢᴀɴᴛɪ ꜰᴏᴛᴏ ɢʀᴜᴘ)
♧  ᴅᴇʟᴇᴛᴇᴘᴘɢᴄ (ʜᴀᴘᴜꜱ ꜰᴏᴛᴏ ɢʀᴜᴘ)
♧  ᴛᴀɢᴀʟʟ (ᴛᴀɢ ꜱᴇᴍᴜᴀ ᴀɴɢɢᴏᴛᴀ)
♧  ʜɪᴅᴇᴛᴀɢ (ᴛᴀɢ ᴘᴇꜱᴀɴ ᴛᴇʀꜱᴇᴍʙᴜɴʏɪ)
♧  ᴛᴏᴛᴀɢ (ᴛᴀɢ ᴘᴇꜱᴀɴ ʀᴇᴘʟʏ)
♧  ʟɪɴᴋɢᴄ (ᴅᴀᴘᴀᴛᴋᴀɴ ʟɪɴᴋ ɢʀᴜᴘ)
♧  ʀᴇᴠᴏᴋᴇ (ʀᴇꜱᴇᴛ ʟɪɴᴋ ɢʀᴜᴘ)
♧  ᴏᴘᴇɴ (ʙᴜᴋᴀ ɢʀᴜᴘ)
♧  ᴄʟᴏꜱᴇ (ᴛᴜᴛᴜᴘ ɢʀᴜᴘ)
♧  ꜱᴇᴛɴᴀᴍᴀ (ᴜʙᴀʜ ɴᴀᴍᴀ ɢʀᴜᴘ)
♧  ᴀᴜᴛᴏᴄʟᴏꜱᴇ (ᴛᴜᴛᴜᴘ ɢʀᴜᴘ ᴏᴛᴏᴍᴀᴛɪꜱ)

 *${m2}乂 M E N U  A I${m2}*
♧  ᴀɪ (ᴀᴊᴜᴋᴀɴ ᴘᴇʀᴛᴀɴʏᴀᴀɴ ᴋᴇ ᴀɪ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🇮🇩 *"Fitur ini masih dalam pengembangan, bantu kami lebih baik!"*  
🇯🇵 *"この機能はまだ開発中です。 もっと良くなるためにサポートをお願いします！"*  
🇺🇸 *"These features are still under development, your feedback matters!"*

⧉ *Developed by ʏᴜᴅɪꜱ*  
⧉ *Stay tuned for more updates!* ♥

━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `
    yudis.sendMessage(m.chat, { 
        text: anu, 
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                mediaType: 1,
                previewType: 0,
                mediaUrl: '',
                title: `${global.namabot}`,
                body: null,
                renderLargerThumbnail: true,
                thumbnailUrl: `https://files.catbox.moe/ta6c4q.jpg`,
                sourceUrl: ''
            },
            forwardingScore: 9999,
            isForwarded: true
        },
        mentionJid: [m.sender]
    }, { quoted: metaai });
}
break
case 'brat': {
  if (!text) return yudis.sendMessage(m.chat, { text: `Penggunaan: ${prefix + command} <teks>` }, { quoted: m });
  try {
    const { createCanvas, registerFont } = require('canvas');
    const Jimp = require('jimp');
    registerFont('./lib/arialnarrow.ttf', { family: 'ArialNarrow' });
    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const findOptimalFontSize = (text, maxWidth, maxHeight) => {
      let fontSize = 100;
      ctx.font = `bold ${fontSize}px ArialNarrow`;
      const words = text.split(' ');
      let lines = [];
      while (fontSize > 0) {
        lines = [];
        let currentLine = [];
        let currentWidth = 0;
        ctx.font = `bold ${fontSize}px ArialNarrow`;
        for (const word of words) {
          const wordWidth = ctx.measureText(word + ' ').width;
          if (currentWidth + wordWidth <= maxWidth) {
            currentLine.push(word);
            currentWidth += wordWidth;
          } else {
            if (currentLine.length > 0) lines.push(currentLine);
            currentLine = [word];
            currentWidth = wordWidth;
          }
        }
        if (currentLine.length > 0) lines.push(currentLine);
        const totalHeight = lines.length * (fontSize + 10);
        if (totalHeight <= maxHeight) break;
        fontSize -= 2;
      }
      return { fontSize, lines };
    };

    const padding = 40;
    const maxWidth = canvas.width - padding * 2;
    const maxHeight = canvas.height - padding * 2;
    const { fontSize, lines } = findOptimalFontSize(q, maxWidth, maxHeight);
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${fontSize}px ArialNarrow`;
    const lineHeight = fontSize + 10;
    const totalHeight = lines.length * lineHeight;
    const startY = (canvas.height - totalHeight) / 2 + fontSize / 2;

    lines.forEach((line, i) => {
      if (line.length === 1) {
        ctx.textAlign = 'left';
        ctx.fillText(line.join(' '), padding, startY + i * lineHeight);
      } else {
        const totalSpacing = maxWidth - line.reduce((acc, word) => acc + ctx.measureText(word).width, 0);
        const spaceBetween = line.length > 1 ? totalSpacing / (line.length - 1) : 0;
        let currentX = padding;
        line.forEach(word => {
          ctx.fillText(word, currentX, startY + i * lineHeight);
          currentX += ctx.measureText(word).width + spaceBetween;
        });
      }
    });

    const buffer = canvas.toBuffer();
    let image = await Jimp.read(buffer);
    image.blur(2);
    let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

    await yudis.sendMessage(
      m.chat,
      { 
        sticker: blurredBuffer, 
        packname: "Yudis MD", 
        author: "Yudis Universe!!" 
      },
      { quoted: m }
    );
  } catch (e) {
    console.log(e);
    await yudis.sendMessage(m.chat, { text: `Terjadi kesalahan saat membuat stiker` }, { quoted: m });
  }
}
break;
case 'spam-pairing': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +6288221325473|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
case 'ping':
case 'botstatus':
case 'statusbot': {
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    // Gunakan performance.now() untuk mengukur waktu
    let timestamp = performance.now();
    let latensi = performance.now() - timestamp;  // Menghitung latensi dengan selisih waktu
    let neww = performance.now();
    let oldd = performance.now();

    const respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim();

    reply(respon);
}
break;
case 'sf': case 'sfile': case 'sfiledl': case 'sfdl': {
    if (!text.includes('https://sfile.mobi')) return reply(`• *Example :* .${command} https://sfile.mobi/xxxxxxx/`);

    reply(mess.wait);

    const sfile = {
        download: async function(url) {
            const headers = {
                'referer': url,
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-language': 'en-US,en;q=0.9',
                'user-Agent': 'Postify/1.0.0',
            };

            try {
                const response = await axios.get(url, { headers });
                headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

                const [filename, mimetype, downloadLink] = [
                    response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
                    response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
                    response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
                ];
                
                if (!downloadLink) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Download link tidak ditemukan!' };

                headers.Referer = downloadLink;
                const final = await axios.get(downloadLink, { headers });

                const [directLink, key, filesize] = [
                    final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
                    final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
                    final.data.match(/Download File (.*?)/)?.[1]
                ];

                const result = directLink + (key ? `&k=${key}` : '');
                if (!result) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Direct Link Download tidak ditemukan!' };

                const data = await this.convert(result, url);

                return { creator: 'Daffa ~', status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
            } catch (error) {
                return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: error };
            }
        },

        convert: async function(url, directLink) {
            try {
                const init = await axios.get(url, {
                    maxRedirects: 0,
                    validateStatus: status => status >= 200 && status < 303,
                    headers: {
                        'Referer': directLink,
                        'User-Agent': 'Postify/1.0.0'
                    },
                });

                const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
                const redirect = init.headers.location;

                const final_result = await axios.get(redirect, {
                    responseType: 'arraybuffer',
                    headers: {
                        'referer': directLink,
                        'user-agent': 'Postify/1.0.0',
                        'cookie': cookies,
                    },
                });

                const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Tidak diketahui';
                return {
                    filename,
                    mimeType: final_result.headers['content-type'],
                    buffer: Buffer.from(final_result.data)
                };
            } catch (error) {
                throw error;
            }
        }
    };

    try {
        let hasil = await sfile.download(text);
        let sfdl = hasil.data.result;

        await yudis.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename }, {quoted:m});
    } catch (err) {
        console.error(err);
    }
    }
    break;
 case "upsw": {
  if (!isCreator) return reply("Owners only");
  if (args.length < 1) return reply("Perihal apa?");

  if (/image/.test(mime)) {
    let imgSw = await yudis.downloadAndSaveMediaMessage(quoted);
    await yudis.sendMessage(
      "status@broadcast",
      { image: { url: imgSw }, caption: q },
      { statusJidList: global.contact.map(id => id + "@s.whatsapp.net") }
    );
    reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
  } else if (/video/.test(mime)) {
    let VidSw = await yudis.downloadAndSaveMediaMessage(quoted);
    await yudis.sendMessage(
      "status@broadcast",
      { video: { url: VidSw }, caption: q },
      { statusJidList: global.contact.map(id => id + "@s.whatsapp.net") }
    );
    reply("Done");
  } else if (/audio/.test(mime)) {
    let VnSw = await yudis.downloadAndSaveMediaMessage(quoted);
    await yudis.sendMessage(
      "status@broadcast",
      { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
      { statusJidList: global.contact.map(id => id + "@s.whatsapp.net") }
    );
    reply("Done");
  } else if (q) {
    yudis.sendMessage(
      "status@broadcast",
      { text: q },
      { statusJidList: global.contact.map(id => id + "@s.whatsapp.net") }
    );
  } else {
    reply("Replay Media Jika Mau Dengan Caption Ketik .upsw caption");
  }
}
break;
case 'qc': {
    if (!q) return reply('Enter Text');
    const ppnyauser = await yudis.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": { "id": 1, "name": pushname, "photo": { "url": ppnyauser } },
                "text": q, "replyMessage": {}
            }
        ]
    };
    const res = await axios.post('https://bot.lyo.su/quote/generate', json, { headers: {'Content-Type': 'application/json'} });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { status: "200", creator: "AdrianTzy", result: buffer };
    yudis.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}` }); }
 break;
case 'tourl': {
    if (!isCmd) return;
    if (!quoted && !m.message.imageMessage && !m.message.videoMessage) return reply(`*Balas atau kirim Gambar/Video dengan Caption ${prefix + command}*`);
    let mediaMessage = quoted ? quoted : m;
    const mime = (mediaMessage.msg || mediaMessage).mimetype || '';
    if (/image/.test(mime)) {
        try {
            let mediaPath = await yudis.downloadAndSaveMediaMessage(mediaMessage, './scrape');
            let url = await uploadToCatbox(mediaPath);
            reply(`*File berhasil diupload:*\n${url}`);
            await fs.unlinkSync(mediaPath);
        } catch (err) {
            reply(`*Gagal mengupload gambar:*\n${err.message}`);
        }
    } else if (/video/.test(mime)) {
        if ((mediaMessage.msg || mediaMessage).seconds > 60) return reply('Maksimal durasi video adalah 1 menit!');
        try {
            let mediaPath = await yudis.downloadAndSaveMediaMessage(mediaMessage, './scrape');
            let url = await uploadToCatbox(mediaPath);
            reply(`*File berhasil diupload:*\n${url}`);
            await fs.unlinkSync(mediaPath);
        } catch (err) {
            reply(`*Gagal mengupload video:*\n${err.message}`);
        }
    } else {
        reply(`*Kirim atau Balas Gambar/Video dengan Caption ${prefix + command}*`);
    } }
 break;
case 'autoclose': {
    const moment = require('moment-timezone');
    const timezone = 'Asia/Jakarta';
    if (!m.isGroup) return m.reply(mess.OnlyGrup);
    if (!isAdmins && !isCreator) return m.reply(mess.OnlyOwner);
    if (!text.includes('|')) return m.reply('Format salah! Gunakan format .autoclose 22:00 | 05:00');
    let [closeTime, openTime] = text.split('|').map(t => t.trim());
    let now = moment.tz(timezone);
    let closeMoment = moment.tz(closeTime, 'HH:mm', timezone);
    let openMoment = moment.tz(openTime, 'HH:mm', timezone);
    if (closeMoment.isBefore(now)) closeMoment.add(1, 'day');
    if (openMoment.isBefore(now)) openMoment.add(1, 'day');
    let timeUntilClose = closeMoment.diff(now);
    let timeUntilOpen = openMoment.diff(now);
    console.log(`Waktu Sekarang: ${now.format('HH:mm:ss')}`);
    console.log(`Waktu Tutup: ${closeMoment.format('HH:mm:ss')} (Parsed dari input: ${closeTime})`);
    console.log(`Waktu Buka: ${openMoment.format('HH:mm:ss')} (Parsed dari input: ${openTime})`);
    console.log(`Durasi hingga tutup: ${timeUntilClose} ms`);
    console.log(`Durasi hingga buka: ${timeUntilOpen} ms`);
    if (timeUntilClose <= 0 || timeUntilOpen <= 0) return m.reply('Error: Waktu yang dimasukkan sudah lewat atau tidak valid.');
    let groupMetadata = await yudis.groupMetadata(m.chat);
    let oldGroupName = groupMetadata.subject;
    setTimeout(async () => {
        await yudis.groupSettingUpdate(m.chat, 'announcement');
        m.reply(`Grup telah ditutup pada: ${closeMoment.format('HH:mm')}`);
    }, timeUntilClose);
    setTimeout(async () => {
        await yudis.groupSettingUpdate(m.chat, 'not_announcement');
        m.reply(`Grup telah dibuka pada: ${openMoment.format('HH:mm')}`);
    }, timeUntilOpen);
    m.reply(`Penjadwalan berhasil:
- Grup akan ditutup pada: ${closeMoment.format('HH:mm')}
- Grup akan dibuka kembali pada: ${openMoment.format('HH:mm')}`);
}
break;
case 'toimg': {
    if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`);
    let imageMessage = m.quoted ? m.quoted : m;
    if (!imageMessage || !imageMessage.download) return reply("Reply ke stiker untuk mengubahnya ke gambar.");
    let media = await yudis.downloadAndSaveMediaMessage(imageMessage);
    let ran = await getRandom('.png');
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply("Error selama konversi.");
        let buffer = fs.readFileSync(ran);
        yudis.sendMessage(m.chat, { image: buffer }, { quoted: m });
        fs.unlinkSync(ran);
    });
}
break;
case 'close': {
    if (!m.isGroup) return m.reply(mess.OnlyGrup);
    if (!isBotAdmins) return reply('Perintah ini hanya bisa digunakan di grup!');
    if (!isAdmins) return reply('Hanya admin yang bisa menggunakan perintah ini!');
    await yudis.groupSettingUpdate(m.chat, 'announcement');
    reply('Grup berhasil ditutup! Hanya admin yang bisa mengirim pesan.');
}
break;
case 'open': {
    if (!m.isGroup) return reply(mess.OnlyGrup);
    if (!isBotAdmins) return reply('Perintah ini hanya bisa digunakan di grup!');
    if (!isAdmins) return reply('Hanya admin yang bisa menggunakan perintah ini!');
    await yudis.groupSettingUpdate(m.chat, 'not_announcement');
    reply('Grup berhasil dibuka! Semua anggota bisa mengirim pesan.');
}
break;
case 'getsw': {
    try {
        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (quotedMessage) {
            if (quotedMessage.imageMessage) {
                let imageCaption = quotedMessage.imageMessage.caption;
                let imageUrl = await yudis.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
                yudis.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
                reply('*Downloading status...*');
            }
            if (quotedMessage.videoMessage) {
                let videoCaption = quotedMessage.videoMessage.caption;
                let videoUrl = await yudis.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                yudis.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
                reply('*Downloading status...*');
            }
        }
    } catch (error) {
        console.error("Error in 'send message' handling:", error);
    }
}
break;
case 'owner': {
    const img = "https://files.catbox.moe/ta6c4q.jpg";
    async function image(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, { upload: yudis.waUploadToServer });
        return imageMessage;
    }
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: "Ini adalah pemilik bot. Jangan spam ya!" },
                    carouselMessage: {
                        cards: [{
                            header: {
                                imageMessage: await image(img),
                                hasMediaAttachment: true
                            },
                            body: { text: "Owner Bot" },
                            nativeFlowMessage: {
                                buttons: [{
                                    name: "cta_url",
                                    buttonParamsJson: '{"display_text":"Hubungi Owner","url":"https://wa.me/6282143985744?text=Halo%20Owner"}'
                                }]
                            }
                        }],
                        messageVersion: 1,
                    }
                }
            }
        }
    }, { quoted: metaai });
    await yudis.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case 'rvo':
case '😂²':
case '🤣²':
case 'lihat': {
    try {
        const quotedMessage = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
        if (!quotedMessage?.viewOnceMessageV2) return reply('Silakan reply pesan *1x lihat* (view once).');
        let type = Object.keys(quotedMessage.viewOnceMessageV2.message)[0];
        let messageContent = quotedMessage.viewOnceMessageV2.message[type];
        let mediaStream = await downloadContentFromMessage(
            messageContent,
            type === 'imageMessage' ? 'image' : 'video'
        );
        let buffer = Buffer.from([]);
        for await (const chunk of mediaStream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let caption = messageContent.caption || '';
        if (/video/.test(type)) {
            await yudis.sendMessage(m.chat, { video: buffer, caption }, { quoted: m });
        } else if (/image/.test(type)) {
            await yudis.sendMessage(m.chat, { image: buffer, caption }, { quoted: m });
        } else {
            return reply('Tipe file tidak didukung.');
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat memproses pesan.');
    }
}
break;
case 'public': {
    if (!isCreator) return reply(mess.owner);
    yudis.public = true;
    reply('*_Sukses Change To Public_*');
}
break;
case 'self': {
    if (!isCreator) return reply(mess.owner);
    yudis.public = false;
    reply('*_Sukses Change To Self_*');
}
break;
case 'autoswview':
case 'autostatusview': {
    if (!isCreator) return XeonStickOwner();
    if (args.length < 1) return reply('on/off?');
    if (args[0] === 'on') {
        autoswview = true;
        reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        autoswview = false;
        reply(`${command} is disabled`);
    }
}
break;
case 'getcase': {
    const getCase = (cases) => {
        return "case " + `'${cases}'` + fs.readFileSync("./case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
    };
    try {
        if (!isCreator) return m.reply('ngapain');
        if (!q) return m.reply(`contoh : ${prefix + command} antilink`);
        let nana = await getCase(q);
        m.reply(nana);
    } catch (err) {
        console.log(err);
        m.reply(`Case ${q} tidak di temukan`);
    }
}
break;
case 'addcase': {
    if (!isCreator) return m.reply('lu sapa asu');
    if (!text) return m.reply('Mana case nya?');
    const fs = require('fs');
    const namaFile = 'case.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const posisiAwalGimage = data.indexOf("case 'addcase':");

        if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    m.reply('Terjadi kesalahan saat menulis file:', err);
                } else {
                    m.reply('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            m.reply('Tidak dapat menambahkan case dalam file.');
        }
    });
}
break;
case 'tiktoksearch':
            case 'ttsearch': {
                const dann = require('d-scrape');
                if (!text) return reply(`Contoh : ${prefix + command} jj epep`);
                reply('Sedang Diproses ⏳');
                try {
                    let anu = await dann.search.tiktoks(text);
                    yudis.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted: m });
                } catch (error) {
                    reply('Error :v');
                }
            }
            break;
            case 'ssweb': {
                if (!text) return reply(`Example: ${prefix + command} https://github.com/DGXeon`);
                if (!text.startsWith('http')) {
                    let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
                    await yudis.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m });
                } else {
                    let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
                    await yudis.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m });
                }
            }
            break;
            case 'faketweet': {
                const canvafy = require('canvafy');
                if (!text) return reply(`Exmaple : Name1 | Name2 | Text`);
                let nama1 = text.split("|")[0];
                let nama2 = text.split("|")[1];
                let katakata = text.split("|")[2];
                const tweet = await new canvafy.Tweet()
                    .setTheme("dim")
                    .setUser({ displayName: nama1, username: nama2 })
                    .setVerified(true)
                    .setComment(katakata)
                    .setAvatar(ppuser)
                    .build();
                let tanaka = tweet;
                yudis.sendMessage(m.chat, { image: tanaka, caption: 'Done' }, { quoted: m });
            }
            break;
            case 'smeme': {
                if (!text) return reply(`Balas Image Dengan Caption ${prefix + command}`);
                if (/image/.test(mime)) {
                    let atas = text.split('|')[0] ? text.split('|')[0] : '-';
                    let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
                    let mee = await yudis.downloadAndSaveMediaMessage(quoted);
                    let mem = await uploadToCatbox(mee);
                    let kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`);
                    yudis.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author });
                }
            }
            break;
            case 'remini':
case 'hd': {
    if (!quoted) return reply('Where is the picture?');
    if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
    reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();
    let proses = await remini(media, "enhance");
    yudis.sendMessage(m.chat, { image: proses, caption: mess.selesai }, { quoted: m });
}
break;
case 'ttslide':
case 'tiktokslide': {
    if (!m.quoted && !text) return reply('Mana Kak Linknya? Harap kirimkan link atau gunakan perintah pada pesan yang direply.');
    let link = text || m.quoted.text;
    if (!link) return reply('Mana Kak Linknya?');
    try {
        const urol = `https://dlpanda.com/id?url=${link}&token=G7eRpMaa`;
        const response = await axios.get(urol);
        const html = response.data;
        const $ = cheerio.load(html);
        const imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => imgSrc.push($(element).attr('src')));
        if (imgSrc.length === 0) return reply('Tidak ada gambar ditemukan.');
        
        let push = [];
        for (let i = 0; i < imgSrc.length; i++) {
            const imageUrl = imgSrc[i];
            const cap = `Gambar ${i + 1}`;
            const mediaMessage = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: yudis.waUploadToServer });

            push.push({
                header: {
                    imageMessage: mediaMessage.imageMessage,
                    hasMediaAttachment: true,
                },
                body: {
                    text: cap,
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_url", 
                        buttonParamsJson: `{"display_text":"Buka Gambar","url":"${imageUrl}"}`
                    }]
                },
            });
        }

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `Hasil Unduhan TikTok`,
                        },
                        carouselMessage: {
                            cards: push,
                            messageVersion: 1,
                        },
                    },
                },
            },
        }, { quoted: metaai });

        await yudis.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan, coba lagi nanti.');
    }
}
break;
    case 'igdl':
case 'instagram':
case 'ig': {
    if (!text) return m.reply('Anda perlu memberikan URL video atau reel.');
    try {
        const { igdl } = require('btch-downloader');
        const data = await igdl(text);
        if (!data || data.length === 0) return m.reply('Tidak ada video atau gambar ditemukan.');
        const mediaURL = data[0].url;
        await yudis.sendMessage(m.chat, { video: { url: mediaURL } }, { quoted: m });
    } catch (error) {
        return m.reply(`Terjadi kesalahan: ${error.message}`);
    }
} break;

case 'tiktok':
case 'tt': {
    const api = require('btch-downloader');
    let link = args[0] || (m.quoted && m.quoted.text && m.quoted.text.match(/https?:\/\/(www\.)?tiktok\.com\/\S+|https?:\/\/vt\.tiktok\.com\/\S+/gi))?.[0];
    if (!link) return reply(`Tidak ada URL TikTok yang valid!\n\nGunakan dengan:\n1. ${prefix + command} <link>\n2. Reply pesan yang mengandung link TikTok dengan perintah ini.`);
    if (!link.match(/tiktok/gi)) return reply('URL yang Anda berikan *tidak valid!!!*');
    try {
        let maximus = await api.ttdl(link);
        let caption = `乂 *T I K T O K D O W N L O A D* \n\n• *Nama Video:* \n${maximus.title}\n\n${global.namabot}`;
        await yudis.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption });
    } catch (e) {
        console.log(e);
        reply(`Terjadi kesalahan:\n${e.message}`);
    }
} break;

case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-10 Seconds`);
    if (/image/.test(mime)) {
        let media = await quoted.download();
        await yudis.sendImageAsSticker(m.chat, media, m, { packname: global.pack, author: global.author });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
        let media = await quoted.download();
        await yudis.sendVideoAsSticker(m.chat, media, m, { packname: global.pack, author: global.author });
    } else {
        return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
    }
} break;
case 'd': case 'del': {
                if (!isCreator) return reply(mess.only.owner)
                if (!m.quoted) throw false
                let { chat, id } = m.quoted
                yudis.sendMessage(m.chat, { 
                    delete: { 
                        remoteJid: m.chat, 
                        fromMe: false, 
                        id: m.quoted.id, 
                        participant: m.quoted.sender 
                    } 
                })
            }
            break
            case 'getpp': {
                if (!m.isGroup) return reply("Digunakan Khsus Dalam Group")
                let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                let ghosst = userss
                try {
                    var ppuser = await yudis.profilePictureUrl(ghosst, 'image')
                } catch (err) {
                    var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                yudis.sendMessage(from, { image: { url: ppuser } }, { quoted: m })
            }
            break
            case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
case 'autoswview':
 case 'autostatusview':{
             if (!isCreator) return XeonStickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                    case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
            case 'setppgroup': case 'setgcpp': case 'setppgc': {
                if (!m.isGroup) return reply(mess.only.group)
                if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
                if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
                if (!quoted) return reply(`Where is the picture?`)
                if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                var mediz = await yudis.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
                if (args[0] == `full`) {
                    var { img } = await generateProfilePicture(mediz)
                    await yudis.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                            {
                                tag: 'picture',
                                attrs: { type: 'image' },
                                content: img
                            }
                        ]
                    })
                    fs.unlinkSync(mediz)
                    poxreply(`Success`)
                } else {
                    var memeg = await yudis.updateProfilePicture(m.chat, { url: mediz })
                    fs.unlinkSync(mediz)
                    reply(`Success`)
                }
            }
            break
            case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
                if (!m.isGroup) return reply(mess.only.group)
                if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
                if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
                await yudis.removeProfilePicture(from)
            }
            break
            case 'kick': case 'k':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await yudis.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await yudis.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudis.groupParticipantsUpdate(m.chat, [users], 'promote')
await reply(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await yudis.groupParticipantsUpdate(m.chat, [users], 'demote')
await reply(`Done`)
}
break
            case 'setnama':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await yudis.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await yudis.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            
            case 'tagall':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                yudis.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
case 'h':                
case 'hidetag':
                if (!m.isGroup) return reply(mess.group)
                if (!isCreator) return reply(mess.owner)
                yudis.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
    if (!isCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botAdmin);
    if (!isAdmins) return reply(mess.admin);
    if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);

    yudis.sendMessage(m.chat, {
        forward: m.quoted.fakeObj,
        mentions: participants.map(a => a.id)
    }, {
        quoted: m
    });
    break;
            case 'linkgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await yudis.groupInviteCode(m.chat)
                yudis.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await yudis.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
                case 'ai': {
  if (!text) return reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah YudisBotz, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
reply(kanjuthann)
}
break
case 'mf': case 'mediafire': {
  (async () => {
    const fetch = (await import('node-fetch')).default;
     if (!text) return reply(`Contoh : ${prefix + command} https://mediafire.com/`);

    await yudis.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
      reply('⏳ *Sedang memproses tautan Anda... Mohon tunggu beberapa saat!*');

      const response = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`);
      const result = await response.json();

      if (!result || !result.data || result.data.length === 0) {
        throw new Error(`❌ *Respons API tidak sesuai struktur yang diharapkan.*\n\n📌 *Detail:* ${JSON.stringify(result)}`);
      }

      const fileData = result.data[0];

      const fileInfo = `
📥 *Berhasil Mendapatkan File MediaFire:*

🚮 *Nama:* ${fileData.nama}
📊 *Ukuran File:* ${fileData.size}
🗂️ *Ekstensi:* ${fileData.mime}

🌐 *Link Asli:*
${text}

📥 *Sedang mengunduh file, mohon tunggu...*
      `.trim();

      await reply(fileInfo);

      await yudis.sendMessage(
        m.chat,
        { document: { url: fileData.link }, mimetype: fileData.mime, fileName: fileData.nama },
        { quoted: m }
      );

      await yudis.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
      console.error('Error:', error);
      reply(`❌ *Terjadi kesalahan saat memproses tautan Anda.*\n\n📌 *Detail Error:* ${error.message || error}`);
    }
  })();
  break;
}
case 'play2': {
      reply(mess.wait);
    if (!text) return m.reply('Masukkan judul lagu nya');
    let convert = await yts({ search: text, hl: 'id', gl: 'ID' });
    if (convert === 0) return m.reply('Lagu yang Anda cari tidak ditemukan...');
    let result = convert.all[0];
    try {
        await yudis.sendMessage(m.chat, {
            audio: { url: `https://Ytdownloader.fdteam.my.id/audio?url=${result.url}&bitrate=128` },
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    } catch (e) {
        m.reply('Maaf, terjadi kesalahan...');
        console.log(e);
    }
}
break
case 'play': {
  const axios = require('axios');
  const yts = require('yt-search');

  const SaveTube = {
    qualities: {
      audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
      video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    },

    headers: {
      'accept': '*/*',
      'referer': 'https://ytshorts.savetube.me/',
      'origin': 'https://ytshorts.savetube.me/',
      'user-agent': 'Postify/1.0.0',
      'Content-Type': 'application/json'
    },

    cdn() {
      return Math.floor(Math.random() * 11) + 51;
    },

    async fetchData(url, cdn, body = {}) {
      const headers = {
        ...this.headers,
        'authority': `cdn${cdn}.savetube.su`
      };

      try {
        const response = await axios.post(url, body, { headers });
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async dl(link, qualityIndex, typeIndex) {
      const type = typeIndex;
      const quality = this.qualities[type][qualityIndex];
      const cdnNumber = this.cdn();
      const cdnUrl = `cdn${cdnNumber}.savetube.su`;

      const videoInfo = await this.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
      const badi = {
        downloadType: type,
        quality: quality,
        key: videoInfo.data.key
      };

      const dlRes = await this.fetchData(`https://${cdnUrl}/download`, cdnNumber, badi);

      return {
        link: dlRes.data.downloadUrl,
        duration: videoInfo.data.duration,
        durationLabel: videoInfo.data.durationLabel,
        title: videoInfo.data.title,
        thumbnail: videoInfo.data.thumbnail,
        videoUrl: videoInfo.data.url
      };
    }
  };

  if (!text) return reply('Masukkan judul atau kata kunci untuk mencari video YouTube!');
  try {
    // Pencarian video dengan yts
    const search = await yts(text);
    const firstVideo = search.videos[0];
    if (!firstVideo) return reply('❌ Video tidak ditemukan!');

    // Mendapatkan link MP3 menggunakan SaveTube
    const result = await SaveTube.dl(firstVideo.url, "4", "audio");

    // Mengirimkan file audio MP3
    await yudis.sendMessage(m.chat, {
      audio: {
        url: result.link
      },
      mimetype: "audio/mp4",
      ptt: false, // Ubah ke true jika ingin dikirim sebagai voice note
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: result.title || "Untitled",
          body: `Durasi: ${result.durationLabel || 'Tidak diketahui'}`,
          sourceUrl: result.videoUrl,
          thumbnail: { url: result.thumbnail },
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply('❌ Terjadi kesalahan saat memproses permintaan Anda.');
  }
}
break
//===================[ BATAS CASE ]=====================\\
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
