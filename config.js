//===================[ OWNER ]=====================\\
global.owner = [
  "_", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]

//===================[ FUNCTION LAIN NYA ]=====================\\
global.namabot = " ʏᴜᴅɪꜱ "
global.botname = " ʏᴜᴅɪꜱ"
global.ownername = " ʏᴜᴅɪꜱ"
global.pack = "ʏᴜᴅɪꜱ"
global.author = "ʏᴜᴅɪꜱ"
global.linkgc = ""
global.prefa = ['','!','.','#','&']
global.autoswview = true // auto lihat sw
global.autotyping = true //auto mengetik 
global.autorecordtype = true //auto typing + recording
global.autorecord = true //autorecord
global.autoread = false //auto read messages
global.public = false
global.limitawal = {
    premium: "Infinity",
    free: 20
}
//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

global.contact = [
    [6287737937323],
    [6282296961319],
    [6285730395828],
    [62882003465650],
    [6285733551017],
    [6289668908636],
    [6285812451866],
    [6285161470808],
    [6282143985744],
    [6282143985745],
    [6281244821729],
    [6282228182820],
    [6289512178542],
    [6283857282249],
    [6281232355854],
    [6282221792667],
    [6282252558077],
    [6285172269618],
    [6283899737438],
    [6282335706033],
    [6282326592360],
    [6282335553835],
    [6285133270996],
    [6288983814212],
    [6281943208712],
    [6283176305101],
    [6283833378293],
    [6281357207089],
    [6285604708923],
    [6283194447987],
    [6283131044412],
    [628970663988],
    [6285336478177],
    [6289675315533],
    [6281359308652],
    [628973346880],
    [628816025443],
    [6288214036042],
    [6285157994516],
    [6285608707779],
    [6285335372079],
    [6285735034015],
    [6285708637019],
    [6282337631082],
    [62895375950107],
    [6281336844014],
    [6281232881251],
    [6289512625472],
    [62895622345841],
    [6281388001410],
    [6282141174110],
    [6281931643268],
    [6281331276026],
    [6283847541543],
    [6281235842152],
    [6282141174110]
];

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})