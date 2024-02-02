"use strict";
const { parseMention } = require('./myfunc')
const { isTicTacToe, getPosTic, KeisiSemua, cekIsi, cekTicTac } = require('./tictactoe.js')

module.exports = async (budy, prefix, from, sender, reply, m, conn) => {
    try {
        // TicTacToe
        if (isTicTacToe(from, global.DATABASE.data.game.tictactoe)){
            let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            let posi =  global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)]
            let anu = posi.TicTacToe
            let room = posi.room
            if (posi.status === null){
                if (sender === posi.ditantang){
                    if (budy.toLowerCase() === 'y'){
                        const text1_ = `*Tic Tac Toe*
Room ID : ${room}

@${posi.ditantang.split('@')[0]} Menerima tantangan

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`
                        //reply(text1_)
                        conn.sendMessage(m.chat, { text: text1_, edit: posi.message, mentions: parseMention(text1_) }, { quoted: m })
                        global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].status = true 
                    } else if (budy.toLowerCase() === 't'){
                        const text2_ = `*Tic Tac Toe*

@${posi.ditantang.split('@')[0]} Menolak tantangan
Kirim ${prefix}titactoe @pengguna`
                        //reply(text2_)
                        conn.sendMessage(m.chat, { text: text2_, edit: posi.message, mentions: parseMention(text2_) }, { quoted: m })
                        global.DATABASE.data.game.tictactoe.splice(getPosTic(from,  global.DATABASE.data.game.tictactoe), 1)
                    }
                }
            } else if (posi.status === true){
                if (sender === posi.penantang){
                    for (let i of nomor){
                        if (Number(budy) === i){
                            if (cekIsi(Number(budy) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
                             global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].TicTacToe[Number(budy) - 1] = '❎'
                            if (cekTicTac( global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].TicTacToe)){
                                const text3_ = `*Tic Tac Toe*
Room ID : ${room}
                                
@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Balance Bertambah : 💴 ${posi.hadiah}
Ingin bermain lagi? ${prefix}tictactoe @pengguna`
                                //reply(text3_)
                                conn.sendMessage(m.chat, { text: text3_, edit: posi.message, mentions: parseMention(text3_) }, { quoted: m })
                                global.DATABASE.data.users[posi.penantang].userBalance =+ posi.hadiah
                                global.DATABASE.data.game.tictactoe.splice(getPosTic(from,  global.DATABASE.data.game.tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                const text4_ = `*Tic Tac Toe*
Room ID : ${room}

Pertandingan Seri

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe @pengguna`
                                //reply(text4_)
                                conn.sendMessage(m.chat, { text: text4_, edit: posi.message, mentions: parseMention(text4_) }, { quoted: m })
                                global.DATABASE.data.game.tictactoe.splice(getPosTic(from,  global.DATABASE.data.game.tictactoe), 1)
                            } else {
                                const text5_ = `*Tic Tac Toe*
Room ID : ${room}

@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.ditantang.split('@')[0]}`
                                //reply(text5_)
                                conn.sendMessage(m.chat, { text: text5_, edit: posi.message, mentions: parseMention(text5_) }, { quoted: m })
                                global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].status = false
                                 
                            }
                        }
                    }
                }
            } else if (posi.status === false){
                if (sender === posi.ditantang){
                    for (let i of nomor){
                        if (Number(budy) === i){
                            if (cekIsi(Number(budy) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
                             global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].TicTacToe[Number(budy) - 1] = '⭕' 
                            if (cekTicTac(anu)){
                                const text6_ = `*Tic Tac Toe*
Room ID : ${room}

@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Balance Bertambah : 💴 ${posi.hadiah}
Ingin bermain lagi? ${prefix}tictactoe @pengguna`
                                //reply(text6_)
                                conn.sendMessage(m.chat, { text: text6_, edit: posi.message, mentions: parseMention(text6_) }, { quoted: m })
                                global.DATABASE.data.users[posi.ditantang].userBalance =+ posi.hadiah
                                global.DATABASE.data.game.tictactoe.splice(getPosTic(from,  global.DATABASE.data.game.tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                const text7_ = `*Tic Tac Toe*
Room ID : ${room}

Pertandingan Seri

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe @pengguna`
                                //reply(text7_)
                                conn.sendMessage(m.chat, { text: text7_, edit: posi.message, mentions: parseMention(text7_) }, { quoted: m })
                                global.DATABASE.data.game.tictactoe.splice(getPosTic(from,  global.DATABASE.data.game.tictactoe), 1)
                            } else {
                                const text8_ = `*Tic Tac Toe*
Room ID : ${room}

@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`
                                //reply(text8_)
                                conn.sendMessage(m.chat, { text: text8_, edit: posi.message, mentions: parseMention(text8_) }, { quoted: m })
                                global.DATABASE.data.game.tictactoe[getPosTic(from,  global.DATABASE.data.game.tictactoe)].status = true
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