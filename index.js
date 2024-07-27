require('./setting')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const { HttpsProxyAgent } = require("https-proxy-agent");
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
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
      new JSONFile(`database/database.json`)
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
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()



// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const NXL = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(usePairingCode && !NXL.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await NXL.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)

	}
//=================================================//
NXL.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
NXL.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!NXL.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(NXL, mek, store)
require("./case.js")(NXL, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

NXL.ev.on('call', async (celled) => {
let botNumber = await NXL.decodeJid(NXL.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await NXL.sendTextWithMentions(kopel.from, `*${NXL.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
NXL.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await NXL.updateBlockStatus(kopel.from, "block")
}
}
}
})
//=================================================//

//=================================================//
NXL.ev.on('contacts.update', update => {
for (let contact of update) {
let id = NXL.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
NXL.getName = (jid, withoutContact  = false) => {
id = NXL.decodeJid(jid)
withoutContact = NXL.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = NXL.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === NXL.decodeJid(NXL.user.id) ?
NXL.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
NXL.public = true
//=================================================//
//=================================================//
NXL.ev.on('creds.update', saveCreds)
 //=================================================//
 NXL.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 NXL.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await NXL.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
NXL.sendText = (jid, text, quoted = '', options) => NXL.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
NXL.sendTextWithMentions = async (jid, text, quoted, options = {}) => NXL.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
NXL.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await NXL.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

NXL.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await NXL.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

NXL.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await NXL.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
NXL.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await NXL.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

NXL.sendList = async (jid, title, footer, btn, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
...options,
body: proto.Message.InteractiveMessage.Body.create({ text: title }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "Powered By KayyTwelve" }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(btn)
},
]
})
})
}
}
}, {})
return await NXL.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
 //=================================================//
 NXL.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 NXL.cMod = (jid, copy, text = '', sender = NXL.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === NXL.user.id
return proto.WebMessageInfo.fromObject(copy)}
NXL.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await NXL.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await NXL.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
NXL.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
NXL.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await NXL.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
NXL.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await NXL.sendMessage(jid, reactionMessage)
}
NXL.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await NXL.sendMessage(jid, reactionMessage)
}
NXL.ev.on('group-participants.update', async (anu) => {
    if (!wlcm.includes(anu.id)) return
    console.log(anu)
    try {
      let metadata = await NXL.groupMetadata(anu.id)
      let participants = anu.participants
      for (let num of participants) {
        // Get Profile Picture User
        try {
          ppuser = await NXL.profilePictureUrl(num, 'image')
        } catch {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        // Get Profile Picture Group
        try {
          ppgroup = await NXL.profilePictureUrl(anu.id, 'image')
        } catch {
          ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        if (anu.action == 'add') {
          let wel = `Hii @${num.split("@")[0]},\nWelcome To ${metadata.subject}`
          NXL.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `WELCOME`,
            caption: wel,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `© Welcome Message`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'remove') {
          let txtLeft = `GoodBye @${num.split("@")[0]} 👋\nLeaving From ${metadata.subject}`
          NXL.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `GOODBYE`,
            caption: txtLeft,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `© GoodBye Message`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'promote') {
          let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} 🎉`
          NXL.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `CONGRATULATIONS`,
            caption: a,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `Promoted In ${metadata.subject}`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'demote') {
          let a = `Congratulations @${num.split("@")[0]}, on being demote to admin of this group ${metadata.subject} 🎉`
          NXL.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `CONGRATULATIONS`,
            caption: a,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `Demoted In ${metadata.subject}`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        }
      }
    } catch (err) {
      console.log(err)
    }
  })
//=================================================//
NXL.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
NXL.serializeM = (m) => smsg(NXL, m, store)
NXL.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
}
// console.log('Connected...', update)
});
return NXL
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

//===============================================//

require("./setting")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    simple
} = require("./lib/telefunc")
const moment = require('moment-timezone')
const os = require('os')
const speed = require('performance-now')

if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log(lang.noToken)
}


global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

const bot = new Telegraf(BOT_TOKEN)
async function startNXL() {
    bot.on('callback_query', async (NXL) => {
        //console.log(NXL)
        action = NXL.callbackQuery.data.split(' ')
        args = action
        user_id = Number(action[1])
        if (NXL.callbackQuery.from.id != user_id) return NXL.answerCbQuery('Uppss... this button not for you!', {
            show_alert: true
        })
        const timestampi = speed();
        const latensii = speed() - timestampi
        const user = simple.getUserName(NXL.callbackQuery.from)
        const {
            isUrl,
            fetchJson
        } = simple
        const pushname = user.full_name;
        const username = user.username ? user.username : "WangsaffMD";
        const isCreator = [NXL.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(user.username ? user.username : "-")
        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await NXL.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        try {
            switch (action[0]) {
                case "menucmd": {
                    let hit_total;
                    try {
                        hit_total = await simple.fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
                    } catch {
                        hit_total = {
                            value: "-"
                        }
                    }
                    hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
                    let dnew = new Date(new Date + 3600000)
                    let week = dnew.toLocaleDateString('en', {
                        weekday: 'long'
                    })
                    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
                    let date = dnew.toLocaleDateString('en', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                    let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    }).format(dnew)
                    lang.menu(NXL, THUMBNAIL, pushname, OWNER_NAME, OWNER, "/", hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user.id.toString())
                }
                break
                case "asupancmd": {
                    lang.asupancmd(NXL, THUMBNAIL, user_id.toString())
                }
                break
                case "downloadcmd": {
                    lang.downloadcmd(NXL, THUMBNAIL, user_id.toString())
                }
                break
                case "islamcmd": {
                    lang.islamcmd(NXL, THUMBNAIL, user_id.toString())
                }
                break
                case "subdomaincmd":{
                    lang.subdomaincmd(NXL, THUMBNAIL, user_id.toString())
                }
                break
                case "owner": {
                    await NXL.sendContact(OWNER_NUMBER, OWNER_NAME)
                    reply(`My lord [${OWNER_NAME}](${OWNER[0]}) 👑`)
                }
                break
                case "ytmp3": {
                    if (!args[2]) return reply(`Kirim perintah:\n/ytmp3 link youtube\n\nContoh penggunaan:\n/ytmp3 https://youtu.be/xxxx`)
                    if (!isUrl(args[2])) return reply(`Kirim perintah:\n/ytmp3 link youtube\n\nContoh penggunaan:\n/ytmp3 https://youtu.be/xxx`)
                    if (!args[2].includes('youtu.be') && !args[2].includes('youtube.com')) return reply(`Kirim perintah:\n/ytmp3 link youtube\n\nContoh penggunaan:\n/ytmp3 https://youtu.be/xxx`)
                    reply(lang.wait)
                    await NXL.deleteMessage()
                    let res = await fetch(global.api('alfa', '/api/downloader/youtube-audio', {
                        url: args[2]
                    }, '8HsqJgz4ZinQjvX'))
                    if (!res.ok) throw await res.text()
                    var result = await res.json()
                    var {
                        id,
                        thumbnail,
                        title,
                        quality,
                        filesize,
                        size,
                        download
                    } = result.result
                    var getdl = await axios.get(`https://tinyurl.com/api-create.php?url=${download}`)
                    if (size.replace("MB","") > 50 || size.replace("GB","") >= 1 ) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                let key = "「 YOUTUBE AUDIO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Quality: ${quality}\n`
                key += `• Size: ${filesize}\n`
                key += `• Download: ${getdl.data}\n\n`
                        key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                        await NXL.replyWithPhoto({
                            url: thumbnail
                        }, {
                            caption: key
                        })
                        await NXL.replyWithAudio({
                            url: download,
                            filename: title
                        })
                    } else {
                        let key = "「 YOUTUBE AUDIO 」\n\n"
                        key += `• Id: ${id}\n`
                        key += `• Title: ${title}\n`
                        key += `• Quality: ${quality}\n`
                        key += `• Size: ${filesize}\n`
                        key += `• Download: ${getdl.data}\n\n`
                        key += `Silahkan download melalui link di atas jika media tidak di kirim`
                        await NXL.replyWithPhoto({
                            url: thumbnail
                        }, {
                            caption: key
                        })
                        await NXL.replyWithAudio({
                            url: download,
                            filename: title
                        })
                    }
                }
                break
                case "ytmp4": {
                    if (!args[2]) return reply(`Kirim perintah:\n/ytmp4 link youtube\n\nContoh penggunaan:\n/ytmp4 https://youtu.be/xxx`)
                    if (!isUrl(args[2])) return reply(`Kirim perintah:\n/ytmp4 link youtube\n\nContoh penggunaan:\n/ytmp4 https://youtu.be/xxx`)
                    if (!args[2].includes('youtu.be') && !args[2].includes('youtube.com')) return reply(`Kirim perintah:\n/ytmp4 link youtube\n\nContoh penggunaan:\n/ytmp4 https://youtu.be/xxx`)
                    reply(lang.wait)
                    await NXL.deleteMessage()
                    let res = await fetch(global.api('alfa', '/api/downloader/youtube-video', {
                        url: args[2]
                    }, '8HsqJgz4ZinQjvX'))
                    if (!res.ok) throw await res.text()
                    var result = await res.json()
                    var {
                        id,
                        thumbnail,
                        title,
                        quality,
                        filesize,
                        size,
                        download
                    } = result.result
                    var getdl = await axios.get(`https://tinyurl.com/api-create.php?url=${download}`)
                    if (size.replace("MB","") > 50 || size.replace("GB","") >= 1 ) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                        let key = "「 YOUTUBE VIDEO 」\n\n"
                        key += `• Id: ${id}\n`
                        key += `• Title: ${title}\n`
                        key += `• Quality: ${quality}\n`
                        key += `• Size: ${filesize}\n`
                        key += `• Download: ${getdl.data}\n\n`
                        key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                        await NXL.replyWithPhoto({
                            url: thumbnail
                        }, {
                            caption: key
                        })
                        NXL.replyWithVideo({
                            url: download
                        }, {
                            caption: lang.ok
                        })
                    } else {
                        let key = "「 YOUTUBE VIDEO 」\n\n"
                        key += `• Id: ${id}\n`
                        key += `• Title: ${title}\n`
                        key += `• Quality: ${quality}\n`
                        key += `• Size: ${filesize}\n`
                        key += `• Download: ${getdl.data}\n\n`
                        key += `Silahkan download melalui link di atas jika media tidak di kirim`
                        await NXL.replyWithPhoto({
                            url: thumbnail
                        }, {
                            caption: key
                        })
                        NXL.replyWithVideo({
                            url: download
                        }, {
                            caption: lang.ok
                        })
                    }
                }
                break
            }
        } catch (e) {
            console.log(e)
        }
    })
    bot.command('help', async (NXL) => {
        user = simple.getUserName(NXL.message.from)
        await NXL.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Script',
                        url: "https://github.com/WangsaffMD/NXLBotz"
                    }, {
                        text: 'Owner',
                        url: OWNER[0]
                    }]
                ]
            }
        })
    })

    bot.command('start', async (NXL) => {
        let user = simple.getUserName(NXL.message.from)
        await NXL.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Script',
                        url: "https://github.com/WangsaffMD/NXLBotz"
                    }, {
                        text: 'Owner',
                        url: OWNER[0]
                    }]
                ]
            }
        })
    })
    bot.on('new_chat_members', async (chat) => {
	console.log(chat.message.from)
	let d = new Date(new Date + 3600000)
			let locale = 'id'
			let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, {
     		 day: 'numeric',
  		    month: 'long',
    		  year: 'numeric'
		    })
            const jamnyy = moment.tz("Asia/Jakarta").format('HH:mm:ss')
	var message = chat.message
	var pp_group = await simple.getPhotoProfile(message.chat.id)
	var groupname = message.chat.title
	var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
	for (x of message.new_chat_members) {
		var pp_user = await simple.getPhotoProfile(x.id)
		var full_name = simple.getUser(x).full_name
		var teks = `*Welcome to ${groupname}*

📛 : \`${full_name}\`
🆔 : \`${message.from.id}\`
🌐 : \`${message.from.language_code}\`
🏅 : \`${groupmembers} Members\`
📆 : \`${week}, ${date}\`
⏰ : \`${jamnyy} Asia/Jakarta\`
`
    	await chat.replyWithPhoto({
			url: global.api('alfa', '/api/canvas/welcomev2', {
                    avatar: pp_user,
                    username: full_name,
                    background: pp_group,
                    guildname: groupname,
                    membercount: groupmembers
               }, '8HsqJgz4ZinQjvX')
		},{
		  caption: teks, parse_mode: 'Markdown', disable_web_page_preview: true
		})
	}
})
    bot.on('left_chat_member', async (chat) => {
	console.log(chat.message.from)
	var message = chat.message
	var pp_user = await simple.getPhotoProfile(message.left_chat_member.id)
	var pp_group = await simple.getPhotoProfile(message.chat.id)
	var groupname = message.chat.title
	var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
	var pp_user = await simple.getPhotoProfile(message.left_chat_member.id)
	var full_name = simple.getUser(message.left_chat_member).full_name
  var outt = `◪ Goodbye ${full_name}

◪ Leave from group: 
${groupname}

└─ ❏ Nomor: [${full_name}](https://t.me/${message.from.username})
GoodBye~~`
	await chat.replyWithPhoto({ url: global.api('alfa', '/api/canvas/goodbyev2', {
                    avatar: pp_user,
                    username: full_name,
                    background: pp_group,
                    guildname: groupname,
                    membercount: groupmembers
               }, '8HsqJgz4ZinQjvX') }, 
	{caption: outt, parse_mode: 'Markdown'})
})
    bot.on('message', async (NXL) => {
        require("./tele")(NXL, bot)
    })

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/WangsaffMD"
        })
    })
}
startNXL()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
