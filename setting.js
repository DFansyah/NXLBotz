const fs = require('fs')
const chalk = require('chalk')
const { indonesia } = require("./lib/language")
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Wangsaff' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6283145372436'] // ubah aja pake nomor lu
global.botname = 'NXL Botz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.idchannel = '-'//'120363305511727707@newsletter'
global.linkgc = '-'
global.thumbnail = 'https://telegra.ph/file/82afde68f917e8d0dbfe3.png'
global.foter1 = 'NXL Botz'
global.foter2 = 'NXL Botz BY Wɑng𝚂ɑẜẜ『 ᴹᴅ 』'
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.Ghost = '`'
global.packname = 'Sticker By'
global.author = 'Wɑng𝚂ɑẜẜ『 ᴹᴅ 』'
global.skizo = "Wɑng𝚂ɑẜẜ『 ᴹᴅ 』"
global.wm = "Wɑng𝚂ɑẜẜ『 ᴹᴅ 』"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//telegram
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', 
}
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Your Apikey', 
}
global.language = indonesia
global.BOT_TOKEN = "Your Bot Token"
global.BOT_NAME = "NXLBotz"
global.OWNER_NAME = "Wɑng𝚂ɑẜẜ『 ᴹᴅ 』"
global.OWNER_NUMBER = "6283145372436"
global.OWNER = ["https://t.me/WangsaffMD", "https://t.me/WangsaffMD"]
global.THUMBNAIL = "./media/asep.jpg"
global.DONASI = "./media/asep.jpg"
global.lang = language

//Send Pay
global.dana = "083101155208"
global.ovo = "083101155208"
global.gopay = "-"
global.qris = "-"
//"https://telegra.ph/file/e30b7d90487c97a366534.jpg"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})