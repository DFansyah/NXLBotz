var link = "https://t.me/WangsaffMD"
exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Halo ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. isi sendiri"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Mohon tunggu sebentar`"
exports.ok = `Done ✅`
exports.menu = async (NXL, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@BotFather](https://t.me/BotFather)
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
    var button = [
        [
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: '📥 Download',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: '📡 Sub Domain',
                callback_data: 'subdomaincmd ' + user_id
            }
        ],
        [
            {
                text: '👦 Owner',
                callback_data: 'owner ' + user_id
            },
        ]
    ]
    try {
        await NXL.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await NXL.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.asupancmd = async (NXL, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ASUPAN 」 
» [/chika](${link})
» [/rikagusriani](${link})
» [/bocil](${link})
» [/geayubi](${link})
» [/santuy](${link})
» [/ukhty](${link})
» [/asupan](${link})
» [/delvira](${link})
» [/ayu](${link})
» [/bunga](${link})
» [/aura](${link})
» [/nisa](${link})
» [/ziva](${link})
» [/yana](${link})
» [/viona](${link})
» [/syania](${link})
» [/riri](${link})
» [/syifa](${link})
» [/mama-gina](${link})
» [/alcakenya](${link})
» [/mangayutri](${link})
╰──────────◇
`
    await NXL.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (NXL, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }
        ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» [/china](${link})
» [/indonesia](${link})
» [/malaysia](${link})
» [/thailand](${link})
» [/korea](${link})
» [/japan](${link})
» [/vietnam](${link})
» [/jenni](${link})
» [/jiiso](${link})
» [/lisa](${link})
» [/rose](${link})
╰──────────◇
`
    await NXL.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.downloadcmd = async (NXL, thumbnail, user_id) => {
        var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }
        ]
    ]
    var caption = `╭─❒ 「 DOWNLOAD 」 
» [/ytmp4](${link})
» [/ytmp3](${link})
» [/play](${link})
» [/ytsearch](${link})
» [/igdl](${link})
» [/igphoto](${link})
» [/igvideo](${link})
» [/igreels](${link})
» [/pinterest](${link})
» [/mediafire](${link})
» [/tiktok](${link})
» [/tiktokaudio](${link})
╰──────────◇
`
    await NXL.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.islamcmd = async (NXL, thumbnail, user_id) => {
        var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }
        ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» [/asmaulhusna](${link})
» [/kisahnabi](${link})
» [/jadwalshalat](${link})
» [/randomquran](${link})
» [/randomquran2](${link})
» [/listsurah](${link})
» [/tafsirsurah](${link})
» [/alquranaudio](${link})
╰──────────◇
`
    await NXL.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.subdomaincmd = async (NXL, thumbnail, user_id) => {
        var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }
        ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» [/domain1](${link}) aetherz.xyz
» [/domain2](${link}) aetherss.xyz
» [/domain3](${link}) aetherscode.xyz
» [/domain4](${link}) dk-teamid.xyz
» [/domain5](${link}) dk-vpn.xyz
╰──────────◇
`
    await NXL.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}