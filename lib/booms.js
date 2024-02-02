"use strict";
const { isBoom, getBomTic  } = require('./boom.js');

module.exports = async (budy, boom, sender, conn, m) => {
	if (isBoom(sender, boom)){
           //let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
           let xx = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
           let posi = boom[getBomTic(sender, boom)]
           let anu = posi.board
           if (sender === posi.id) {
           	if(isNaN(budy)) return
           		const u = Number(budy)-1
           		if(!anu[u]) return
           		if(anu[u] !== '💥') {
           			if(anu[u] == '✅') return m.reply('Nomor sudah terisi.')
			    	let o;
			    	o = anu 
			    	o[u] = '✅'
			    	//await boom.findOneAndUpdate({id: sender}, {board: o})
			    	const z = await anu.filter(i => i == '✅')
			    	let v
			    	Object.keys(anu).forEach((i) => {
			    		if (anu[i] == '💥') {
			    			v = xx[i]
			    		}
			    	})
			    let b1 = anu[0] == '💥'? v : anu[0]
			    let b2 = anu[1] == '💥'? v : anu[1]
			    let b3 = anu[2] == '💥'? v : anu[2]
			    let b4 = anu[3] == '💥'? v : anu[3]
			    let b5 = anu[4] == '💥'? v : anu[4]
			    let b6 = anu[5] == '💥'? v : anu[5]
			    let b7 = anu[6] == '💥'? v : anu[6]
			    let b8 = anu[7] == '💥'? v : anu[7]
			    let b9 = anu[8] == '💥'? v : anu[8]
			    const capt = `*B O O M*
Room ID : ${posi.room}

Buka tanpa mengenai BOOM

  ${b1}${b2}${b3}
  ${b4}${b5}${b6}
  ${b7}${b8}${b9}

`
				if (z.length >= 8) {
			    const capt1 = `*B O O M*
Room ID : ${posi.room}

Kamu membuka kotak tanpa mengenai BOOM

  ${b1}${b2}${b3}
  ${b4}${b5}${b6}
  ${b7}${b8}${b9}

Kamu memenangkan permainan`					
					//m.reply(capt1)
					conn.sendMessage(m.chat, { text: capt1, edit: posi.message }, { quoted: m })
						//global.db.data.users[posi.id].balance += posi.reward
						await boom.splice(getBomTic(sender, boom), 1)
				} else {
					//m.reply(capt)
					conn.sendMessage(m.chat, { text: capt, edit: posi.message }, { quoted: m })
					}
           		} else {
			    let b1 = anu[0]
			    let b2 = anu[1]
			    let b3 = anu[2]
			    let b4 = anu[3]
			    let b5 = anu[4]
			    let b6 = anu[5]
			    let b7 = anu[6]
			    let b8 = anu[7]
			    let b9 = anu[8]
				const capt = `*B O O M*
Room ID : ${posi.room}

Kamu membuka kotak berisi BOOM

  ${b1}${b2}${b3}
  ${b4}${b5}${b6}
  ${b7}${b8}${b9}

Kamu kalah dalam permainan`
					//m.reply(capt)
					conn.sendMessage(m.chat, { text: capt, edit: posi.message }, { quoted: m })
					await boom.splice(getBomTic(sender, boom), 1)			
           		}
           }
	}
}
