require("./setting")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const axios = require("axios")
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')

const {
    simple
} = require('./lib/telefunc')

module.exports = NXL = async (NXL, bot) => {
    //console.log(NXL)
    try {
        const body = NXL.message.text || NXL.message.caption || ''
        const budy = (typeof NXL.message.text == 'string' ? NXL.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? body[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(NXL.message.from)
        const pushname = user.full_name;
        const user_id = NXL.message.from.id + " "
        const username = NXL.message.from.username ? NXL.message.from.username : "WangsaffMD";
        const isCreator = OWNER[0].replace("https://t.me/", '') == NXL.update.message.from.username
        const from = NXL.message.chat.id

        const isGroup = NXL.chat.type.includes('group')
        const groupName = isGroup ? NXL.chat.title : ''

        const isImage = NXL.message.hasOwnProperty('photo')
        const isVideo = NXL.message.hasOwnProperty('video')
        const isAudio = NXL.message.hasOwnProperty('audio')
        const isSticker = NXL.message.hasOwnProperty('sticker')
        const isContact = NXL.message.hasOwnProperty('contact')
        const isLocation = NXL.message.hasOwnProperty('location')
        const isDocument = NXL.message.hasOwnProperty('document')
        const isAnimation = NXL.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = NXL.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = NXL.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await NXL.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (let i = 0; i < 250; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (NXL.message) {       
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Wangsaff \x1b[1;37m]',chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', NXL.message.chat.id))
        }
        switch (command) {
            case 'owner':
            case 'creator': {
                await NXL.sendContact(OWNER_NUMBER, OWNER_NAME)
                reply(`My lord [${OWNER_NAME}](${OWNER[0]}) 👑`)
            }
            break
            case "privacy":
            case "snk": {
                reply(lang.snk)
            }
            break
            case 'menu':
            case 'help': {
                hitall = `-`
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
                lang.menu(NXL, THUMBNAIL, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, NXL.message.from.id.toString())
            }
            break
            //Asupan
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
                reply(lang.wait)
                let ini_url = global.api('alfa', '/api/asupan/' + command, {}, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                NXL.replyWithVideo({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            //download
            case 'youtube':
            case 'yt':
            case 'ytv':
            case 'mp4':
            case 'ytmp4':
            case 'ytshorts':
            case 'ytshort': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/youtube-video', {
                    url: args[0]
                }, 'apikey'))
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
                let key = "「 YOUTUBE VIDEO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Quality: ${quality}\n`
                key += `• Size: ${filesize}\n`
                key += `• Download: ${getdl.data}\n\n`
                key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                if (size.replace("MB","") > 50 || size.replace("GB","") >= 1 ) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                    await NXL.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                } else {
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
            case 'ytshortsmp3':
            case 'ytshortmp3':
            case 'mp3':
            case 'ytmp3': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n\`${prefix+command} link youtube\`\n\nContoh penggunaan:\n\`${prefix+command} https://youtu.be/kwop2Eg5QY4\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/youtube-audio', {
                    url: args[0]
                }, 'apikey'))
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
                let key = "「 YOUTUBE AUDIO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Quality: ${quality}\n`
                key += `• Size: ${filesize}\n`
                key += `• Download: ${getdl.data}\n\n`
                key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                if (size.replace("MB","") > 50 || size.replace("GB","") >= 1 ) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                    await NXL.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                } else {
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
            case 'play': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} judul lagu\`\n\nContoh penggunaan:\n\`${prefix+command} baon cikadap\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/youtube-search', {
                    query: text
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var {
                    videoId,
                    image,
                    title,
                    views,
                    duration,
                    author,
                    ago,
                    url,
                    description
                } = result.result.videos[0]
                let thumbInfo = `*「 YOUTUBE PLAY 」*

🆔 ID : ${videoId}
💬 Title : ${title}
📺 Views : ${views}
⏰ Duration : ${duration.timestamp}
▶️ Channel : ${author.name}
📆 Upload : ${ago}
🔗 URL Video : ${url}
📝 Description : ${description}

Kirim berikut perintah untuk mendownload media
${prefix}ytmp3 ${url}
${prefix}ytmp4 ${url}`
                NXL.replyWithPhoto({
                    url: image
                }, {
                    caption: thumbInfo,
                    parse_mode: 'MARKDOWN',
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                    text: '🎻 Audio',
                                    callback_data: 'ytmp3 ' + user_id + url
                                },
                                {
                                    text: 'Video 🎦',
                                    callback_data: 'ytmp4 ' + user_id + url
                                }
                            ]
                        ]
                    }
                })
            }
            break
            case 'yts':
            case 'ytsearch': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} judul lagu/video\`\n\nContoh penggunaan:\n\`${prefix+command} baon cikadap\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/youtube-search', {
                    query: text
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                let dapet = result.result.videos
                var tbuff = dapet[0].image
                cap = "「 YOUTUBE SEARCH 」\n\n"
                for (let v = 0; v < 2; v++) {
                    cap += `🆔 ID : ${dapet[v].videoId}
💬 Title : ${dapet[v].title}
📺 Views : ${dapet[v].views}
⏰ Duration : ${dapet[v].timestamp}
▶️ Channel : ${dapet[v].type == 'video' ? dapet[v].author.name : dapet[v].name}
📆 Upload : ${dapet[v].ago}
🔗 URL Video : ${dapet[v].url}
📝 Description : ${dapet[v].description}\n\n---------------------------\n\n`
                }
                NXL.replyWithPhoto({
                    url: tbuff
                }, {
                    caption: cap
                })
            }
            break
            break
            case 'igphoto':
            case 'instaphoto':
            case 'instafoto':
            case 'igfoto':
            case "ig":
            case "igdl": {
                if (!args[0]) return reply(`Kirim perintah:\n\`${prefix+command} link Instagram\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=\``)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n\`${prefix+command} link Instagram\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                //for (let i = 0; i < result.url.length; i++) {
                for (let i of result.url) {
                    if (!i.includes("cdninstagram")) {
                        NXL.replyWithVideo({
                            url: i
                        }, {
                            caption: lang.ok
                        })
                    } else {
                        NXL.replyWithPhoto({
                            url: i
                        }, {
                            caption: lang.ok
                        })
                    }
                }
            }
            break
            case 'igvideo':
            case 'instavideo':
            case 'instavid':
            case 'igreels':
            case 'instareels':
            case 'instareel': {
                if (!args[0]) return reply(`Kirim perintah:\n\`${prefix+command} link Instagram video/reels\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=\``)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n\`${prefix+command} link Instagram video/reels\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                for (let i of result.url) {
                    NXL.replyWithVideo({
                        url: i
                    }, {
                        caption: lang.ok
                    })
                }
            }
            break
            case "pinterest": {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} query\`\n\nContoh penggunaan:\n\`${prefix+command} sakura\``)
                //if (isUrl(text)) return reply(`Kirim perintah:\n\`${prefix+command} query\`\n\nContoh penggunaan:\n\`${prefix+command} sakura\``)
                reply(lang.wait)
                let ini_url = global.api('alfa', '/api/downloader/pinterest2', {
                    query: text
                }, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                NXL.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case "mf":
            case "mediafire": {
                if (!args[0]) return reply(`Kirim perintah:\n\`${prefix+command} link mediafire\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.mediafire.com/file/xxxx\``)
                if (!isUrl(args[0]) && !args[0].includes("mediafire.com")) return reply(`Kirim perintah:\n\`${prefix+command} link MediaFire\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.mediafire.com/file/xxx\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/mediafire', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var {
                    nama,
                    size,
                    link
                } = result.result[0]
                console.log(size)
                if (size.replace('MB', '') >= 100 || size.replace('GB', '') >= 1) { //size edit sendiri jika mau download yang lebih media yang lebih besar
                    var key = `「 Mediafire Download 」\n\n`
                    key += `Nama: ${nama}\n`
                    key += `Tipe: ${result.result[0].mime}\n`
                    key += `Size: ${size}\n`
                    key += `Link: ${link}\n\n`
                    key += `Untuk size lebih dari batas, silahkan download melalui link diatas.`
                    reply(key)
                } else {
                    var key = `「 Mediafire Download 」\n\n`
                    key += `Nama: ${nama}\n`
                    key += `Tipe: ${result.result[0].mime}\n`
                    key += `Size: ${size}\n`
                    key += `Link: ${link}\n\n`
                    key += `Media dalam proses pengiriman, membutuhkan waktu sekitar 5,9 jam silahkan di tunggu.`
                    await reply(key)
                    if (nama.includes(".zip")) {
                        NXL.replyWithDocument({
                            url: link,
                            filename: nama
                        })
                    } else if (nama.includes(".mp4")) {
                        NXL.replyWithVideo({
                            url: link
                        }, {
                            caption: lang.ok
                        })
                    } else if (nama.includes(".mp3")) {
                        NXL.replyWithAudio({
                            url: link,
                            filename: name
                        })
                    } else {
                        reply("Invalid media type")
                    }
                }
            }
            break
            case "tiktoknowm":
            case "tiktok": {
                if (!args[0]) return reply(`Kirim perintah:\n\`${prefix+command} link tiktok video\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.tiktok.com/xxxx\``)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n\`${prefix+command} link tiktok video\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.tiktok.com/xxxx\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                NXL.replyWithVideo({
                    url: result.nowm
                }, {
                    caption: lang.ok
                })
            }
            break
            case "tiktokaudio": {
                if (!args[0]) return reply(`Kirim perintah:\n\`${prefix+command} link tiktok video\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.tiktok.com/xx\``)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n\`${prefix+command} link tiktok video\`\n\nContoh penggunaan:\n\`${prefix+command} https://www.tiktok.com/xxx\``)
                reply(lang.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                NXL.replyWithAudio({
                    url: result.audio,
                    filename: "Tiktok Audio.mp3"
                })
            }
            break
            //islamic
            case 'asmaulhusna': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Asmaul Husna\n\n'
                key += `• Latin : ${data.result.latin}\n`
                key += `• Arabic : ${data.result.arabic}\n`
                key += `• Tr id : ${data.result.translation_id}\n`
                key += `• Tr en : ${data.result.translation_en}`
                reply(key)
            }
            break
            case 'kisahnabi': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} nama nabi\`\n\nContoh penggunaan:\n\`${prefix+command} Adam\``)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    nabi: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Kisah Nabi\n\n'
                key += `• Name : ${data.result.name}\n`
                key += `• Birth : ${data.result.birth}\n`
                key += `• Death Age : ${data.result.death_age}\n`
                key += `• Country : ${data.result.country_from}\n`
                key += `• Story : ${data.result.story}\n`
                reply(key)
            }
            break
            case 'jadwalshalat': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} nama daerah\`\n\nContoh penggunaan:\n\`${prefix+command} Makassar\``)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    daerah: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Jadwal Shalat \n\n'
                key += `• Daerah : ${q}\n\n`
                key += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
                key += `• Subuh : ${data.result.today.Shubuh}\n`
                key += `• Zuhur : ${data.result.today.Dzuhur}\n`
                key += `• Ashr : ${data.result.today.Ashr}\n`
                key += `• Magrib : ${data.result.today.Maghrib}\n`
                key += `• Isya : ${data.result.today.Isya}\n`
                reply(key)
            }
            break
            case 'randomquran': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = 'Random Quran\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_Audio sedang dalam di proses pengiriman_`
                reply(key)
                NXL.replyWithAudio({
                    url: short.ayah.audio.primary,
                    filename: short.nameOfSurah.short
                })
            }
            break
            case 'randomquran2': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} juz 1-30\`\n\nContoh penggunaan:\n\`${prefix+command} 1\``)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    juz: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = 'Random Quran\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_Audio sedang dalam di proses pengiriman_`
                reply(key)
                NXL.replyWithAudio({
                    url: short.ayah.audio.primary,
                    filename: short.nameOfSurah.short
                })
            }
            break
            case 'listsurah': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                key = 'List Surah\n\n'
                reply(key + data.result)
            }
            break
            case 'tafsirsurah': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} nama surah\`\n\nContoh penggunaan:\n\`${prefix+command} Al-fatihah\``)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    surah: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Tafsir Surah\n\n'
                let no = 0
                for (var i = 0; i < data.result.length; i++) {
                    no += 1
                    key += `• Surah : ${data.result[i].surah}\n`
                    key += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
                }
                reply(key)
            }
            break
            case 'alquranaudio': {
                if (!text) return reply(`Kirim perintah:\n\`${prefix+command} surah|ayah\`\n\nContoh penggunaan:\n\`${prefix+command} 1|5\``)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var asma = await fetch(api('alfa', '/api/islam/alquran-audio2', {
                    ayat: m2,
                    surah: m1
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.data
                let key = 'Alquran Audio\n\n'
                key += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
                key += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
                key += `• Surah ke : ${short.surah.number}\n`
                key += `• Urutan : ${short.surah.sequence}\n`
                key += `• Total ayat : ${short.surah.numberOfVerses}\n`
                key += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
                key += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
                key += `• Juz : ${short.meta.juz}\n`
                key += `• Page : ${short.meta.page}\n`
                key += `• Manzil : ${short.meta.manzil}\n`
                key += `• Ruku : ${short.meta.ruku}\n`
                key += `• Quarte : ${short.meta.hizbQuarter}\n`
                key += `• Arab : ${short.text.arab}\n`
                key += `• Latin : ${short.text.transliteration.en}\n`
                key += `• Tr en : ${short.translation.en}\n`
                key += `• Tr id : ${short.translation.id}\n`
                key += `• Tafsir short : ${short.tafsir.id.short}\n`
                key += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
                reply(key)
                NXL.replyWithAudio({
                    url: short.audio.primary,
                    filename: short.surah.name.short
                })
            }
            break
            case 'nulis':
                reply(`Pilihan Fitur Nulis

1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
\`${prefix}nuliskiri Subscribe Ya YT NXL\``)
                break
            case 'foliokiri':
            case 'foliokanan':
            case 'nuliskanan':
            case 'nuliskiri': {
                if (text.length < 2) return reply(`Kirim perintah:\n\`${prefix+command} teks\`\n\nContoh penggunaan\n\`${prefix+command} ini tulisan saya\``)
                reply(lang.wait)
                const tulisan = text
                let ini_url = global.api("alfa", '/api/canvas/' + command, {
                    text: tulisan
                }, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                NXL.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
                       case 'domain1': {
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
            default:
            if (budy.startsWith('> ')) {
               if (!isCreator) return reply("Khusus owner")
               try {
                  let evaled = await eval(budy.slice(2))
                  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                  await reply(evaled)
               } catch (err) {
                  await reply(util.format(err))
               }
            }
        }
    } catch (e) {
        NXL.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}
