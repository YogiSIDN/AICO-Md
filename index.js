
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, jidNormalizedUser, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const fetch = require('node-fetch')
const figlet = require("figlet");
const axios = require('axios')
const readline = require('readline')
const spin = require('spinnies')
const PhoneNumber = require('awesome-phonenumber')
//const { WelcomeBuilder, LeaveBuilder } = require('discord-card-canvas')
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif')
const {
   toAudio,
   toPTT,
   toVideo
} = require('./lib/converter')
const afk = require('./lib/afk.js')
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, parseMention } = require('./lib/myfunc')
const { toBuffer, toDataURL } = require('qrcode')
const express = require ('express')

const question = (text) => {
  const ltext = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise((resolve) => {
    ltext.question(text, resolve)
  })
}

/*const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

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
    game: {
        tictactoe: [],
        akinator: []
    },
    order_list: [],
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 10seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 10 * 1000)*/

const yargs = require('yargs/yargs')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.DATABASE = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
if (!global.DATABASE.data.users) global.DATABASE.data = {
  users: {},
  chats: {},
  game: {
    tictactoe: [],
    akinator: [],
    chess: {},
  },
}
if (!global.DATABASE.data.chats) global.DATABASE.data.chats = {}
if (!global.DATABASE.data.game.tictactoe) global.DATABASE.data.game.tictactoe = []
if (!global.DATABASE.data.game.akinator) global.DATABASE.data.game.akinator = []
if (!global.DATABASE.data.game.chess) global.DATABASE.data.game.chess = {}

setInterval(() => {
    global.DATABASE.save()
}, 10 * 1000) // Save every minute

const usePairingCode = true

const spinner = { 
  "interval": 120,
  "frames": [
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'crimson', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})
}
//require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

//libb
const { TelegraPh } = require('./lib/uploader')

//setting 
let session = `./session.json`
const connectToWhatsApp = async() => {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const {
      state,
      saveCreds
   } = await useMultiFileAuthState(`session`)
const {
		version,
		isLatest
	} = await fetchLatestBaileysVersion()

function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}	
const conn = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
        patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message.buttonsMessage ||
            message.templateMessage ||
            message.listMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      },
auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Hai"
            }
        },
browser: ['Ubuntu', 'Chrome', '20.0.04']
});

if(usePairingCode && !conn.authState.creds.registered) {
      const phoneNumber = await question(chalk.greenBright('Masukan nomor Whatsapp awali dengan 62:\n'));
          const code = await conn.requestPairingCode(phoneNumber.trim())
              console.log(chalk.yellow(`⚠︎ Kode Pairing Bot Whatsapp kamu :`), chalk.yellow(`${code}`))
}

    /*const conn = makeWASocket({
      version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message.buttonsMessage ||
            message.templateMessage ||
            message.listMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      },
        browser: ['conn Multi Device','Safari','1.0.0'],
        auth: state
    })*/

  //require("./command/case")
  //nocache('./command/case', module => console.log(chalk.greenBright('[ UPDATED ]  ') + new Date() + chalk.cyanBright(` "${module}" Telah diupdate!`)))
  
  if (conn.user && conn.user.id) conn.user.jid = jidNormalizedUser(conn.user.id)
    
 	conn.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect} = update	    
        if (connection === 'close') {
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
} else if (connection === 'connecting') {
console.log(`Connecting...`)
} else if (connection === "open") {
console.log(`Connected...`) 
}
    })
    store.bind(conn.ev)
    
    conn.ev.on('messages.upsert', async chatUpdate => {
        try {
        //mek = chatUpdate.messages[0]
        for (let mek of chatUpdate.messages) {
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        const m = smsg(conn, mek, store)
        require("./command/case")(conn, m, chatUpdate, mek, _afk, store)
        }
        } catch (err) {
            console.log(err)
        }
    })

    conn.ev.on('presence.update', async msg => {
        if (msg.presences){
            for (let key in msg.presences){
                if (msg.presences[key].lastKnownPresence === "composing" || msg.presences[key].lastKnownPresence === "recording"){
                    if (afk.checkAfkUser(key, _afk)){
                    _afk.splice(afk.getAfkPosition(key, _afk), 1)
                    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                    const capt_afks = `• @${key.split`@`[0]} Terdeteksi melakukan aktifitas`
                    await conn.sendMessage(msg.id, { text : capt_afks, mentions: parseMention(capt_afks) })
                    //await conn.sendText(msg.id, capt_afks, m, { mentions: parseMention(capt_afks) })            
                    }                         
                 }
            }
        }
    })
    
	
conn.ev.on('creds.update', saveCreds)

async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Hai"
        }
    }

   conn.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
            if(update.pollUpdates && key.fromMe) {
                const pollCreation = await getMessage(key)
                if(pollCreation) {
                    const pollUpdate = await getAggregateVotesInPollMessage({
                            message: pollCreation,
                            pollUpdates: update.pollUpdates,
                        })
                    var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
                    if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
                    conn.appenTextMessage(prefCmd, chatUpdate)
                }
            }
        }
    })

    // Setting
    conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    conn.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    conn.ev.on('groups.update', async (msg) => {
        console.log(msg)
        if (!msg[0].subject == '') {
            conn.sendMessage(msg[0].id, { text: '• Terdeteksi mengubah nama grup menjadi ' + msg[0].subject })
        }
    })

    /*conn.ev.on("message.delete", async (anu) => {
        const { aDelete } = require ('./lib/welcome');
        if (global.DATABASE.data.chats[anu.remoteJid].deleteMsg) {
            aDelete(conn, anu)
        }
    })*/

    conn.ev.on('group-participants.update', async (msg) => {
        //console.log(msg)
        try {
            const metadata = await conn.groupMetadata(msg.id)
            const num = msg.participants[0]
            const numPushname = await conn.getName(num)
            if (msg.action === 'add') {
                if (global.DATABASE.data.chats[msg.id].welcome) {
                try {
                    ppimg = await conn.profilePictureUrl(num, 'image')
                    } catch {
                    ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                /*let cv = new WelcomeBuilder({
                // backgroundImgURL: 'any_image.png', ( you can also use )
                fontDefault: 'Inter',
                nicknameText: { 
                    color: '#0CA7FF', 
                    content: numPushname
                },
                secondText: { 
                    color: '#0CA7FF', 
                    content: metadata.subject
                },
                avatarImgURL: ppimg,
                }).build()*/
                //.then(async (getBuffer) => {
                //fs.writeFileSync('./canvased/welcome-1.png', getBuffer.toBuffer());
                //const welcomeCard = await getBuffer('https://telegra.ph/file/97789c9d50861aaa23313.jpg')
                //await conn.sendMessage(msg.id, { image: welcomeCard, contextInfo: { mentionedJid: [num], forwardingScore: 999, isForwarded: true  }, caption: `Selamat datang @${num.split("@")[0]}` })
                //})
                conn.sendMessage(msg.id, { text: 'Selamat datang!' })
                }
            } else if (msg.action === 'remove') {
                if (global.DATABASE.data.chats[msg.id].leaves) {
                try {
                    ppimg = await conn.profilePictureUrl(num, 'image')
                    } catch {
                    ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                /*let cv = new LeaveBuilder({
                // backgroundImgURL: 'any_image.png', ( you can also use )
                fontDefault: 'Inter',
                nicknameText: { 
                    color: '#F44336', 
                    content: numPushname
                },
                secondText: { 
                    color: '#F44336', 
                    content: metadata.subject
                },
                avatarImgURL: ppimg,
                }).build()*/
                //.then(async (getBuffer) => {
                //fs.writeFileSync('./canvased/goodbye-1.png', getBuffer.toBuffer());
                //const goodbyeCard = await getBuffer('https://telegra.ph/file/57b263c36bb52c88ec8d9.jpg')
                //await conn.sendMessage(msg.id, { image: goodbyeCard, contextInfo: { mentionedJid: [num], forwardingScore: 999, isForwarded: true  }, caption: `Selamat tinggal @${num.split("@")[0]}`})
                //})
                conn.sendMessage(msg.id, { text: 'Selamat tinggal!' })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

    conn.getName = (jid, withoutContact  = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

/**
 *      * 
 *      * @param {*} jid 
 *      * @param {*} name 
 *      * @param [*] values 
 *      * @returns 
 *      */
        conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }

    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:email@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://youtube.com/\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    conn.setStatus = (status) => {
        conn.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    
	  conn.prefa = 'apasih'
    conn.public = true
    conn.serializeM = (m) => smsg(conn, m, store)


    
      conn.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }


conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
      let type = await conn.getFile(path, true)
      let {
         res,
         data: file,
         filename: pathFile
      } = type
      if (res && res.status !== 200 || file.length <= 65536) {
         try {
            throw {
               json: JSON.parse(file.toString())
            }
         }
         catch (e) {
            if (e.json) throw e.json
         }
      }
      let opt = {
         filename
      }
      if (quoted) opt.quoted = quoted
      if (!type) options.asDocument = true
      let mtype = '',
         mimetype = type.mime,
         convert
      if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
      else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
      else if (/video/.test(type.mime)) mtype = 'video'
      else if (/audio/.test(type.mime))(
         convert = await toAudio(file, type.ext),
         file = convert.data,
         pathFile = convert.filename,
         mtype = 'audio',
         mimetype = 'audio/ogg; codecs=opus'
      )
      else mtype = 'document'
      if (options.asDocument) mtype = 'document'

      delete options.asSticker
      delete options.asLocation
      delete options.asVideo
      delete options.asDocument
      delete options.asImage

      let message = {
         ...options,
         caption,
         ptt,
         [mtype]: {
            url: pathFile
         },
         mimetype,
         fileName: filename || pathFile.split('/').pop()
      }
      let m
      try {
         m = await conn.sendMessage(jid, message, {
            ...opt,
            ...options
         })
      }
      catch (e) {
         //console.error(e)
         m = null
      }
      finally {
         if (!m) m = await conn.sendMessage(jid, {
            ...message,
            [mtype]: file
         }, {
            ...opt,
            ...options
         })
         file = null
         return m
      }
   }

     conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', gifPlayback: true, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    conn.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
	let { ext, mime, data } = await conn.getFile(path)
	let media = {}
let buffer
media.data = data
	media.mimetype = mime
if (options && (options.packname || options.author)) {
buffer = await writeExif(media, options)
} else {
buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
}
	await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
     
    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    conn.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await conn.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

       conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
  let vtype
	if (options.readViewOnce) {
		message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
		vtype = Object.keys(message.message.viewOnceMessage.message)[0]
		delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
		delete message.message.viewOnceMessage.message[vtype].viewOnce
		message.message = {
			...message.message.viewOnceMessage.message
	}}

	let mtype = Object.keys(message.message)[0]
	let content = await generateForwardMessageContent(message, forceForward)
	let ctype = Object.keys(content)[0]
	let context = {}
	if (mtype != "conversation") context = message.message[mtype].contextInfo
	content[ctype].contextInfo = {
				...context,
				...content[ctype].contextInfo
	}
	const waMessage = await generateWAMessageFromContent(jid, content, options ? {
		...content[ctype],
		...options,
		...(options.contextInfo ? {
		contextInfo: {
				...content[ctype].contextInfo,
				...options.contextInfo
				}
		} : {})
	} : {})
	await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
	return waMessage
}

   
    
    conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        conn.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
conn.send1ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
      let but = [{
         buttonId: butId,
         buttonText: {
            displayText: dispText
         },
         type: 1
      }]
      let butMes = {
         text: text,
         buttons: but,
         footer: footer,
         mentions: ments ? ments : []
      }
      conn.sendMessage(jid, butMes, {
         quoted: quoted
      })
   }

  conn.send2ButMes = (jid, text = '', footer = '', butId = '', dispText = '', butId2 = '', dispText2 = '', quoted, ments) => {
      let but2 = [{
            buttonId: butId,
            buttonText: {
               displayText: dispText
            },
            type: 1
         },
         {
            buttonId: butId2,
            buttonText: {
               displayText: dispText2
            },
            type: 1
         }
      ]
      let butMes2 = {
         text: text,
         buttons: but2,
         footer: footer,
         mentions: ments ? ments : []
      }
      conn.sendMessage(jid, butMes2, {
         quoted: quoted
      })
   }

	conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === conn.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    conn.getFile = async (PATH, returnAsFilename) => {
      let res, filename
      const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
      if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      const type = await FileType.fromBuffer(data) || {
         mime: 'application/octet-stream',
         ext: '.bin'
      }
      if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
      return {
         res,
         filename,
         ...type,
         data,
         deleteFile() {
            return filename && fs.promises.unlink(filename)
         }
      }
   }

    return conn
}

connectToWhatsApp()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.bgRedBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
