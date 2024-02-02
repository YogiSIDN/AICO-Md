"use strict";
const { parseMention } = require('./myfunc')
const { Chess } = require('chess.js')
const fs = require('fs')
const chalk = require('chalk')

module.exports = async (txt, prefix, from, reply, m, conn, cs, isCmd) => {
	try {
        if (cs[m.chat] && !isCmd && m.quoted) {
        	if (m.chat in cs) {
        		if (m.quoted.id == cs[m.chat].message.key.id) {
        			if (cs[m.chat].status === null) {
        				if (/^terima?$/i.test(txt)) {
        					const [black, white] = Math.random() < 0.5 ? [cs[m.chat].players[1], cs[m.chat].players[0]] : [cs[m.chat].players[0], cs[m.chat].players[1]]
                    		cs[m.chat].status = true
                    		cs[m.chat].black = black
                    		cs[m.chat].white = white
                    		cs[m.chat].currentTurn = white
                    		const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
                    		cs[m.chat].fen = fen 
                    		const encodedFen = cs[m.chat].fen
                    		const turn = `♛ Chess Game ♛\n\nGiliran:\n• Putih: @${cs[m.chat].white.split('@')[0]}`
                    		const flipParam = m.sender === cs[m.chat].black ? '' : '&flip=true'
                    		const flipParam2 = m.sender === cs[m.chat].black  ? '' : '-flip'
                    		const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
                    		let msg 
                    		try {
                    			msg = await conn.sendMessage(m.chat, { image: { url: boardUrl }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    		} catch (error) {
                    		const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
                    			msg = await conn.sendMessage(m.chat, { image: { url: boardUrl2 }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    		}
                    		cs[m.chat].message = msg 
        				} else if (/^tolak?$/i.test(txt)) {
        					await reply(`@${cs[m.chat].players[1].split('@')[0]} Menolak tantangan.`)
							delete cs[m.chat]
        				}
        			} else if (cs[m.chat].status === true) {
        				if (m.sneder === cs[m.chat].currentTurn) {
        					if (/^\S+(\s|[\W])\S+$/.test(txt)) {
							const chess = new Chess(cs[m.chat].fen)
							if (chess.isCheckmate()) {
							await reply(`⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}`)
							delete cs[m.chat]
							return;
						}
							if (chess.isDraw()) {
							await reply(`⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.`)
							delete cs[m.chat]
							return;
						}
							const [from, to] = txt.split(' ')
							chess.move({ from, to, promotion: 'q' })
							const currentTurnIndex = cs[m.chat].players.indexOf(cs[m.chat].currentTurn)
							const nextTurnIndex = (currentTurnIndex + 1) % 2;
							const fen = chess.fen()
							cs[m.chat].fen = fen
							cs[m.chat].currentTurn = cs[m.chat].players[nextTurnIndex]
							const encodedFen = cs[m.chat].fen
							const currentColor = cs[m.chat].currentTurn === cs[m.chat].white ? 'Putih' : 'Hitam';
							const turn = `♛ Chess Game ♛\n\nGiliran:\n• ${currentColor}: @${cs[m.chat].currentTurn.split('@')[0]}`
							const flipParam = m.sender === cs[m.chat].black ? '' : '&flip=true'
                    		const flipParam2 = m.sender === cs[m.chat].black  ? '' : '-flip'
                    		let msg
                    		try {
                    			msg = await conn.sendMessage(m.chat, { image: { url: boardUrl }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    		} catch (error) {
                    		const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
                    			msg = await conn.sendMessage(m.chat, { image: { url: boardUrl2 }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    			}
                    		ca[m.chat].message = msg
        					}
        				}
        			}
        		}
        	}
        }
	} catch (err){
        console.log(err)
    }
}

/*module.exports = async (budy, prefix, from, reply, m, conn, cs, args) => {
	try {
		let txt = (m.text ? m.text : '').toLowerCase()
		if (m.chat in cs) {
			if (budy.toLowerCase() === 'terima') {
				const [black, white] = Math.random() < 0.5 ? [cs[m.chat].players[1], cs[m.chat].players[0]] : [cs[m.chat].players[0], cs[m.chat].players[1]]
                    cs[m.chat].status = true
                    cs[m.chat].black = black
                    cs[m.chat].white = white
                    cs[m.chat].currentTurn = white
                    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
                    cs[m.chat].fen = fen 
                    const encodedFen = cs[m.chat].fen
                    const turn = `♛ Chess Game ♛\n\nGiliran:\n• Putih: @${cs[m.chat].white.split('@')[0]}`
                    const flipParam = m.sender === cs[m.chat].black ? '' : '&flip=true'
                    const flipParam2 = m.sender === cs[m.chat].black  ? '' : '-flip'
                    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
                    try {
                    await conn.sendMessage(m.chat, { image: { url: boardUrl }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    } catch (error) {
                    const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
                    await conn.sendMessage(m.chat, { image: { url: boardUrl2 }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    }
			} else if (budy.toLowerCase() === 'tolak') {
					await reply(`@${cs[m.chat].players[1].split('@')[0]} Menolak tantangan.`)
					delete cs[m.chat]
			}
			if (/^\S+(\s|[\W])\S+$/.test(txt)) {
					if (cs[m.chat].currentTurn !== m.sender) {
						reply('Kamu baru saja menjalankan bidak sebelumnya.')
					}
						const chess = new Chess(cs[m.chat].fen)
						if (chess.isCheckmate()) {
							await reply(`⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}`)
							delete cs[m.chat]
							return;
						}
						if (chess.isDraw()) {
							await reply(`⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.`)
							delete cs[m.chat]
							return;
						}
						const [from, to] = txt.split(' ');
							chess.move({ from, to, promotion: 'q' })
							const currentTurnIndex = cs[m.chat].players.indexOf(cs[m.chat].currentTurn)
							const nextTurnIndex = (currentTurnIndex + 1) % 2;
							const fen = chess.fen()
							cs[m.chat].fen = fen
							cs[m.chat].currentTurn = cs[m.chat].players[nextTurnIndex]
							const encodedFen = cs[m.chat].fen
							const currentColor = cs[m.chat].currentTurn === cs[m.chat].white ? 'Putih' : 'Hitam';
							const turn = `♛ Chess Game ♛\n\nGiliran:\n• ${currentColor}: @${cs[m.chat].currentTurn.split('@')[0]}`
							const flipParam = m.sender === cs[m.chat].black ? '' : '&flip=true'
                    		const flipParam2 = m.sender === cs[m.chat].black  ? '' : '-flip'
                    		const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
                    		try {
                    		await conn.sendMessage(m.chat, { image: { url: boardUrl }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    		} catch (error) {
                    		const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
                    		await conn.sendMessage(m.chat, { image: { url: boardUrl2 }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    }

			}
		}
    } catch (err){
        console.log(err)
    }
}*/

