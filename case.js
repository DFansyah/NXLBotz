process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const jsobfus = require('javascript-obfuscator')
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH")
const { search, ytmp3, ytmp4 } = require('./lib/searchyt')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const { ssweb, tiktok, remini,findSongs } = require("./lib/scraper")
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
//=================================================//
module.exports = NXL = async (NXL, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: NXL.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NXL.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
NXL.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await NXL.decodeJid(NXL.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await NXL.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
// function
async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `Wɑng𝚂ɑẜẜ『 ᴹᴅ 』`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}
//SKREP
const { bard } = require('./lib/bard')

//================== [ RESPON ALL GAME ] ==================//

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

const reply2 = (teks) => {
NXL.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'NXL In Here',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./media/asep.jpg"),
caption: `\n${teks}`,
}, { quoted: kalgans,ephemeralExpiration: 86400});
}

async function reply(teks) {
const nedd = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.botname,
newsletterJid: global.idcennel,
},
externalAdReply: {  
showAdAttribution: true,
title: `${botname}`,
body: foter1,
previewType: "VIDEO",
thumbnailUrl: thumbnail, 
sourceUrl: hariini, 
},
},
text: teks,
};
return NXL.sendMessage(m.chat, nedd, {
quoted: kalgans,
});
}

try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
NXL.bomb = NXL.bomb ? NXL.bomb : {};

if (NXL.bomb[id] && !isNaN(body) && !isCmd) {
let json = NXL.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = NXL.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
NXL.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/82afde68f917e8d0dbfe3.png", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(NXL.bomb[id][2]);
delete NXL.bomb[id];
});
} else if (json.state) {
return NXL.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = NXL.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

NXL.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(NXL.bomb[id][2]);
delete NXL.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

NXL.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return NXL.sendText(m.chat, e.toString(), m);
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
db.data.users[m.sender].balance += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

try {
let roof = Object.values(suit).find(v => v.status && [v.penantang, v.ditantang].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.ditantang && m.isGroup && roof.status == 'WAIT') {
if (body.toLowerCase() === 'y') {
roof.status = 'PLAY'
roof.asal = m.chat
clearTimeout(roof.waktu)
uselimit()
await NXL.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: m})
if (!roof.pilih1) await NXL.sendText(roof.penantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await NXL.sendText(roof.ditantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await NXL.sendMessage(m.chat, {text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.ditantang : roof.penantang
await NXL.sendMessage(m.chat, {text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split('@')[0]} tidak memilih suit\nGame suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: kalgans})
}
delete suit[roof.id]
return !0
}, roof.timeout)
} else if (body.toLowerCase() === 'n') {
await NXL.sendMessage(m.chat, {text: `@${roof.ditantang.split('@')[0]} menolak suit, suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang]}}, {quoted: m})
delete suit[roof.id]
return !0
}
}
let jwb = m.sender == roof.penantang
let jwb2 = m.sender == roof.ditantang
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = budy
await NXL.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted: m})
if (!roof.pilih2) await NXL.sendMessage(roof.ditantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = budy
await NXL.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih ? '\n\nMenunggu lawan memilih' : ''}`}, {quoted: m})
if (!roof.pilih) await NXL.sendMessage(roof.penantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.penantang
else if (b.test(stage) && k.test(stage2)) win = roof.ditantang
else if (g.test(stage) && k.test(stage2)) win = roof.penantang
else if (g.test(stage) && b.test(stage2)) win = roof.ditantang
else if (k.test(stage) && b.test(stage2)) win = roof.penantang
else if (k.test(stage) && g.test(stage2)) win = roof.ditantang
else if (stage == stage2) tie = true
let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? '*HASIL SERI*\n\n' : ''}@${roof.penantang.split('@')[0]} (${roof.text}) ${tie ? '' : roof.penantang == win ? ' Menang' : ' Kalah'}\n@${roof.ditantang.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.ditantang == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : *$' + roof.hadiah + '* balance'}`
await NXL.sendMessage(roof.asal, {text: teks, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: roof.chat})
if (roof.penantang == win) {
global.db.data.users[roof.penantang].balance += roof.hadiah
} else if (roof.ditantang == win) {
global.db.data.users[roof.ditantang].balance += roof.hadiah
}
delete suit[roof.id]
}
}
} catch (e) {
return reply(e)
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
NXL.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
NXL.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
NXL.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
NXL.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
NXL.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
NXL.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
NXL.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
NXL.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}
//BATAS RESPON GAME

NXL.autoshalat = NXL.autoshalat ? NXL.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? NXL.user.id : m.sender
	let id = m.chat 
    if(id in NXL.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Yogyakarta dan sekitarnya._`
    NXL.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete NXL.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await NXL.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: kalgans })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}    

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await NXL.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: kalgans })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await NXL.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return NXL.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return NXL.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return NXL.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await NXL.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
NXL.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
NXL.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}


//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`NXLBotz dalam mode private, gunakan di private chat!`)
	     }
	}
//=================================================//
if (!NXL.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
NXL.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Wangsaff \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: NXL.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NXL.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
NXL.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await NXL.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await NXL.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await NXL.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${NXL.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
NXL.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
autoread: false
}
            
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
if(!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
if(!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []            

if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('NXL' in chats)) chats.NXL = false
} else global.db.data.chats[m.chat] = {
mute: false,
NXL: false
}

if (db.data.chats[m.chat].NXL) {
let name = await NXL.getName(m.sender)
  let prompt = `Mulai sekarang nama kamu adalah NextLevel AI, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari Wɑng𝚂ɑẜẜ『 ᴹᴅ 』 yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
let NXLxdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
NXL.sendMessage(m.chat, {
text: `*[ N X L - A I ]*\n\n${NXL.data.response}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: '',
thumbnailUrl: `${thumbnail}`,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}

//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}

async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),
{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},
}
);
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});

return result;
}

Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case "menu": {
wek = `
${atas}
${garis} *Bot Name* : ${botname}
${garis} *Owner Name* : ${global.ownername}
${garis} *Run Time* : ${runtime(process.uptime())}
${garis} *Libary* : @whiskeysockets/baileys
${garis} *Bot Version* : V1.0.0
${garis} *Database Users* : ${Object.keys(db.data.users).length} Users
${bawah}
`

let sections = [{
title: '<!>List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: '.allmenu'
},
{
title: '<!>Menu Owner',
description: `Displays Owner Menu`, 
id: '.ownermenu'
},
{
title: '<!>Menu Main',
description: `Displays Main Menu`, 
id: '.mainmenu'
},
{
title: '<!>Menu Download',
description: `Displays Download Menu`, 
id: '.downloadmenu'
},
{
title: '<!>Menu Search',
description: `Displays Search Menu`, 
id: '.searchmenu'
},
{
title: '<!>Menu Bug Inject',
description: `Display Bug menu`,
id: '.bugmenu'
},
{
title: '<!>Menu Group',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: '<!>Menu Ai',
description: `Displays Ai Menu`, 
id: '.aimenu'
},
{
title: '<!>Menu Domain', 
description: "Displays the Domain Menu", 
id: '.domainmenu'
},
{
title: '<!>Menu Game', 
description: "Displays the Game Menu", 
id: '.gamemenu'
},
]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: wm, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: NXL.decodeJid(NXL.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wm
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by Wɑng𝚂ɑẜẜ『 ᴹᴅ 』')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hello, @${m.sender.replace(/@.+/g, '')}!*
${atas}
${garis} *Bot Name* : ${botname}
${garis} *Owner Name* : ${global.ownername}
${garis} *Run Time* : ${runtime(process.uptime())}
${garis} *Libary* : @whiskeysockets/baileys
${garis} *Bot Version* : V2.0.0
${garis} *Database Users* : ${Object.keys(db.data.users).length} Users
${bawah}`,
 subtitle: wm,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: NXL.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6283145372436\",\"merchant_url\":\"https://wa.me/6283145372436\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await NXL.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
${atas}
${garis} *Bot Name :* ${botname}
${garis} *Name Owner :* ${ownername}
${garis} *Library :* @whiskeysockets/baileys
${garis} *Tanggal:* ${tanggal2}
${garis} *Total Fitur:* ${totalFitur()}
${garis} *run time :* ${runtime(process.uptime())}
${tengah}
${garis} *乂 Informasi User 乂*
${tengah}
${garis} *Number* : @${m.sender.split('@')[0]}
${garis} *Status* : ${isCreator ? "Owner" : "User"}
${garis} *User* : ${isPremium ? 'Premium' : 'Free'}
${garis} *Limit :* ${limitnya}
${garis} *Balance :* $${toRupiah(balancenya)}
${tengah}
${garis} 乂 Owner Menu 乂
${tengah}
${garis} ${prefix}setbotname
${garis} ${prefix}addprem
${garis} ${prefix}delprem
${garis} ${prefix}listprem
${garis} ${prefix}addbalance
${garis} ${prefix}addlimit
${garis} ${prefix}public
${garis} ${prefix}self
${garis} ${prefix}getcase
${garis} ${prefix}addcase
${garis} ${prefix}delcase
${garis} ${prefix}jpm
${garis} ${prefix}jpmtesti
${garis} ${prefix}listregis
${garis} ${prefix}getbio
${garis} ${prefix}setppbot
${garis} ${prefix}setpppanjang
${garis} ${prefix}delppbot
${garis} ${prefix}getname
${garis} ${prefix}biochange
${garis} ${prefix}myip
${garis} ${prefix}restart
${garis} ${prefix}del
${tengah}
${garis} 乂 Main Menu 乂
${tengah}
${garis} ${prefix}buyprem
${garis} ${prefix}afk
${garis} ${prefix}topglobal
${garis} ${prefix}buylimit
${garis} ${prefix}qc
${garis} ${prefix}qc2
${garis} ${prefix}remini
${garis} ${prefix}me
${garis} ${prefix}totalfitur
${garis} ${prefix}tourl
${garis} ${prefix}sticker
${garis} ${prefix}pin
${garis} ${prefix}cekip
${garis} ${prefix}ssweb
${garis} ${prefix}toimg
${garis} ${prefix}jarak 
${garis} ${prefix}cerpen
${garis} ${prefix}decssh
${garis} ${prefix}obfus (enc JS)
${tengah}
${garis} 乂 Download Menu 乂
${tengah}
${garis} ${prefix}tiktok
${garis} ${prefix}ytmp4
${garis} ${prefix}ytmp3
${garis} ${prefix}mediafire
${garis} ${prefix}instagram 
${garis} ${prefix}gitclone
${tengah}
${garis} 乂 Search menu 乂
${tengah}
${garis} ${prefix}google
${garis} ${prefix}yts
${garis} ${prefix}play
${garis} ${prefix}ttsearch
${tengah}
${garis} 乂 Group Menu 乂
${tengah}
${garis} ${prefix}add 
${garis} ${prefix}welcome
${garis} ${prefix}setname
${garis} ${prefix}linkgc
${garis} ${prefix}tagall
${garis} ${prefix}hidetag
${garis} ${prefix}promote
${garis} ${prefix}demote
${garis} ${prefix}kick 
${garis} ${prefix}closetime
${garis} ${prefix}opentime
${garis} ${prefix}antilink
${garis} ${prefix}editdesk
${garis} ${prefix}sendlinkgc
${garis} ${prefix}resetlinkgc
${garis} ${prefix}totag
${tengah}
${garis} 乂 Ai Menu 乂
${tengah}
${garis} ${prefix}nxl
${garis} ${prefix}nxlchat
${garis} ${prefix}luminai
${garis} ${prefix}ocr
${tengah}
${garis} 乂 Domain Menu 乂
${tengah}
${garis} ${prefix}addgc
${garis} ${prefix}delgc
${garis} ${prefix}subdomain
${tengah}
${garis} 乂 Game Menu 乂
${tengah} 
${garis} ${prefix}tebakbomb
${garis} ${prefix}casino
${garis} ${prefix}slot
${garis} ${prefix}tictactoe
${garis} ${prefix}delttt
${garis} ${prefix}suit
${tengah}
${garis} 乂 Bug All Operator 乂
${garis} ${prefix}tsel
${garis} ${prefix}orbit
${garis} ${prefix}byu
${garis} ${prefix}isat
${garis} ${prefix}liveon
${garis} ${prefix}xl
${garis} ${prefix}axis
${bawah}

> Fitur Eror?
> Lapor Ke Owner
> .owner
`
NXL.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: kalgans })
}
break
case "bugmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now();
var neww = performance.now();
var speed = neww - old;
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- tsel
- byu
- isat
- liveon
- xl
- axis
`
NXL.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "ownermenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- setbotname
- addprem
- listregis 
- delprem
- listprem
- addbalance
- addlimit
- buylimit
- public
- self
- jpm
- getcase
- addcase
- delcase
- bcgc
- getbio
- setppbot
- setpppanjang
- delppbot
- getname
- biochange
- restart
- myip
- del
`
NXL.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "mainmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- claimprem
- buyprem
- afk
- topglobal
- buylimit
- qc
- qc2
- remini
- me
- totalfitur
- tourl
- sticker
- pin
- cekip
- ssweb
- toimg
- jarak
- cerpen
- decssh
- obfus (enc JS)
`
NXL.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "downloadmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
› ${prefix}tiktok
› ${prefix}ytmp4
› ${prefix}ytmp3
› ${prefix}mediafire
› ${prefix}Instagram 
› ${prefix}gitclone
`
NXL.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "searchmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekgh = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- yts
- google
- play
- ttsearch
`
NXL.sendMessage(m.chat, {
text: tekgh,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "groupmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
› ${prefix}add
› ${prefix}welcome
› ${prefix}setnamagc
› ${prefix}linkgc
› ${prefix}tagall
› ${prefix}hidetag
› ${prefix}promote
› ${prefix}demote
› ${prefix}kick
› ${prefix}opentime
› ${prefix}closetime
› ${prefix}antilink
› ${prefix}editdesk
› ${prefix}sendlinkgc
› ${prefix}resetlinkgc
› ${prefix}totag
`
NXL.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "aimenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- nxl
- nxlchat
- luminai
- ocr
`
NXL.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case "domainmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
› ${prefix}addgc
› ${prefix}delgc
› ${prefix}subdomain 
`
NXL.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "gamemenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*Bot Name :* ${botname}
*Name Owner :* ${ownername}
*Library :* @whiskeysockets/baileys
*Tanggal:* ${tanggal2}
*Total Fitur:* ${totalFitur()}
*run time :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 List Feature 乂
- tebakbomb
- casino
- slot
- tictactoe
- delttt
- suit
`
NXL.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
// batas menu

case 'obfus':{
if (!q) return reply(`Contoh ${prefix+command} const kontol = require('pala-kau')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
//OWNER MENU
case "backupsc":{
if (!isCreator) return reply(mess.owner)
reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await NXL.sendMessage(m?.chat,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `${botname}.zip`,
},
{ quoted: kalgans }
  );
  await execSync("rm -rf New.zip");
}
break

case 'addgc':
if (!m.isGroup) return reply(`Khusus Grup`)
if (!isCreator) return reply(`khusus Creator`)
ntilink.push(m.chat)
fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'delgc':
if (!isCreator) return reply(`khusus Creator`)
if (!m.isGroup) return reply(`Khusus Grup`)
var ini = ntilink.indexOf(m.chat)
ntilink.splice(ini, 1)
fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'hidetag': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
NXL.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kalgans})
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case "backupdb": case "backupdatabase": {
if (!isCreator) return reply(mess.owner)
 NXL.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: kalgans})
}
break

case "addpremium": case "addprem": {
if (!isCreator) return reply(mess.owner)
let b = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (args[0] == 'a') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 10000
db.data.users[b].balance += 10000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'b') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 20000
db.data.users[b].balance += 30000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'c') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 30000
db.data.users[b].balance += 50000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else return reply("namapaket nomornya")
}
break

case "delpremium": case "delprem": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Berhasil menghapus *User Premium*")
} else return reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case 'listregis':{
if (!isCreator) return reply(mess.owner)  
let anu =  require('./database/registered')
let teks = `乂 *L I S T - R E G I S T E R E D*\n`
teks += `*Total Register* : ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id* : ${v.id}\n`
teks += `*Name* : ${v.name}\n`
teks += `*Age* : ${v.age}\n`
teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
reply(teks) 
}
break

case "addbalance": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply('nomornya 100')
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply('nomornya 100')
db.data.users[`${user}`].balance += Number(args[1])
NXL.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return reply('nomornya 100')
}
break

case "listclaimprem": {
if (!isCreator) return reply(mess.owner)
if (db.data.settings.claimprem.length < 1) return reply("Tidak ada code claim prem")
var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`
db.data.settings.claimprem.forEach((e) => {
teks += ` ◦ ${e}\n`
})
reply(teks)
}
break

case "addlimit": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply(example('nomornya 100'))
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply(example('nomornya 100'))
db.data.users[`${user}`].limit += Number(args[1])
NXL.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`})
} else return reply(example('nomornya 100'))}
break

case "setnamagc": case "namegc": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply(example('teksnya'))
NXL.groupUpdateSubject(m.chat, text)
reply(mess.done)}
break

case 'del': {
if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
NXL.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case "listhadiah": {
if (!isCreator) return reply(mess.owner)
if (db.data.settings.hadiah.length < 1) return reply("Tidak ada code hadiah")
var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
teks += ` ◦ ${e}\n`
})
reply(teks)
}
break

case "listprem": case "listpremium": {
if (!isCreator) return reply(mess.owner)
let user = Object.keys(db.data.users)
let ar = []
let urut = 1
var teks = '\n*乂 LIST USER PREMIUM*\n\n'
user.forEach((e) => {
if (db.data.users[e].premium == true) {
let no = urut++
teks += `${no}. @${e.split("@")[0]}\n`
ar.push(e)
}
})
if (ar.length < 1) {
reply("Tidak Ada User Premium")
} else {
NXL.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [...ar]}}, {quoted: kalgans})
}}
break

case "public": {
if (!isCreator) return reply(mess.owner)
NXL.public = true
reply(mess.done)
}
break

case "self": {
if (!isCreator) return reply(mess.owner)
NXL.public = false
reply(mess.done)
}
break

case 'noftication': case 'nf': {
if (!isCreator) return reply(`No Access Denied`)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`masukan Query`)
let user = db.data.users[m.sender]
if (!user.gid) return reply(`Silahkan Masukan ID Group Untuk Noftikasi Bot, Dengan Mengetik *${prefix + command} test*`)
let caption = `*[ N O T I F I C A T I O N ]*

${text}`
NXL.sendMessage(`${user.gid}`, { text: caption }, { quoted: m})
reply(`Berhasil Mengirim Nofitication / Pemberitahuan`)
}
break

case "buatclaimprem": {
if (!isCreator) return reply(mess.owner)
if (isNaN(args[0])) return reply('Jumlah Kode claim prem')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.claimprem.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case "buathadiah": {
if (!isCreator) return reply(mess.owner)
if (isNaN(args[0])) return reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./csease.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return reply('ngapain')
if (!q) return reply(`contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
reply(nana)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break 

case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
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
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await NXL.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await NXL.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
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
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} NXLBotz`)
await NXL.updateProfileName(text)
reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case "setppbot": {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await NXL.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await NXL.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
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
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await NXL.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.done)
}
}
break

case 'getbio':{
if (!isCreator) return reply(mess.owner)
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await NXL.fetchStatus(who)
lreply(bio.status)
} catch {
if (text) return reply(`bio is private or you haven't replied to the person's message!`)
else try {
let whoto = m.quoted ? m.quoted.sender : m.sender
let bio = await NXL.fetchStatus(who)
reply(bio.status)
} catch {
return reply(`bio is private or you haven't replied to the person's message!`)
}
}
}
break

case 'delppbot': {
if (!isCreator) return reply(mess.owner)
await NXL.removeProfilePicture(NXL.user.id)
reply(mess.done)
}
break

case 'join': {
if (!isCreator) return reply('*khusus Premium*')
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
reply(mess.wait) 
let result = args[0].split('https://chat.whatsapp.com/')[1]
await NXL.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'getname': {
if (!isCreator) return reply(mess.owner)
if (qtod === "true") {
namenye = await NXL.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
NXL.sendMessage(from, {text:"Reply orangnya"}, {quoted:kalgans})
}
}
break

case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting . . ._`)
await sleep(3000)
process.exit()
break

case "welcome": {
if (!isRegistered) return reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
if (!isCreator) return m.reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await NXL.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NXL.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'jpm': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} ${botname}`)
let getGroups = await author.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: `${idchannel}`,
 newsletterName: `${foter1}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: NXL.decodeJid(NXL.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `${ownername}`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283145372436\",\"merchant_url\":\"https://wa.me/6283145372436\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Group Chat\",\"url\":\"https://chat.whatsapp.com/Di2QCnrxaetLRuPSJtXBEc\",\"merchant_url\":\"https://chat.whatsapp.com/Di2QCnrxaetLRuPSJtXBEc\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await NXL.relayMessage(i, msg.message, {
 messageId: msg.key.id
})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "jpmtesti": case "bcgroup": case "bcgc": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply(mess.wait)
let getGroups = await NXL.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await NXL.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await NXL.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await NXL.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await NXL.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(mess.done)
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await NXL.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
NXL.sendMessage(i, {text: `${text}`}, {quoted:kalgans})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//BATAS OWNER MENU

//MAIN MENU
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
reply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
}
break

case "premium": case "buyprem": {
reply(`\n*💸 LIST HARGA USER PREMIUM*

*乂 PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`)}
break

case "redeemcode": {
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
db.data.users[m.sender].balance += h1
db.data.users[m.sender].limit += h2
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil hadiah *$${toRupiah(h1)} Balance* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
NXL.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notifikasi", body: null, sourceUrl: linkgc, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case "topglobal": {
reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return reply('reply gambar/video yang ingin Anda lihat')
if (m.quoted.mtype !== 'viewOnceMessageV2') return reply('Ini bukan pesan view-once.')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return NXL.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return NXL.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case "buylimit": case "belilimit": {
if (!args[0]) return reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return reply('20')
if ((args[0]).includes('.')) return reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break

case "listgc": case "cekid": case"listgrup": {
let gcall = Object.values(await NXL.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break


case "startjpm": {
if (!isCreator) return m.reply(mess.owner)
var teksnya = await fs.readFileSync("./database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder database")
var teks = `${teksnya}`
let total = 0
let getGroups = await NXL.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await NXL.sendMessage(jid, {text: teks}, {quoted: kalgans})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case "setteksjpm": {
if (!isCreator) return m.reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break

case "teksjpm": {
if (!isCreator) return m.reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break

case 'tqto': {
let cu = `
*BIG TAHNKS TO*

> Hw Mods [ Base ]
> Wangsaff [ Developer ]

${botname}
`
let cp = (cu)
NXL.sendMessage(m?.chat, {
text: cp,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${botname}`,
body: '',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break

case "ceklimit": case "limit": case "me":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await NXL.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
NXL.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
NXL.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
}}
break

case 'qc': {
if (limitnya < 1) return reply(mess.limit)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await NXL.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
NXL.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
uselimit()}
break

case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await NXL.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
NXL.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (limitnya < 1) return reply(mess.limit)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await NXL.sendImageAsStickerAV(from, media, kalgans, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await NXL.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
uselimit()}
break

case 'tiktoksearch': case 'ttsearch':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
let anu = await mann.search.tiktoks(text)
const capt = anu.title
const author = anu.author

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: `${idchannel}`,
newsletterName: `${botname}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: NXL.decodeJid(NXL.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
 text: (`*Author* : ${author}\n*Caption* : ${capt}`)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Simpel WhatsApp Bot`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`Tik Tok - Search`),
subtitle: `${ownername}`,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: anu.no_watermark } }, { upload: NXL.waUploadToServer }))
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
},
]
})
})
}
}
}, {})

await NXL.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
uselimit()}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return reply(mess.limit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await NXL.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
NXL.sendMessage(from, { image: buffer }, {quoted:kalgans})
fs.unlinkSync(ran)
})
uselimit()}
break

case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
NXL.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: kalgans})
}
break

case 'jarak': {
if (limitnya < 1) return reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return reply(`example ${prefix + command} Yogyakarta|Jakarta`)
reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return NXL.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: kalgans })
uselimit()}
break

case 'pin': case 'pinterest': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: NXL.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `This the Results`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Made By Wɑng𝚂ɑẜẜ『 ᴹᴅ 』',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN NXL BOTZ'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await NXL.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json[0], json[1], json[3]]);
    let json2 = pickRandom([json[5], json[6], json[7]]);
    let json3 = pickRandom([json[8], json[2]]);
    let json4 = pickRandom([json[7], json[3], json[6]]);
    let json5 = pickRandom([json[4], json[0], json[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: NXL.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await NXL.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break;

case 'cekip': case 'ip': {
if (limitnya < 1) return reply(mess.limit)
if (args.length !== 1) {
return reply('Format salah! Penggunaan: cekip link');
}
const link = args[0];
dns.resolve4(link, (err, addresses) => {
if (err) {
return reply('Gagal melakukan DNS reverse lookup.');
}
if (addresses.length === 0) {
return reply('Tidak ada alamat IP yang ditemukan.');
}
const ip = addresses[0];
reply(`Alamat IP dari ${link} adalah: ${ip}`);
});
uselimit()}
break

case 'cerpen': {
const mann = require('d-scrape')
const mannr = await mann.random.randomCerpen()
var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
reply(yaya)
}
break


case 'readvo': case 'readviewonce': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
reply(mess.wait)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await NXL.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await NXL.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case 'tourl': {
if (limitnya < 1) return reply(mess.limit)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await NXL.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
uselimit()}
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
NXL.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
NXL.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break

case 'ss': case 'ssweb': {
if (limitnya < 1) return reply(mess.limit)
const scp1 = require('./lib/myfunc') 
if (!q) return reply(`Example ${prefix+command} link`)
reply(mess.search)
let krt = await scp1.ssweb(q)
NXL.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:kalgans})
uselimit()}
break
//BATAS MAIN MENU


// DOWNLOAD MENU
case 'tiktok':
case 'tt': {
if (limitnya < 1) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
NXL.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
NXL.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
uselimit()
}
break

case "ytreels": case "ytmp4":{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
uselimit()
}
break

case 'ytmp3': case 'youtubemp3': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.wait)
downloadMp3(text)
uselimit()
}
break

case 'instagram': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
reply(mess.wait)
let iganu = await igdl2(text)
NXL.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
uselimit()}
break

case 'mediafire': {
if (!args[0]) return reply(`Enter the mediafire link next to the command`)
if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
const { mediafiredl } = require('@bochilteam/scraper')
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
NXL.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break



case 'git': case 'gitclone': {
if (!args[0]) return reply2(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply2(`Link invalid!!`)
reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
NXL.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kalgans }).catch((err) => reply('emror'))
}
break 

//BATAS DOWN MENU

//GROUP MENU
case "promote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NXL.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case 'antilink': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "demote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NXL.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await NXL.groupInviteCode(from)
NXL.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
NXL.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply(`Text Nya ?`)
await NXL.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
NXL.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
NXL.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

//SEARCH MENU

case  'yts': case 'ytsearch': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} Drunk Text`)
if (limitnya < 1) return reply(mess.limit)
reply(mess.wait)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
NXL.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: kalgans })
uselimit()}
break

case "google":{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} ${botname}`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`;
teks += `⭔ *Description* : ${g.snippet}\n`;
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
reply(teks);
});
uselimit()}
break

case 'owner': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak ${pushname}, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak ${pushname}, Tekan Tombol Yang bertuliskan Chat Bot Untuk Bermain*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"💬  Chat Bot","url":"https:\\/\\/wa.me\\/6281999611514","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NXL.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NXL.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await NXL.groupInviteCode(from)
NXL.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
NXL.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: kalgans })
}
break

case 'decssh': 
if(!q) return reply (`example ${prefix + command} ghoib.yassvpn.my.id:80@1816222515.26.-311413773.26.2084410589.15.1860953566.29.-571366538.8:1634639683.18.2103174923.19.-1303003589.28.-619656904.14.1037451608.17`)

let encryptedData = `${q}`

exec(`python3 ssh.py "${encryptedData}"`, (error, stdout, stderr) => {
    if (error) {
        reply(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        reply(`stderr: ${stderr}`);
        return;
    }
    reply(stdout);
});
break

case 'biochange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'enable') {
autobio = true
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'disable') {
autobio = false
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   

case 'autobio': {
if (!isCreator) return reply(mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ *NXLBotz - Beta Version* ]"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: "rorr",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await NXL.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await NXL.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply(hasil.ParsedResults[0].ParsedText)
fs.unlinkSync(img)
}
break

case "luminai":{
  if (!text) return reply("Mau nanya apa sama luminai?");
  const requestData = { content: text, user: m.sender };
  const quoted = m && (m.quoted || m);
 
  try {
    let response;
    if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }
    
    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    reply(response);
  } catch (e) {
    reply(e.message);
  }
}
break

case 'nxlchat': {
if (!isCreator) return (mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Simpel WhatsApp Bot"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`click button *enable* to enable autochat\nclick button *disable* to disable autobio`),
subtitle: `${ownername}`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".NXLchatchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".NXLchatchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await NXL.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'nxlchatchange':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].NXL) return reply(`activated`)
db.data.chats[m.chat].NXL = true
reply('Successfully Activate Auto Chat')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].NXL) return reply(`it's deactivated`)
db.data.chats[m.chat].NXL = false
reply('Successfully Disabling Auto Chat ')
} else {
reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

case'bard':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return m.reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await bard(text)
NXL.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/82afde68f917e8d0dbfe3.png`,
sourceUrl: `https://google.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: kalgans})
uselimit()}
break

case 'delsesi':
case 'clearsession':{
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)
reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua sampah di folder session")
});
}
break

case 'setname': case 'setsubject': {
if (!text) return reply(`Text ?`)
await NXL.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break

case 'esceh': case 'script': case 'sc': {
 let Rawwwwr = `Script ini Free
*If you want to ask questions, please chat :*
> _https://wa.me/6283145372436_ (owner)

*Jika ingin Tahu Informasi Mengenai Bot Ini :*
> _Kunjuing https://github.com/WangsaffMD/NXLBotz_
`
 NXL.relayMessage(m.chat, {
requestPaymentMessage: {
lcurrencyCodeIso4217: 'IDR',
amount1000: 0 * 0,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: `This code Open Source

*If you want to ask questions, please chat :*
> _https://wa.me/6283145372436 (owner)

*Jika ingin Tahu Informasi Mengenai Bot Ini :*
> _Visit https://github.com/WangsaffMD/NXLBotz_
`,
contextInfo: {
mentionedJid: [owner[1] + '@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: true
}
}
}
}
}
}, {})
} 

break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

// bug menu
case 'tsel': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Tsel Halo*
                    
SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> investors.spotify.com
> 162.159.130.11
> -----------------
> quiz.int.vidio.com
> 104.22.4.240
> 104.22.5.240
> 172.67.5.14
> -----------------
> cfcdn.viu.com
> 104.18.0.139
> 104.18.1.139
> -----------------
> m.nimo.tv
> 104.18.22.187
> 104.18.23.187
> cf-vod.nimo.tv
> 104.18.20.219
> 104.18.21.219
> cftxvidtest.vod.nimo.tv
> 104.18.12.120
> 104.18.13.120
> override.cf-test.hls.nimo.tv
> 104.18.2.179
> 104.18.3.179
> -----------------
> api.duniagames.co.id
> link.duniagames.co.id
> 104.18.41.141
> 172.64.146.115
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Tsel GameMax*

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443

> m.nimo.tv
> 104.18.22.187
> 104.18.23.187
> -----------------
> cf-vod.nimo.tv
> 104.18.20.219
> 104.18.21.219
> -----------------
> cftxvidtest.vod.nimo.tv
> 104.18.12.120
> 104.18.13.120
> -----------------
> override.cf-test.hls.nimo.tv
> 104.18.2.179
> 104.18.3.179
> -----------------
> api.duniagames.co.id
> link.duniagames.co.id
> 104.18.41.141
> 172.64.146.115
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Tsel GameMax*

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443

> m.nimo.tv
> 104.18.22.187
> 104.18.23.187
> -----------------
> cf-vod.nimo.tv
> 104.18.20.219
> 104.18.21.219
> -----------------
> cftxvidtest.vod.nimo.tv
> 104.18.12.120
> 104.18.13.120
> -----------------
> override.cf-test.hls.nimo.tv
> 104.18.2.179
> 104.18.3.179
> -----------------
> api.duniagames.co.id
> link.duniagames.co.id
> 104.18.41.141
> 172.64.146.115
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Tsel Opok*

SSH Ws/Trojan Go/Vmess/Vless Wss
Support Port 443
*Limit 500MB*

> 104.17.3.81
> 104.17.2.81
> -----------------
> 104.22.24.131
> 104.22.25.131
> 172.67.38.66
> 104.22.24.131
> 104.22.25.131
> 172.67.38.66
> 104.16.85.20
> 104.17.78.107
> -----------------
> corona.jakarta.go.id
> 104.22.64.181
> 104.22.65.181
> 172.67.24.177
> 104.21.14.244
> 172.67.160.206
> 104.18.20.18
> 104.18.21.18
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'byu': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Byu OPOK*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 443
*Limit 500MB*

> space.byu.id
> w3.vanillicon.com
> 162.159.128.79
> 162.159.138.78
> -----------------
> contabox.rohshop.cloud
> 162.159.128.79
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Byu Ruangguru

SSH Ws
Support Port 80

> gw.ruangguru.com
> 104.18.2.2
> 104.18.3.2
> 104.20.74.141
> 104.20.75.141
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Byu GGWP*

🔄 Mode Bolak Balik Vmess/Vless Non TLS Port 80🔄 
SSH Ws/Trojan Go/Vmess/Vless Wss
Support Port 80

> 104.19.142.108
> 104.19.143.108
> update2.farlight84miraclegames.com.cdn.jcloudcdn.com
> update2.farlight84miraclegames.com.b.galileo.jcloud-cdn.com
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'isat': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Isat Edu*

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443

> news.microsoft.com
> 141.193.213.20
> 141.193.213.21
> note.microsoft.com
> 104.17.70.206
> 104.17.71.206
> -----------------
> zoomappdocs.zoom.us
> 104.18.30.9
> 104.18.31.9
> source.zoom.us
> 170.114.45.0
> 170.114.46.0
> us04web.zoom.us
> 170.114.52.4
> 170.114.52.5
> -----------------
> www.skillacademy.com
> 104.18.25.139
> 104.18.24.139
> -----------------
> www.udemy.com
> 104.16.66.85
> 104.16.65.85
> -----------------
> callinghelp.webex.com
> 162.159.135.42
> -----------------
> 104.20.74.141
> 104.20.75.141
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Isat Opok*

opensignal.com (SSL)

WS CDN
> cdn.opensignal.com
> 104.26.10.155
> 104.26.11.155
> 172.67.68.22
> support.opensignal.com
> 104.16.51.111
> 104.16.53.111

Payload : GET /cdn-cgi/trace HTTP/1.1[crlf]Host: www.opensignal.com[crlf][crlf]CF-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: upgrade[crlf]Proxy-Connection: keep-alive[crlf]X-Online-Host: www.opensignal.com[crlf]X-Forward-Host: www.opensignal.com[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy : www.opensignal.com:80
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'liveon': {
reply(mess.wait)
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug LiveOn Opok*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> 104.21.8.121
> 172.67.139.111
> 104.26.14.208 ( Gak Malak )
> lipon.lunoxx.gay ( Gak Malak )
> fastaccessories.com ( Gak Malak )
> play.fear.io ( Gak Malak )
> circles.asia ( Gak Malak )
> circles.life ( Gak Malak )
> -----------------
> 104.16.53.111
> 104.16.51.111
> -----------------
> zendesk1.spotify.com
> 162.159.128.7
> 162.159.138.6
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug LiveOn Streaming*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> investors.spotify.com
> 162.159.130.11

SSH SSL/Trojan GFW
> Support Port 443
> open.spotify.com
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'axis': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Axis Edu*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> api.midtrans.com
> 104.17.3.81
> 104.17.2.81
> -----------------
> www.udemy.com
> 104.16.66.85
> 104.16.65.85
> -----------------
> www.skillacademy.com
> 104.18.25.139
> 104.18.24.139
> 104.20.74.141
> 104.20.75.141
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Axis Game*

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443

> poe.garena.com
> 104.19.185.16
> 104.19.186.16
> -----------------
> cdn.appsflyer.com
> 104.18.20.94
> 104.18.21.94
> -----------------
> v1-cdn.golfstrike.miniclippt.com.cdn.cloudflare.net
> vx-cdn.golfbattle.miniclippt.com.cdn.cloudflare.net
> vx-cdn.golfstrike.miniclippt.com.cdn.cloudflare.net
> 104.16.106.96
> 104.16.107.96
> 104.16.108.96
> 104.16.109.96
> 104.16.110.96
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Axis Musik*

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443

> investors.spotify.com
> 162.159.130.11
> -----------------
> zendesk1.spotify.com
> zendesk1.smule.com
> 162.159.128.7
> 162.159.138.6

SSH SSL/Trojan GFW
Support Port 443

> open.spotify.com
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Axis Video*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> www.genflix.com
> 172.67.174.51
> 104.21.30.242
> -----------------
> quiz.int.vidio.com
> 104.22.4.240
> 104.22.5.240
> 172.67.5.14
> -----------------
> cfcdn.viu.com
> 104.18.0.139
> 104.18.1.139
> -----------------
> www.sushiroll.co.id
> 172.67.213.134
> 104.21.69.223
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug Axis Opok*

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443

> www.axis.co.id
> 104.22.28.102
> 104.22.29.102
> 172.67.6.144
> -----------------
> api2.axisnet.id
> 104.22.58.158
> 104.22.59.158
> 172.67.25.199
> -----------------
> ovo.id
> 104.17.57.20
> 104.17.58.20
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'xl': {
await NXL.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/82afde68f917e8d0dbfe3.png"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NXL.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Edu*

> ruangguru.com
> cdn.ruangguru.com
> bayar.ruangguru.com
> arena.kuota.com
> -----------------
> 104.17.3.81
> 104.17.2.81
> -----------------
> www.udemy.com
> 104.16.66.85
> 104.16.65.85
> 104.18.25.139
> 104.18.24.139
> 104.20.75.141
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Flex*

> collection.linefriends.com
> 23.227.38.32
> sogood.linefriends.com
> 104.22.2.25
> 104.22.3.25
> 172.67.26.118
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        },
                        {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Conference*

> zoomappdocs.zoom.us
> 104.18.30.9
> 104.18.31.9
> -----------------
> source.zoom.us
> 170.114.45.0
> 170.114.46.0
> -----------------
> us04web.zoom.us
> 170.114.52.4
> us05web.zoom.us
> 170.114.52.5
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Netflix*

> npca.netflix.com
> cache.netflix.com
> updates.netflix.com
> devices.netflix.com
> openconnect.netflix.com
> 104.18.116.155
> 104.18.117.155
> 104.18.118.155
> 104.18.119.155
> 104.18.120.155
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Spotify*

> investors.spotify.com
> 162.159.130.11
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Vision+*

> 104.18.225.52
> stream-cdn.mncnow.id
> 104.21.73.208
> 172.67.192.40
> -----------------
> cdn.appsflyer.com
> 104.18.20.94
> 104.18.21.94
> -----------------
> cdn.radiantmediatechs.com
> 104.22.62.150
> 104.22.63.150
> 172.67.8.9
> -----------------
> api.midtrans.com
> app.midtrans.com
> 104.17.2.81
> 104.17.3.81
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Opok*

> www.xl.co.id
> 104.18.40.232
> -----------------
> ovo.id
> 104.17.57.20
> 104.17.58.20
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Vidio*

SNI Only :

> sb.scorecardresearch.com
> static-web.prod.vidiocdn.com
> token-media-vidio-com.akamaized.net

Host:

> quiz.int.vidio.com
> quiz.vidio.com
> quiz.staging.vidio.com
> 104. 22. 5. 240
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }, 
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*List Bug XL Iflix*

SNI ONLY

> tv.iflix.com
> upload.iflix.com
> live.iflix.com
> access.iflix.com
> vplay.iflix.com
> hwvip.iflix.com
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/6283145372436","webview_presentation":null}',
                        }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GC OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, 
                      ],
                    },
                  }
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await NXL.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
//end

// game menu
case "tebakbomb": case "bomb": {
if (!m.isGroup) return reply(mess.group)
if (m.chat in NXL.bomb) return NXL.sendText(m.chat, "Masih ada game yang belum terselsaikan!", NXL.bomb[m.chat][0]);
NXL.bomb = NXL.bomb ? NXL.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await NXL.sendText(m.chat, teks, NXL.bomb[id] ? NXL.bomb[id][0] : m);
let { key } = msg

let v;
NXL.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (NXL.bomb[id]) NXL.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, NXL.bomb[id][0]);
delete NXL.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
NXL.casino = NXL.casino ? NXL.casino : {}
if (m.chat in NXL.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else NXL.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete NXL.casino[m.chat]
}
}
break

case "suit": {
if (!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return reply(`Selesaikan dulu suit mu yang sebelumnya`)
if (m.quoted || text) {
if (froms === botNumber) return reply(`Tidak bisa bermain suit dengan bot!`)
if (froms === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri!`)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let hadiah = randomNumber(2000, 3000)
let timeout = 60 * 1000
let id = 'suit_' + Date.now()

suit[id] = {
id: id,
penantang: m.sender,
ditantang: froms,
status: 'WAIT',
hadiah: hadiah,
chat: await NXL.sendMessage(m.chat, {text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`, contextInfo: {mentionedJid: [froms, m.sender]}}, {quoted: kalgans}),
timeout: timeout,
waktu: setTimeout(() => {
if (suit[id]) NXL.sendMessage(m.chat, {text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`, contextInfo: {mentionedJid: [froms]}}, {quoted: suit[id].chat})
delete suit[id]
}, timeout)
}
} else reply('@tagtarget')
}
break

case 'slot': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `乂  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break

//===PANEL MENU====//

case 'subdomain':{
let list =`Hai Kak ${pushname}
.domain1 aetherz.xyz
.domain2 aetherss.xyz
.domain3 aetherscode.xyz
.domain4 dk-teamid.xyz
.domain5 dk-vpn.xyz
-------------------------------------------------------
*Contoh Membuat Subdomain :*
Ketik *.domain1* hostname|ipvps

Nb:
Mau Di Akses Subdomain Di Grup Anda?
Chat .owner

*© Wɑng𝚂ɑẜẜ『 ᴹᴅ 』*`
await NXL.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: list,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
           
           case 'domain1': {
 
    if (!isCreator) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "606fe3ef833d6e0353e7f452358b37ca"
               let apitoken = "eda68f68d2811c02900f4b19ba08d53d"
               let tld = "aetherz.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|1.1.1.1");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain Wɑng𝚂ɑẜẜ『 ᴹᴅ 』⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain2': {
 
    if (!isCreator) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a53c4b6c85caeb4800daa6996a18231a"
               let apitoken = "8d8de23548a462d7298161544a00b198232d9"
               let tld = "aetherss.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain2 hostname|1.1.1.1");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain Wɑng𝚂ɑẜẜ『 ᴹᴅ 』⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain3': {
 
    if (!isCreator) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "090545398bfb26d095060c650fff960b"
               let apitoken = "8d8de23548a462d7298161544a00b198232d9"
               let tld = "aetherscode.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|1.1.1.1");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain Wɑng𝚂ɑẜẜ『 ᴹᴅ 』⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain4': {
 
    if (!isCreator) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "354e6fc2b5f9705cd9a2ba1ab8e65ad3";
               let apitoken = "UHNBxRdh1lwpeeOPMRTB6tYjEJblo07UXxAp3txa";
               let tld = "dk-teamid.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1domain4 hostname|1.1.1.1");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain Wɑng𝚂ɑẜẜ『 ᴹᴅ 』⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain5': {
 
    if (!isCreator) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "37ffca6600e5e2e19e041b1ce4de4b70";
               let apitoken = "4CXMMolpAyhPekbzBpplUQH1tWrwSqs8uPDcYS9I";
               let tld = "dk-vpn.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|1.1.1.1");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain Wɑng𝚂ɑẜẜ『 ᴹᴅ 』⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
NXL.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
