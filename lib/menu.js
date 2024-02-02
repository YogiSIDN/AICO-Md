fs = require('fs')
chalk = require('chalk')

exports.menu = menu = (prefix, botname, pushName) => {
	let n = 1
	return `👋 (❤ω❤) Hai

🤖 Bagian Bot
${n++}. ${prefix}snk
${n++}. ${prefix}support

🎓 Bagian Pengguna
${n++}. ${prefix}lb
${n++}. ${prefix}afk
${n++}. ${prefix}rank
${n++}. ${prefix}profile
${n++}. ${prefix}petpet
${n++}. ${prefix}sticker
${n++}. ${prefix}enhance
${n++}. ${prefix}gallery
${n++}. ${prefix}getimage

🎩 Bagian Admin
${n++}. ${prefix}active
${n++}. ${prefix}icon
${n++}. ${prefix}delete
${n++}. ${prefix}close
${n++}. ${prefix}leave
${n++}. ${prefix}grouolink
${n++}. ${prefix}revoke
${n++}. ${prefix}promote 
${n++}. ${prefix}demote
${n++}. ${prefix}register
${n++}. ${prefix}unregister
${n++}. ${prefix}mute
${n++}. ${prefix}unmute

🎌 Bagian Weeaboo
${n++}. ${prefix}aid
${n++}. ${prefix}anime
${n++}. ${prefix}mid
${n++}. ${prefix}manga
${n++}. ${prefix}charid
${n++}. ${prefix}character
${n++}. ${prefix}treanime
${n++}. ${prefix}tremanga
${n++}. ${prefix}news
${n++}. ${prefix}elf
${n++}. ${prefix}loli
${n++}. ${prefix}neko
${n++}. ${prefix}waifu
${n++}. ${prefix}ncode
${n++}. ${prefix}nhentai
${n++}. ${prefix}komiku
${n++}. ${prefix}komiku detail 
${n++}. ${prefix}komiku download

🤳 Bagian Media
${n++}. ${prefix}google
${n++}. ${prefix}pinterest
${n++}. ${prefix}tiktok
${n++}. ${prefix}music
${n++}. ${prefix}ytmp3
${n++}. ${prefix}ytmp4
${n++}. ${prefix}youtube
${n++}. ${prefix}soundcloud
${n++}. ${prefix}instagram

🎳 Bagian Permainan
${n++}. ${prefix}boom
${n++}. ${prefix}claim
${n++}. ${prefix}marry
${n++}. ${prefix}divorce
${n++}. ${prefix}tictactoe
${n++}. ${prefix}werewolf`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.bgRedBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})