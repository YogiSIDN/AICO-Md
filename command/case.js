const { 
	BufferJSON, 
	WA_DEFAULT_EPHEMERAL, 
	generateWAMessageFromContent, 
	proto,
    extractImageThumb,
	generateWAMessageContent, 
	generateWAMessage, 
	prepareWAMessageMedia, 
	downloadContentFromMessage,
	areJidsSameUser, 
	getContentType,
	delay
	} = require('@whiskeysockets/baileys')
const fs = require('fs')
const get = require('got')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const clc = require('cli-color')
const chalk = require('chalk')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const request = require('request')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const { Aki } = require('aki-api');
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const bochil = require("@bochilteam/scraper");
const hxz = require("hxz-api");
const FormData = require("form-data");
//const canvafy = require('canvafy')
const moment = require('moment-timezone')
const cheerio = require('cheerio')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const similarity = require('similarity')
const threshold = 0.72
const Scraper = require('@yimura/scraper').default
const yts = new Scraper()
const { tiktokdl, youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
const booru = require('booru')
const nh = require('nhentai-modules')
const { NHentai } = require('@shineiichijo/nhentai-ts')
const nhentai = new NHentai()
const imgToPDF = require('image-to-pdf')
const ytdl = require('ytdl-core')
const petpet = require('pet-pet-gif')
const WSF = require('wa-sticker-formatter')
//const { RankCardBuilder } = require('discord-card-canvas')
const scdl = require('soundcloud-downloader').default
const CLIENT_ID = 'ESf4tESLjEluvRQOyg1TQ1x9YSGYFZrp'//'ESf4tESLjEluvRQOyg1TQ1x9YSGYFZrp'
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const HMfull = require('hmfull')
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

const msgFilter = require('../lib/antispam')
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('../lib/myfunc')
const { yta, ytv } = require('../lib/y2mate')
const { goLens } = require("../lib/googlens")
const { topUp } = require("../lib/duniagames")
const { upload, UploadFileUgu, webp2mp4File } = require('../lib/uploader')
const { pinterest } = require('../lib/scraper')
const { color, bgcolor } = require('../lib/color')
const { somoskudasai, ch } = require('../lib/somoskudasai')
const {
    getTrendingAnime,
    searchAnimeById,
    searchAnimeByName,
    getTrendingManga,
    searchMangaById,
    searchMangaByName,
    searchCharacterById,
    searchCharacterByName
} = require('../lib/anilist-co')

const { getChapter } = require('../lib/komiku')

// Werewolf
const {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerOnRooms,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('../lib/werewolf')

const setting = JSON.parse(fs.readFileSync('./config.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _ban = JSON.parse(fs.readFileSync('./database/user/ban.json'))
const _spam = JSON.parse(fs.readFileSync('./database/user/spam.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))

const afk = require('../lib/afk.js')
const ban = require('../lib/banned.js')
const level = require('../lib/level.js')

const welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const farewell = JSON.parse(fs.readFileSync('./database/group/farewell.json'))

const { isBoom, getBomTic } = require('../lib/boom')
const booms = require('../lib/booms')
let boom = []

const { isTicTacToe, getPosTic } = require('../lib/tictactoe.js')
const tictac = require('../lib/tictac.js')
const chess = require('../lib/chess.js')
const tebakgambar = {}

// Bandwidth
async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: format(ind),
        upload: format(out),
    };
}

//moment.tz.setDefault("Asia/Jakarta").locale("id");
function boldText(string) {
    return '*' + string + '*'
}


function blos(string) {
    return '`' + string + '`'
}

function getGreeting() {
    const currentTime = moment().tz('Asia/Jakarta');
    const currentHour = currentTime.hour();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Ohayou';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Konnichiwa';
    } else if (currentHour >= 17 && currentHour < 20) {
        greeting = 'Konnichiwa';
    } else {
        greeting = 'Konbanwa';
    }

    return greeting;
}

module.exports = conn = async (conn, m, chatUpdate, mek, _afk, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        const content = JSON.stringify(mek.message)
        const type = Object.keys(mek.message)[0];
        if (m && type == "protocolMessage") conn.ev.emit("message.delete", m.message.protocolMessage.key);
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : '!'
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''

        //const prefix = /^[°π÷×¶∆£¢€¥®™|~!#%^&.?/\\©^z+@,;]/.test(body) ? body.match(/^[°π÷×¶∆£¢€¥®™|~!#%^&.?/\\©^z+,;]/gi) : '!'            
        //global.prefix = prefix
        //const isCmd = body.startsWith(prefix)
        //const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        //const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

        //const prefix = '!'
        //const commands = body || ''
        //const command = commands.toLowerCase().split(' ')[0] || ''
        //global.prefix
        //const isCmd = command.startsWith(prefix)

        const from = m.chat
        const sender = m.sender
        var args = body.trim().split(/ +/).slice(1)
        //args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const { ownerNumber, ownerName, botName} = setting
        const isOwner = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        let txt = (m.text ? m.text : '').toLowerCase()
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)       
        const time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY - HH:mm:ss')
	    // User
        const isBan = ban.cekBannedUser(m.sender, _ban)
        // Group
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
        //const groupDesc = m.isGroup ? groupMetadata.desc : ''
        //const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupDesc = m.isGroup ? await groupMetadata.desc : ''
        const groupName = m.isGroup ? await groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false

		dbs.push({
		  id: m.key.id,
			m
		})

		const reply = (teks) => {
        	return conn.sendMessage(m.chat, { text: teks, mentions: parseMention(teks) }, { quoted: m })
        }

        const composing = () => {
        	return conn.sendPresenceUpdate('composing', m.chat)
        }

        const nebal = (angka) => {
            return Math.floor(angka)
        }

        const Print = async (pesan) => {
            const Rapi =  JSON.stringify(pesan, null, 4)
            return await conn.sendMessage(m.chat, { text: Rapi }, { quoted: m })
        }

        const waiting = (id, capt) => {
            conn.sendMessage(id, { text: '↓Mengunduh: ' + capt  }, { quoted: m })
        }

		function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }

function clockStrings(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / 1000);

    let result = '';
    if (days > 0) {
        result += days + " days. ";
    }
    if (hours > 0 || result !== '') {
        result += hours + " hours. ";
    }
    if (minutes > 0 || result !== '') {
        result += minutes + " minutes. ";
    }
    result += sec + " seconds. ";

    return result.trim(); // Trim leading/trailing whitespaces
}
		const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }

        async function pickRandom(list) {
            return list[Math.floor(Math.random() * list.length)]
        }
        
        async function getGcName(groupID) {
            try {
                let data_name = await conn.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        
		function randomNomor(min, max = null) {
            if (max !== null) {
        	    min = Math.ceil(min);
        	    max = Math.floor(max);
        	    return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
        	    return Math.floor(Math.random() * min) + 1
            }
        }

        function randomRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function timeConvert(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

	   async function addCountCmdUser(nama, sender, u) {
            var posi = null
            var pos = null
            Object.keys(u).forEach((i) => {
                if (u[i].jid === sender) {
                    posi = i
                }
            })
            if (posi === null) {
                u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
                fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                Object.keys(u).forEach((i) => {
                    if (u[i].jid === m.sender) {
                        posi = i
                    }
                })
            }
            if (posi !== null) {
                Object.keys(u[posi].db).forEach((i) => {
                    if (u[posi].db[i].nama === nama) {
                        pos = i
                    }
                })
                if (pos === null) {
                    u[posi].db.push({nama: nama, count: 1})
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                } else {
                    u[posi].db[pos].count += 1
                    fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                }
            }
        }

        async function getPosiCmdUser(sender, _db) {
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].jid === sender) {
                    posi = i
                }
            })
            return posi
        }

        async function addCountCmd(nama, sender, _db) {
            addCountCmdUser(nama, m.sender, _cmdUser)
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].nama === nama) {
                   posi = i
                }
            })
            if (posi === null) {
                _db.push({nama: nama, count: 1})
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
                _db[posi].count += 1
                fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            }
        }


        function executeAfterDelay(timeString) {
            const [minutes, seconds] = timeString.split(':');
            const totalMilliseconds = (parseInt(minutes, 10) * 60 + parseInt(seconds, 10)) * 1000;
            return totalMilliseconds
        }

        function bytesToSize(bytes) {
            return new Promise((resolve, reject) => {
              const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
              if (bytes === 0) return "n/a";
              const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
              if (i === 0) resolve(`${bytes} ${sizes[i]}`);
              resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
            });
        }

        function formated(ms) {
            let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
            let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
            let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }

        async function pixivDl(query) {
            try {
              if (query.match(/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i)) {
                if (!URL_REGEX.test(query)) throw 'Invalid Pixiv Url';
                query = query.replace(/\D/g, '');
                let res = await pixiv.getIllustByID(query).catch(() => null);
                if (!res) throw `ID "${query}" not found :/`;
                let media = await Promise.all(res.urls.map(url => pixiv.download(new URL(url.original))));
                return {
                  artist: res.user.name,
                  caption: res.title,
                  tags: res.tags.tags.map(v => v.tag),
                  media
                };
              } else {
                let res = await pixiv.getIllustsByTag(query);
                if (!res.length) throw `Tag "${query}" not found :/`;
                res = res[~~(Math.random() * res.length)].id;
                res = await pixiv.getIllustByID(res);
                let media = await Promise.all(res.urls.map(url => pixiv.download(new URL(url.original))));
                return {
                  artist: res.user.name,
                  caption: res.title,
                  tags: res.tags.tags.map(v => v.tag),
                  media
                };
              }
            } catch (error) {
              console.error(error);
              throw error; 
            }
          }

        async function y2mateMp3(url) {
            return new Promise((resolve, reject) => {
              ytdl.getInfo(url).then(async (getUrl) => {
                let result = []
                for (let i = 0; i < getUrl.formats.length; i++) {
                  let item = getUrl.formats[i]
                  if (item.mimeType == 'audio/webm; codecs="opus"') {
                    let { contentLength, approxDurationMs } = item
                    let bytes = await bytesToSize(contentLength)
                    result[i] = {
                      audio: item.url,
                      size: bytes,
                      duration: formated(parseInt(approxDurationMs)),
                    };
                  }
                }
                let resultFix = result.filter(
                  (x) => x.audio != undefined && x.size != undefined
                )
                //let tinyUrl = await yta(getUrl.videoDetails.video_url)
                let tinyUrl = resultFix[0].audio
                let title = getUrl.videoDetails.title
                let desc = getUrl.videoDetails.description
                let views = parseInt(getUrl.videoDetails.viewCount || 0)
                let likes = getUrl.videoDetails.likes
                let dislike = getUrl.videoDetails.dislikes
                let channel = getUrl.videoDetails.ownerChannelName
                let uploadDate = getUrl.videoDetails.uploadDate
                let thumb =
                  getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail
                    .thumbnails[0].url
                    resolve({
                        title,
                        dl_url: tinyUrl,
                        size: resultFix[0].size,
                        duration: resultFix[0].duration,
                        thumb,
                        views,
                        likes,
                        dislike,
                        channel,
                        uploadDate,
                        desc,
                    })
                }).catch(reject)
            })
        }

        async function ytdlDownloader(url, format) {
          return new Promise(async (resolve, reject) => {
            try {
              const getInfo = await ytdl.getInfo(url);
              let result = [];
        
              if (format === 'mp3') {
                for (let i = 0; i < getInfo.formats.length; i++) {
                  let item = getInfo.formats[i];
                  if (item.mimeType === 'audio/webm; codecs="opus"') {
                    let { contentLength, approxDurationMs } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                      audio: item.url,
                      size: bytes,
                      duration: formated(parseInt(approxDurationMs)),
                    };
                  }
                }
              } else if (format === 'mp4') {
                for (let i = 0; i < getInfo.formats.length; i++) {
                  let item = getInfo.formats[i];
                  if (
                    item.container === 'mp4' &&
                    item.hasVideo === true &&
                    item.hasAudio === true
                  ) {
                    let { qualityLabel, contentLength, approxDurationMs } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                      video: item.url,
                      quality: qualityLabel,
                      size: bytes,
                      duration: formated(parseInt(approxDurationMs)),
                    };
                  }
                }
              } else {
                reject('Format tidak valid. Gunakan "mp3" atau "mp4" sebagai format.');
                return;
              }
        
              let resultFix = result.filter(
                (x) =>
                  (format === 'mp3' && x.audio !== undefined && x.size !== undefined) ||
                  (format === 'mp4' &&
                    x.video !== undefined &&
                    x.size !== undefined &&
                    x.quality !== undefined)
              );
        
              let videoDetails = getInfo.videoDetails;
              let title = videoDetails.title;
              let desc = videoDetails.description;
              let views = parseInt(videoDetails.viewCount || 0);
              let likes = videoDetails.likes;
              let dislike = videoDetails.dislikes;
              let channel = videoDetails.ownerChannelName;
              let uploadDate = videoDetails.uploadDate;
              let thumb =
                getInfo.player_response.microformat.playerMicroformatRenderer.thumbnail
                  .thumbnails[0].url;
        
              let responseObj = {
                title,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc,
              };
        
              if (format === 'mp3' && resultFix.length > 0) {
                responseObj.dl_url = resultFix[0].audio;
                responseObj.size = resultFix[0].size;
                responseObj.duration = resultFix[0].duration;
              } else if (format === 'mp4' && resultFix.length > 0) {
                responseObj.dl_url = resultFix[0].video;
                responseObj.size = resultFix[0].size;
                responseObj.duration = resultFix[0].duration;
              } else {
                reject('Tidak ada format yang tersedia untuk video ini.');
                return;
              }
        
              resolve(responseObj);
            } catch (error) {
              reject(error);
            }
          });
        }

    const charlist = JSON.parse(fs.readFileSync('./lib/charlist.json'))
    const CharaPath = './lib/chara/' + m.chat + '.json'
    const dirChar = fs.readdirSync('./lib/chara')
    let PathC = []
    for (var i = 0; i < dirChar.length; i++) {
        PathC.push(dirChar[i].replace('.json', ''))
    }
    let isExistCharPath = PathC.includes(m.chat) ? true : false
    let buffChara = isExistCharPath ? JSON.parse(fs.readFileSync(CharaPath)) : ''
    
    if (m.isGroup && budy) {
        const charDirObj = {
            status: 'active',
            claimed_keyword: [],
            claimed_by_name: [],
            claimed_by_sender: [],
            anime_result: '',
            chara_name: '',
            groupId: m.chat,
            msgID: [],
            messages: [],
            messageCount: 0, // Tambahkan properti ini
            lastTriggeredAt: 0, // Tambahkan properti ini
        }
        fs.writeFileSync(CharaPath, JSON.stringify(charDirObj, null, 2))
        if (buffChara.status === 'active') {
            buffChara.msgID.push(m.key.id)
            buffChara.messages.push(budy)
            buffChara.messageCount++; // Tambahkan ini
    
            // Setelah 10 pesan
            if (buffChara.messageCount >= 15) {
                let now = Date.now();
                // Cek jika sudah 15 pesan dalam 1 menit terakhir
                if (now - buffChara.lastTriggeredAt >= 1 * 60 * 1000) {
                    buffChara.lastTriggeredAt = now;
                    buffChara.messageCount = 0; // Reset hitung pesan
    
                    buffChara.chara_name = charlist[Math.floor(Math.random() * charlist.length + 1)].Id
                    buffChara.msgID = []
                    buffChara.messages = []
                    buffChara.claimed_by_sender = []
                    buffChara.claimed_by_name = []
                    buffChara.claimed_keyword = []
                    fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                    const buffGaleryDir = fs.readdirSync('./lib/chara_galery')
                    for (var i = 0; i < buffGaleryDir.length; i++) {
                        const buffGaleryLoop = JSON.parse(fs.readFileSync('./lib/chara_galery/' + buffGaleryDir[i]))
                        buffGaleryLoop.status = 'active'
                        fs.writeFileSync('./lib/chara_galery/' + buffGaleryDir[i], JSON.stringify(buffGaleryLoop, null, 2))
                    }
                    searchCharacterById(buffChara.chara_name).then(character => {
                    buffChara.anime_result = character
                    fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                    charIdc_text = `*Karakter baru telah muncul*

Bisakah kamu menebak siapa karakter ini?
Gunakan *${prefix}claim* nama karakter-nya untuk mengklaim karakter tersebut.

Muncul dalam seri:- 
${character.media.nodes[0].title.romaji ? `${character.media.nodes[0].title.romaji}` : ``}`
                    conn.sendMessage(m.chat, { image: { url: character.image.large }, caption: charIdc_text }, /*{ quoted: m }*/)
                    }).catch(error => reply('💔️ Maaf, Character tidak ditemukan'))
                }
            }
            fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
        }
    }

/*const CardsPath1 = './database/yugioh/' + m.chat + '.json';
const dirCards1 = fs.readdirSync('./database/yugioh');
let PathCa1 = dirCards1.map(file => file.replace('.json', ''));
let isExistCardsPath1 = PathCa1.includes(m.chat);
let buffCards1 = isExistCardsPath1 ? JSON.parse(fs.readFileSync(CardsPath1)) : '';

if (m.isGroup && budy) {
    if (!isExistCardsPath1) {
        buffCards1 = {
            status: 'active',
            claimed_keyword: [],
            claimed_by_name: [],
            claimed_by_sender: [],
            card_result: '',
            groupId: m.chat,
            msgID: [],
            messages: [],
            messageCount: 0,
            lastTriggeredAt: 0,
        };
        fs.writeFileSync(CardsPath1, JSON.stringify(buffCards1, null, 2));
    }

    buffCards1.msgID.push(m.key.id);
    buffCards1.messages.push(budy);
    buffCards1.messageCount++;

    if (buffCards1.messageCount >= 30) {
        let now = Date.now();
        if (now - buffCards1.lastTriggeredAt >= 1 * 60 * 1000) {
            buffCards1.lastTriggeredAt = now;
            buffCards1.messageCount = 0;
            buffCards1.msgID = []
            buffCards1.messages = []

            // Ensure you have a proper fetchJson function
            fetchJson(`https://db.ygoprodeck.com/api/v7/randomcard.php`).then((cd1) => {
                buffCards1.card_result = cd1;
                fs.writeFileSync(CardsPath1, JSON.stringify(buffCards1, null, 2));
                const contentCards1 = `*Kartu koleksi baru telah muncul!*

Nama: ${cd1.name}
Tipe: ${cd1.type}
"${cd1.desc}"

Gunakan *${prefix}catch* id kartu-nya`;
                conn.sendMessage(m.chat, { image: { url: cd1.card_images[0].image_url }, caption: contentCards1 }, /*{ quoted: m });
            });
        }
    }
    fs.writeFileSync(CardsPath1, JSON.stringify(buffCards1, null, 2));
}*/

	// Auto Read & Presence Online
		if (!m.key.fromMe){
        const readkey = {
                remoteJid: m.chat,
                id: m.key.id, 
                participant: m.isGroup ? m.key.participant : undefined 
            }            
            await conn.readMessages([readkey]);
        }

	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

        if (m.isGroup && !m.key.fromMe /*&& isCmd*/) {
            try {
                level.addCooldown(m.sender)
                const currentLevel = level.getLevelingLevel(m.sender, _level)
                const amountXp = Math.floor(Math.random() * 10) + 15
                const requiredXp = 200 * (Math.pow(2, currentLevel))
                level.addLevelingXp(m.sender, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(m.sender, _level)) {
                    level.addLevelingLevel(m.sender, 1, _level)
                    //level.setLevelingXp(m.sender, 0, _level)
                    const userLevel = level.getLevelingLevel(m.sender, _level)
                    const fetchXp = 200 * (Math.pow(2, userLevel))
                    global.DATABASE.data.users[m.sender].userRank = level.getLevelingLevel(m.sender, _level)
                    await reply(`*[ 🎉 | LEVEL UP | 🎉 ]*

❢ Nama ❢: ${global.DATABASE.data.users[m.sender].pushName}

✾ Tingkat ✾: ${currentLevel} -> ${level.getLevelingLevel(m.sender, _level)} 🆙

↯ Exp ↯: ${level.getLevelingXp(m.sender, _level).toLocaleString('ID', { useGrouping: true })} / ${fetchXp.toLocaleString('ID', { useGrouping: true })}`)
                }
            } catch (err) {
                console.error(err)
            }
        }

        if (m.isGroup && !m.key.fromMe) {
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
            const getId = afk.getAfkId(ment, _afk)
                if (afk.getAfkStatus(getId, _afk) === 'true') {
            const getReason = afk.getAfkReason(getId, _afk)
            const dates = clockStrings(new Date - afk.getAfkTime(getId, _afk))
            const imeg_afk = afk.getAfkImage(getId, _afk)
            const capt_afk = `@${ment.split('@')[0]} Sedang AFK!${getReason ? `\n\nDengan alasan ${getReason} ` : `\n\n`}selama (${dates})`
            //await conn.sendText(m.chat, capt_afk, m, { mentions: parseMention(capt_afk) })
            await conn.sendMessage(m.chat, { image: { url: imeg_afk }, caption: capt_afk, mentions: parseMention(capt_afk) }, { quoted: m })
            } else if (afk.getAfkStatus(getId, _afk) === 'false') {
            const getReasond = afk.getAfkReason(getId, _afk)
            const datesz = clockStrings(new Date - afk.getAfkTime(getId, _afk))
            const capt_afks = `@${ment.split('@')[0]} Sedang AFK!${getReasond ? `\n\nDengan alasan ${getReasond} ` : `\n\n`}selama (${datesz})`
            await conn.sendText(m.chat, capt_afks, m, { mentions: parseMention(capt_afks) })
                }
            }
        }

        /*if (afk.checkAfkUser(m.sender, _afk)) {
            _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
            fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
            const capt_afks = `@${m.sender.split`@`[0]} Telah Kembali Dari AFK!`
            ///await conn.sendMessage(m.chat, { text : capt_afks , mentionedJid: parseMention(m.sender) })
            await conn.sendText(m.chat, capt_afks, m, { mentions: parseMention(capt_afks) })
            }*/
        }

/*setInterval(async function() {
    fetchJson(`https://meme-api.com/gimme/AnimeWallpaper`).then(async (w) => {
            let getGroups = await conn.groupFetchAllParticipating()
            let groups_bc = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu_bc = groups_bc.map(v => v.id)
            for (let i of anu_bc) {
            //let txt_bc = `「 BROADCAST BOT 」\n\n${text}`
            //conn.sendMessage(i, { text: txt_bc })
            conn.sendMessage(i, { image: { url: w.url }, caption: `${w.title}
_Auto share wallpaper © ANIPEDI∆_` })
                }
    })
}, 6000000)*/

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let users = DATABASE.data.users[m.sender]
            if (typeof users !== 'object') DATABASE.data.users[m.sender] = {}
            if (users) {
                if (!isNumber(users.userId)) users.userId = m.sender.substring(6, 10)
                if (!isNumber(users.limitUser)) users.limitUser = 25
                if (!isNumber(users.limitGame)) users.limitGame = 10
                if (!isNumber(users.limitMp3)) users.limitMp3 = 2
                if (!isNumber(users.userRank)) users.userRank = 0
                if (!isNumber(users.userDivorce)) users.userDivorce = 0
                if (!isNumber(users.userBalance)) users.userBalance = 0
                if (!isNumber(users.userPopularty)) users.userPopularty = 0
                if (!('thumbnail' in users)) users.thumbnail.animated = false
                if (!('pushName' in users)) users.pushName = pushname
                if (!('userGender' in users)) users.userGender = ''
                if (!('userRole' in users)) users.userRole = ''
                if (!('userType' in users)) users.userType = 'free'
                if (!('userNotice' in users)) users.userNotice = ''
                if (!('marryName' in users)) users.marryName = ''
                if (!('statusMarry' in users)) users.statusMarry = false
                if (!('userMarriage' in users)) users.userMarriage = []
                if (!('userCharacter' in users)) users.userCharacter = []
            } else global.DATABASE.data.users[m.sender] = {
                thumbnail: {
                    animated: false,
                    url: 'https://telegra.ph/file/62ded15f59d4eb6e63d2b.jpg'
                },
                userId: m.sender.substring(6, 10),
                pushName: pushname,
                userGender: '',
                limitUser: 25,
                limitGame: 10,
                limitMp3: 2,
                userRole: '',
                userRank: 0,
                userBalance: 0,
                userPopularty: 0,
                userType: 'free',
                userNotice: '',
                marryName: '',
                statusMarry: false,
                userDivorce: 0,
                userMarriage: [],
                userCharacter: []
            }

            let chats = DATABASE.data.chats[m.chat]
            if (typeof chats !== 'object') DATABASE.data.chats[m.chat] = {}
            if (chats) {
                if (!('leaves' in chats)) chats.leaves = false
                if (!('hentai' in chats)) chats.hentai = false
                if (!('rule' in chats)) chats.rule = false
                if (!('mute' in chats)) chats.mute = false
                if (!('games' in chats)) chats.games = false
                if (!('welcome' in chats)) chats.welcome = false
                if (!('deleteMsg' in chats)) chats.deleteMsg = false
                if (!('reactMsg' in chats)) chats.reactMsg = false
                if (!('simi' in chats)) chats.simi = false
                if (!('enhance' in chats)) chats.enhance = false
                if (!('word_status' in chats)) chats.word_status = false
                if (!('welcomeText' in chats)) chats.welcomeText = ''
            	if (!('text' in chats)) chats.text = []
            } else global.DATABASE.data.chats[m.chat] = {
                leaves: false,
                hentai: false,
                rule: false,
                mute: false,
                games: false,
                welcome: false,
                deleteMsg: false,
                reactMsg: false,
                simi: false,
                enhance: false,
                welcomeText: '',
                word_status: false,
                text: []
            }
        } catch (err) {
            console.error(err)
        }

        let chat = global.DATABASE.data.chats[m.chat]
        let isMute = m.isGroup ? chat.mute : false

        if (isTicTacToe(m.chat, global.DATABASE.data.game.tictactoe)) tictac(budy, prefix, m.chat, m.sender, reply, m, conn)    

        if (isBoom(m.sender, boom)) booms(budy, boom, m.sender, conn, m)

        if (tebakgambar[m.chat] && !isCmd && m.quoted) {
         if (!(m.chat in tebakgambar)) return reply('Sola tersebut sudah berakhir.')
            if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
            let suren = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (suren) {
                clearTimeout(tebakgambar[m.chat][3])
                delete tebakgambar[m.chat]
                reply('Kamu memutuskan menyerah dalam permainan.')
            }
            let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
              await reply(`Benar!\n+ ${tebakgambar[m.chat][2]} Exp`)
              await level.addLevelingXp(m.sender, tebakgambar[m.chat][2], _level)
               clearTimeout(tebakgambar[m.chat][3])
               delete tebakgambar[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply('Dikit lagi...')
            else reply('Salah...')
         }
        }

        if (m.isGroup && chat.rule && !isGroupAdmins && !isOwner) {
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }

        if (isCmd && m.isGroup && chat.mute && !isGroupAdmins && !isOwner) return reply('Bot telah dimute pada chat ini. Hanya admin group yang dapat menggunakan bot.')

        /*if (chat.rule) {
            if (isGroupAdmins) return
            if (!isBotGroupAdmins) return
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            await conn.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            }
        }*/

        // CONSOLE MUTE 
        //if (isCmd && isMute && !isGroupAdmins && !isOwner) return 
        
        // CONSOLE LOG
        if (isCmd && !m.isGroup) {
            console.log(chalk.hex('#c105ff').bold('[CMD]'), chalk.yellow(time), chalk.green(`${command} [${args.length}]`), 'from', chalk.green(pushname))
        }
        
        if (isCmd && m.isGroup) {
            console.log(chalk.hex('#c105ff').bold('[CMD]'), chalk.yellow(time), chalk.green(`${command} [${args.length}]`), 'from', chalk.green(pushname), 'in', chalk.green(groupName))
            //await conn.chatRead(from)
        }

        if (isBan && isCmd && command.split(prefix)[1] !== 'unban') return conn.sendMessage(m.chat, { text: `${ban.getReason(m.sender, _ban)}`}, { quoted: m })
        if (isBan) return 

        ban.BannedExpired(_ban)

        // CONSOLE SPAM
        const spampm = () => {
            //console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            msgFilter.addSpam(m.sender, _spam)
            if (msgFilter.isSpam(m.sender, _spam)){
                const rests_ = `Kamu telah diblock secara otomatis dikarenakan spam di pesan chat pada - ${blos(time)} hubungi pengembang untuk mendapatkan informasi lebih lanjut.`
                ban.addBanned(m.sender, '5h', rests_, _ban)
                reply(`Terdeteksi sebagai spam di pesan chat. Kamu diblock secara otomatis pada - ${blos(time)}`)
            } else {
                reply('Terdeteksi sebagai spam pada pesan chat.')
            }
        }
        const spamgr = () => {
            //console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            msgFilter.addSpam(m.sender, _spam)
            if (msgFilter.isSpam(m.sender, _spam)){
                const rest_ = `Kamu telah diblock secara otomatis dikarenakan spam di grup chat pada - ${blos(time)} hubungi pengembang untuk mendapatkan informasi lebih lanjut.`
                ban.addBanned(m.sender, '5h', rest_, _ban)
                reply(`Terdeteksi sebagai spam di grup chat. kamu diblock secara otomatis pada - ${blos(time)}`)
            } else {
                reply('Terdeteksi sebagai spam pada grup chat.')
            }
        }

        if (isCmd && !isOwner && msgFilter.isFiltered(m.sender) && !m.isGroup) return spampm()
        
        if (isCmd && !isOwner && msgFilter.isFiltered(m.sender) && m.isGroup) return spamgr()

        msgFilter.ResetSpam(_spam)

        msgFilter.addFilter(m.sender)

        const isImage = (m.mtype === 'imageMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
        const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')

        async function loading () {
            var persen = [
                  '1% Mengunduh...',  '2% Mengunduh...',  '3% Mengunduh...',  '4% Mengunduh...',   '5% Mengunduh...',  '6% Mengunduh...',  '7% Mengunduh...',  '8% Mengunduh...',
                    '9% Mengunduh...',  '10% Mengunduh...', '11% Mengunduh...', '12% Mengunduh...',  '13% Mengunduh...', '14% Mengunduh...', '15% Mengunduh...', '16% Mengunduh...',
                      '17% Mengunduh...', '18% Mengunduh...', '19% Mengunduh...', '20% Mengunduh...',  '21% Mengunduh...', '22% Mengunduh...', '23% Mengunduh...', '24% Mengunduh...',
                        '25% Mengunduh...', '26% Mengunduh...', '27% Mengunduh...', '28% Mengunduh...',  '29% Mengunduh...', '30% Mengunduh...', '31% Mengunduh...', '32% Mengunduh...',
                          '33% Mengunduh...', '34% Mengunduh...', '35% Mengunduh...', '36% Mengunduh...',  '37% Mengunduh...', '38% Mengunduh...', '39% Mengunduh...', '40% Mengunduh...',
                            '41% Mengunduh...', '42% Mengunduh...', '43% Mengunduh...', '44% Mengunduh...',  '45% Mengunduh...', '46% Mengunduh...', '47% Mengunduh...', '48% Mengunduh...',
                              '49% Mengunduh...', '50% Mengunduh...', '51% Mengunduh...', '52% Mengunduh...',  '53% Mengunduh...', '54% Mengunduh...', '55% Mengunduh...', '56% Mengunduh...',
                                '57% Mengunduh...', '58% Mengunduh...', '59% Mengunduh...', '60% Mengunduh...',  '61% Mengunduh...', '62% Mengunduh...', '63% Mengunduh...', '64% Mengunduh...',
                                  '65% Mengunduh...', '66% Mengunduh...', '67% Mengunduh...', '68% Mengunduh...',  '69% Mengunduh...', '70% Mengunduh...', '71% Mengunduh...', '72% Mengunduh...',
                                    '73% Mengunduh...', '74% Mengunduh...', '75% Mengunduh...', '76% Mengunduh...',  '77% Mengunduh...', '78% Mengunduh...', '79% Mengunduh...', '80% Mengunduh...',
                                      '81% Mengunduh...', '82% Mengunduh...', '83% Mengunduh...', '84% Mengunduh...',  '85% Mengunduh...', '86% Mengunduh...', '87% Mengunduh...', '88% Mengunduh...',
                                        '89% Mengunduh...', '90% Mengunduh...', '91% Mengunduh...', '92% Mengunduh...',  '93% Mengunduh...', '94% Mengunduh...', '95% Mengunduh...', '96% Mengunduh...',
                                          '97% Mengunduh...', '98% Mengunduh...', '99% Mengunduh...', '100% Terunduh...'
                                          ]
            let { key } = await conn.sendMessage(m.chat, { text: 'Mengunduh...'}, { quoted: m })//Awalan

            for (let i = 0; i < persen.length; i++) {
                /*await delay(10)*/
                await conn.sendMessage(m.chat, { text: persen[i], edit: key }, { quoted: m });//setelah nya
            }
        }

        switch(command) {
case 'tesst': {
                if (!m.quoted) reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `❑ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━❑ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❑*Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                reply(teks)
            }
            break
        /*case 'rank': {
            if (mentionUser[0]) {
            const userLevel = level.getLevelingLevel(mentionUser[0], _level)
            const userXp = level.getLevelingXp(mentionUser[0], _level)
            const requiredXp = 200 * (Math.pow(2, userLevel))
            if (userLevel === undefined && userXp === undefined) return reply(`Kamu belum memiliki level`)
            try {
                ppimg = await conn.profilePictureUrl(mentionUser[0], 'image')
            } catch {
                ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            const canvasRank = await new RankCardBuilder({
                currentLvl: userLevel,
                currentRank: Number(level.getUserRank(mentionUser[0], _level)),
                currentXP: userXp.toLocaleString('ID', { useGrouping: true }),
                requiredXP: requiredXp.toLocaleString('ID', { useGrouping: true }),
                backgroundColor: { background: '#070d19', bubbles: '#0ca7ff' },
                avatarImgURL: ppimg,
                nicknameText: { content: global.DATABASE.data.users[mentionUser[0]].pushName, font: 'Nunito', color: '#0CA7FF' },
                userStatus: 'online',
            }).build()
            .then(async (getBuffer) => {
                fs.writeFileSync('./canvased/rank-1.png', getBuffer.toBuffer());
                const rankCard = fs.readFileSync('./canvased/rank-1.png')
                const textRank = `❢ Nama ❢: ${global.DATABASE.data.users[mentionUser[0]].pushName}

↯ Exp ↯:  ${userXp.toLocaleString('ID', { useGrouping: true })} / ${requiredXp.toLocaleString('ID', { useGrouping: true })}

✾ Tingkat ✾: ${userLevel}

Dukung kami dengan cara Ikuti saluran kami di whatsapp:
https://whatsapp.com/channel/0029VaGJI8sAe5VhAI6AZb43

Tentang AICO:
https://s.id/AICO#Readme`
                await conn.sendMessage(m.chat, { image: rankCard, caption: textRank }, { quoted: m })
            })
            } else {
            const userLevel = level.getLevelingLevel(m.sender, _level)
            const userXp = level.getLevelingXp(m.sender, _level)
            const requiredXp = 200 * (Math.pow(2, userLevel))
            if (userLevel === undefined && userXp === undefined) return reply(`Kamu belum memiliki level`)
            try {
                ppimg = await conn.profilePictureUrl(m.sender, 'image')
            } catch {
                ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            const canvasRank = await new RankCardBuilder({
                currentLvl: userLevel,
                currentRank: Number(level.getUserRank(m.sender, _level)),
                currentXP: userXp.toLocaleString('ID', { useGrouping: true }),
                requiredXP: requiredXp.toLocaleString('ID', { useGrouping: true }),
                backgroundColor: { background: '#070d19', bubbles: '#0ca7ff' },
                avatarImgURL: ppimg,
                nicknameText: { content: global.DATABASE.data.users[m.sender].pushName, font: 'Nunito', color: '#0CA7FF' },
                userStatus: 'online',
            }).build()
            .then(async (getBuffer) => {
                fs.writeFileSync('./canvased/rank-1.png', getBuffer.toBuffer());
                const rankCard = fs.readFileSync('./canvased/rank-1.png')
                const textRank = `❢ Nama ❢: ${global.DATABASE.data.users[m.sender].pushName}

↯ Exp ↯:  ${userXp.toLocaleString('ID', { useGrouping: true })} / ${requiredXp.toLocaleString('ID', { useGrouping: true })}

✾ Tingkat ✾: ${userLevel}

Dukung kami dengan cara Ikuti saluran kami di whatsapp:
https://whatsapp.com/channel/0029VaGJI8sAe5VhAI6AZb43

Tentang AICO:
https://s.id/AICO#Readme`
                await conn.sendMessage(m.chat, { image: rankCard, caption: textRank }, { quoted: m })
            })
                }
            }
            break*/
        case 'leaderboard': case 'lb': {
             _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1);
            leaderboards = '── 「 LEADERBOARD 」 ──\n\n';
            for (let i = 0; i < 10; i++) {
            let rankText = '';
                if (i === 0) {
                    rankText = '🥇';
                } else if (i === 1) {
                    rankText = '🥈';
                } else if (i === 2) {
                    rankText = '🥉';
                } else {
                    rankText = `${i + 1}.`;
                }
            leaderboards += `${rankText} @${_level[i].id.split('@')[0]}\n├ Tingkat : ${_level[i].level}\n└ Exp : ${_level[i].xp.toLocaleString('ID', { useGrouping: true })}\n\n`;
            }
            leaderboards += '── 「 GAME WINS 」 ──'
            reply(leaderboards);
            }
            break;
        case 'afk': {
            const reason = q ? q : ''
            if (isMedias && !m.message.videoMessage || isQuotedImage ) {
            if (!isOwner) return 
            let afk_enc = await quoted.download()
            let afk_img = await upload(afk_enc)
            let afk_st = 'true' 
            afk.addAfkUser(m.sender, reason, afk_img, afk_st, _afk)
            const angefka = `• @${m.sender.split`@`[0]} Sekarang AFK!`
            //await conn.sendText(m.chat, angefka, m, { mentions: parseMention(angefka) })
            await conn.sendMessage(m.chat, { text : angefka, mentions: parseMention(angefka) })
            } else {
            let afk_sts = 'false' 
            afk.addAfkUser(m.sender, reason, '', afk_sts, _afk)
            const angefkas = `• @${m.sender.split`@`[0]} Sekarang AFK!`
            //await conn.sendText(m.chat, angefkas, m, { mentions: parseMention(angefkas) })
            await conn.sendMessage(m.chat, { text : angefkas, mentions: parseMention(angefkas) })
            }
            }
            break
        case 'profile': {
            try {
            if (mentionUser[0]) {
                const userLevelx = level.getLevelingLevel(mentionUser[0], _level)
                const userXpx = level.getLevelingXp(mentionUser[0], _level)
                const requiredXpx = 200 * (Math.pow(2, userLevelx))
                let isProfileAdmin = groupAdmins.includes(mentionUser[0]) || false
                let thumbUrl = global.DATABASE.data.users[mentionUser[0]].thumbnail.animated ? global.DATABASE.data.users[mentionUser[0]].thumbnail.url : global.DATABASE.data.users[mentionUser[0]].thumbnail.url
                let { userId, pushName, userGender, limitUser, limitGame, limitMp3, userRole, userRank, userBalance, userPopularty, userType, userNotice, userBio, marryName, userDivorce, userCharacter } = global.DATABASE.data.users[mentionUser[0]]
                let teks_mentions = `❢ Nama ❢: ${pushName}

〥 Gender 〥: ${userGender ? userGender : '-'}

✻ Tanda pengguna ✻: #${userId}

⊷ Poin pengguna ⊶: 0 / ${limitUser.toLocaleString('ID', { useGrouping: true })}

➽ Batas permainan ➽: 0 / ${limitGame.toLocaleString('ID', { useGrouping: true })}

♫ Batas mp3 ♫: 0 / ${limitMp3.toLocaleString('ID', { useGrouping: true })} 
${userRole ? `\n❈ Peran pengguna ❈: ${userRole}\n` : ''}
✾ Tingkat ✾: ${userRank}

↯ Exp ↯: ${userXpx.toLocaleString('ID', { useGrouping: true })} / ${requiredXpx.toLocaleString('ID', { useGrouping: true })}

💴 Balanc(e) 💴: ${userBalance.toLocaleString('ID', { useGrouping: true })}

❤️‍🔥 Popularitas ❤️‍🔥: ${userPopularty.toLocaleString('ID', { useGrouping: true })}

◔ Tipe pengguna ◔: ${userType}

⚠️ Peringatan ⚠️: 0

⎙ Pemberitahuan pengguna ⎙: ${userNotice ? userNotice : '-'}

❝ Biodata ❞: ${userBio ? userBio : '-' }

🤍 Status pernikahan 🤍: ${marryName ? 'Menikah dengan '+marryName : '-' }

💔 Status perceraian 💔: ${userDivorce}

♛ Admin ♛: ${isProfileAdmin ? 'true' : 'false'}

⌬ Otoritas Ping ⌬: ${isProfileAdmin ? 'true' : 'false'}

⊝ BLOKED ⊝: -

↯ Karakter diklaim ↯: ${userCharacter.length}

➬ Karakter terakhir diklaim ➬: ${userCharacter[userCharacter.length - 1] ? '\n'+userCharacter[userCharacter.length - 1].name.full : '-'}

↺ Command yang tidak ada ↺: 0`
                conn.sendFileUrl(m.chat, thumbUrl, teks_mentions, m)
            } else {
                const userLevelx = level.getLevelingLevel(m.sender, _level)
                const userXpx = level.getLevelingXp(m.sender, _level)
                const requiredXpx = 200 * (Math.pow(2, userLevelx))
                let isProfileAdmin = groupAdmins.includes(m.sender) || false
                let thumbUrl = global.DATABASE.data.users[m.sender].thumbnail.animated ? global.DATABASE.data.users[m.sender].thumbnail.url : global.DATABASE.data.users[m.sender].thumbnail.url
                let { userId, pushName, userGender, limitUser, limitGame, limitMp3, userRole, userRank, userBalance, userPopularty, userType, userNotice, userBio, marryName, userDivorce, userCharacter } = global.DATABASE.data.users[m.sender]
                let teks_sender = `❢ Nama ❢: ${pushName}

〥 Gender 〥: ${userGender ? userGender : '-'}

✻ Tanda pengguna ✻: #${userId}

⊷ Poin pengguna ⊶: 0 / ${limitUser.toLocaleString('ID', { useGrouping: true })}

➽ Batas permainan ➽: 0 / ${limitGame.toLocaleString('ID', { useGrouping: true })}

♫ Batas mp3 ♫: 0 / ${limitMp3.toLocaleString('ID', { useGrouping: true })} 
${userRole ? `\n❈ Peran pengguna ❈: ${userRole}\n` : ''}
✾ Tingkat ✾: ${userRank}

↯ Exp ↯: ${userXpx.toLocaleString('ID', { useGrouping: true })} / ${requiredXpx.toLocaleString('ID', { useGrouping: true })}

💴 Balanc(e) 💴: ${userBalance.toLocaleString('ID', { useGrouping: true })}

❤️‍🔥 Popularitas ❤️‍🔥: ${userPopularty.toLocaleString('ID', { useGrouping: true })}

◔ Tipe pengguna ◔: ${userType}

⚠️ Peringatan ⚠️: 0

⎙ Pemberitahuan pengguna ⎙: ${userNotice ? userNotice : '-'}

❝ Biodata ❞: ${userBio ? userBio : '-' }

🤍 Status pernikahan 🤍: ${marryName ? 'Menikah dengan '+marryName : '-' }

💔 Status perceraian 💔: ${userDivorce}

♛ Admin ♛: ${isProfileAdmin ? 'true' : 'false'}

⌬ Otoritas Ping ⌬: ${isProfileAdmin ? 'true' : 'false'}

⊝ BLOKED ⊝: -

↯ Karakter diklaim ↯: ${userCharacter.length}

➬ Karakter terakhir diklaim ➬: ${userCharacter[userCharacter.length - 1] ? '\n'+userCharacter[userCharacter.length - 1].name.full : '-'}

↺ Command yang tidak ada ↺: 0`
                conn.sendFileUrl(m.chat, thumbUrl, teks_sender, m)
                }
            } catch {
                conn.sendFileUrl(m.chat, 'https://telegra.ph/file/eac66f6f0069b2d4ab634.png', '💔️ Maaf, Data user tidak ditemukan!', m)
                }
            }
            break
        case 'unblock_user': {
            if (!isOwner) return;
            if (mentionUser[0]) {
            ban.unBanned(mentionUser[0], _ban)
            }
            }
            break
        case 'set_welcome': {
            if (!isOwner) return;
            global.DATABASE.data.chats[m.chat].welcomeText = text
            }
            break
        case 'set_gender': {
            if (!isOwner) return;
            if (mentionUser.length !== 0 && args[1]) {
                const mentionedUser = mentionUser[0]; // Hanya mengambil satu user yang di-mention
                const gender = args[1].toLowerCase(); // Mengambil jenis kelamin dari args[1] dan mengonversinya ke huruf kecil
              
                if (gender === 'male' || gender === 'female') {
                // Memperbarui jenis kelamin pengguna yang di-mention dalam basis data (gunakan sesuai kebutuhan Anda)
                global.DATABASE.data.users[mentionedUser].userGender = gender
              
                // Memberikan balasan bahwa jenis kelamin telah diatur
                console.log(`Jenis kelamin pengguna ${mentionedUser} telah diatur menjadi ${gender}.`);
                } else {
                // Memberikan pesan kesalahan jika jenis kelamin yang dimasukkan tidak valid
                console.log('Jenis kelamin yang valid adalah "male" atau "female".');
                  }
                } else {
                // Jika args[0] atau args[1] tidak diberikan, atau jika tidak ada jenis kelamin yang valid, berikan pesan kesalahan
                console.log('Format perintah salah. Gunakan: !set_sender [mention/tag] [gender (male/female)]');
                }
              }
            break;
        case 'set_animated': {
            if (!isOwner) return;
            if (((isMedias && !m.message.videoMessage) || isQuotedVideo) && mentionUser.length !== 0) {
            var link_animated = await quoted.download(quoted)
            var anu_animated = await upload(link_animated)
            global.DATABASE.data.users[mentionUser[0]].thumbnail.url = anu_animated
            global.DATABASE.data.users[mentionUser[0]].thumbnail.animated = true
                }
            }
            break
        case 'active': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            await reply(groupMetadata.subject + ' sudah aktif.')
            }
            break
        case 'icon': {
            if (!/image/.test(mime)) return 
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            let media = await conn.downloadAndSaveMediaMessage(quoted)
            await conn.updateProfilePicture(m.chat, { url: media })
            fs.unlinkSync(media)
            }
            break
        case 'delete': {
            if (!m.quoted) throw false
            let { isBaileys } = m.quoted
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
            if (!isBaileys) return reply('Hanya dapat delete pesan Bot Baka (*￣ii￣)')
            conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break            
        case 'close': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            if (args[0] === 'false') {
            conn.groupSettingUpdate(m.chat, 'not_announcement')
            } else if (args[0] === 'true') {
            await conn.groupSettingUpdate(m.chat, 'announcement')
            } else {
            await conn.groupSettingUpdate(m.chat, 'announcement')
            }
            }
            break
        case 'leave': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            conn.groupLeave(m.chat)
            }
            break
        case 'grouplink': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            linkgcz = await conn.groupInviteCode(m.chat)
            yehz = `Buka tautan ini untuk bergabung ke grup WhatsApp saya: https://chat.whatsapp.com/${linkgcz}`
            reply(yehz)
            }
            break
        case 'revoke': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            await conn.groupRevokeInvite(m.chat)
            }
            break
        case 'promote': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
            }
            break
        case 'demote': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isBotGroupAdmins) return reply('Perintah ini hanya bisa di gunakan ketika bot menjadi admin!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group!')
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
            }
            break
        case 'ping': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            teksp = (args.length > 1) ? args.join(' ') : ''
            teksp += '\n\n'
            // Menyimpan admin dan member dalam dua array terpisah
            const admins = participants.filter(mem => groupAdmins.includes(mem.id))
            const members = participants.filter(mem => !groupAdmins.includes(mem.id))
    
            // Menambahkan barisan admin di atas
            for (let mem of admins) {
                teksp += `🏅 @${mem.id.split('@')[0]}\n`
            }
    
                teksp += '\n' // Memberikan spasi antara admin dan member
    
            // Menambahkan barisan member di bawah
            for (let mem of members) {
                teksp += `🥉 @${mem.id.split('@')[0]}\n`
            }
            reply(teksp)
            }
            break
        case 'register': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            if (args[0] === 'rule') {
            if (DATABASE.data.chats[m.chat].rule) return reply(`rule sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].rule = true
            reply(`rule baru saja diaktifkan, Mulai sekarang para member tidak diperbolehkan mengirim tautan group whatsapp lain terkecuali admin ${groupName}`)
            } else if (args[0] === 'delete-message') {
            if (DATABASE.data.chats[m.chat].deleteMsg) return reply(`delete-message sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].deleteMsg = true
            reply(`delete-message terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'react-message') {
            if (DATABASE.data.chats[m.chat].reactMsg) return reply(`react-message sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].reactMsg = true
            reply(`react-message terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'simi-simi') {
            if (DATABASE.data.chats[m.chat].simi) return reply(`simi-simi sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].simi = true
            reply(`simi-simi terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'welcome') {
            if (DATABASE.data.chats[m.chat].welcome) return reply(`welcome sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].welcome = true
            reply(`welcome terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'farewell') {
            if (DATABASE.data.chats[m.chat].leaves) return reply(`farewell sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].leaves = true
            reply(`farewell terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'hentai') {
            if (DATABASE.data.chats[m.chat].hentai) return reply(`hentai sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].hentai = true
            reply(`hentai terdaftar di ${groupMetadata.subject}`)
            } else if (args[0] === 'games') {
            if (DATABASE.data.chats[m.chat].games) return reply(`games sudah terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].games = true
            reply(`games terdaftar di ${groupMetadata.subject}`)
            } else {
            reply(`Hanya *games, hentai, simi-simi, rule, delete-message, react-message, welcome, farewell* yang dapat di daftarkan`)
            }
            }
            break
        case 'unregister': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            if (args[0] === 'welcome') {
            if (!DATABASE.data.chats[m.chat].welcome) return reply(`welcome sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].welcome = false
            reply(`welcome tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'simi-simi') {
            if (!DATABASE.data.chats[m.chat].simi) return reply(`simi-simi sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].simi = false
            reply(`simi-simi tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'farewell') {
            if (!DATABASE.data.chats[m.chat].leaves) return reply(`farewell sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].leaves = false
            reply(`farewell tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'hentai') {
            if (!DATABASE.data.chats[m.chat].hentai) return reply(`hentai sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].hentai = false
            reply(`hentai tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'delete-message') {
            if (!DATABASE.data.chats[m.chat].deleteMsg) return reply(`delete-message sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].deleteMsg = false
            reply(`delete-message tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'react-message') {
            if (!DATABASE.data.chats[m.chat].reactMsg) return reply(`react-message sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].reactMsg = false
            reply(`react-message tidak terdaftar di ${groupMetadata.subject}`);
            } else if (args[0] === 'rule') {
            if (!DATABASE.data.chats[m.chat].rule) return reply(`rule sudah tidak terdaftar di ${groupMetadata.subject}`)
            DATABASE.data.chats[m.chat].rule = false
            reply(`rule tidak terdaftar di ${groupMetadata.subject}`);
            } else {
            reply(`Hanya *hentai, simi-simi, rule, delete-message, react-message, welcome, farewell* yang dapat di daftarkan`)
            }
            }
            break
        case 'mute': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            if (DATABASE.data.chats[m.chat].mute) return reply('Bot telah dimute sebelumnya.')
            DATABASE.data.chats[m.chat].mute = true
            reply(`Bot telah dimute pada chat ini.`)
            }
            break
        case 'unmute': {
            if (!m.isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (!isGroupAdmins && !isOwner) return reply('Perintah ini hanya bisa di gunakan oleh admin group')
            if (!DATABASE.data.chats[m.chat].mute) return reply('Bot telah diunmute sebelumnya.')
            DATABASE.data.chats[m.chat].mute = false
            reply(`Bot telah diunmute pada chat ini.`)
            }
            break
        case 'help': case 'menu': {
            let nemeBot = `Hime`
            let pName = global.DATABASE.data.users[m.sender].pushName
            const { menu } = require('../lib/menu')
            await reply(menu(prefix, nemeBot, pName))
            /*image_menu = ['https://telegra.ph/file/cb6624b9e58881318738e.jpg', 'https://telegra.ph/file/28b146e70d8fc5e963944.jpg', 'https://telegra.ph/file/82266f9d13053fd0107cd.jpg', 'https://telegra.ph/file/c4c3a7ed29e47a579c7ce.jpg', 'https://telegra.ph/file/4a951c285386a08dfcdac.jpg', 'https://telegra.ph/file/11abe93f81f6b7d6d4c0a.jpg']
            buffer = image_menu[Math.floor(Math.random() * image_menu.length)]
            await conn.sendMessage(m.chat, {
                    text: help_text,
                    contextInfo: { externalAdReply: {
                        title: `Daftar Menu Perintah.`,
                        body: `👋 (❤ω❤) Hai`,
                        thumbnailUrl: buffer,
                        sourceUrl: 'https://whatsapp.com/channel/0029VaGJI8sAe5VhAI6AZb43',
                        mediaType: 1,
                        renderLargerThumbnail: true 
                    }}
                }, { quoted: m })*/
			//conn.sendText(m.chat, help_text, m, { mentions: parseMention(help_text) })
        	}
        	break
        case 'owner': {
            await reply('Berikut adalah pengembang saya.\n@62895600793637')
            }
            break
        case 'snk': {
            setTimeout(() => {
                reply(`Syarat dan Ketentuan Bot AICO

1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif

2. Data anda akan di hapus ketika bot Offline

3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim

4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi

5. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`)
            }, 3000)
            }
            break  
        case 'support': {
            setTimeout(async () => {
                reply('Bot telah mengirim pesan secara pribadi link support.')
                await conn.sendMessage(m.sender, { text: `Ikuti saluran kami
https://whatsapp.com/channel/0029VaGJI8sAe5VhAI6AZb43

Join group bot support kami
https://chat.whatsapp.com/GK96WGgLsVpDOtsT79SoDF`})
            }, 3000)
            }
            break  
        case 'petpet': {
            if (isImage || isQuotedImage) {
            let petpet_enc = await quoted.download()
            let pet_enc = await upload(petpet_enc)
            let a_pet = await petpet(pet_enc, { resolution: 1080 })
            fs.writeFileSync('petpet.gif', a_pet)
            await WSF.createSticker('petpet.gif', { type: 'full' ,pack: `Petpet by AICO`, author: `Yogii`, categories: ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => conn.sendMessage(m.chat, { sticker: buffer }, { quoted: m }))
            fs.unlinkSync('petpet.gif')
            } else {
                reply('Reply imagenya Baka (*￣ii￣)')
            }
            }
            break
        case 'sticker': {
            if (!quoted) return reply(`Balas Video/Image Dengan Caption ${command}`)
            pe = args.join(' ').split('-')
            var a = pe[0] !== '' ? pe[0] : `Kao Desu~`
            var b = typeof pe[1] !== 'undefined' ? pe[1] : ``
            if (/image/.test(mime)) {
            let media = await quoted.download()
            let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: a, author: b })
            await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
            let media = await quoted.download()
            let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: a, author: b })
            await fs.unlinkSync(encmedia)
            } else {
            reply(`Balas Gambar/Video Dengan Caption ${command} Catatan : Durasi sticker video 1-9 Detik`)
            }}
            break
        case 'getimage': {
            if ((isQuotedSticker && m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === false)) {
            let media = await conn.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                fs.unlinkSync(media)
                if (err) throw err
                let buffer = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { image: buffer, caption: 'Success convert your sticker!' }, { quoted: m })
                fs.unlinkSync(ran)
            })
            } else if ((isQuotedSticker && m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated)) {
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result }, gifPlayback: true, caption: 'Success convert your sticker!' }, { quoted: m })
                await fs.unlinkSync(media)
            } else {
                reply('Untuk menjadikan sticker menjadi gambar, video, atau gif reply pesan sticker dan ketikan getimage')
            }
            }
            break
    	case 'enhance': {
            if (level.getLevelingLevel(m.sender, _level) < 5) return reply(`Diperlukan setidaknya Tingkat 5 untuk menggunakan perintah ini.`)
    		const { srgan2x, srgan4x } = require('super-resolution-scraper')
            if (global.DATABASE.data.chats[m.chat].enhance) {
            reply('Masih ada proses yang belum selesai.')
            } else {
            if (isImage || isQuotedImage) {
            DATABASE.data.chats[m.chat].enhance = true
            let media = await conn.downloadAndSaveMediaMessage(quoted)
            let updta = await UploadFileUgu(media)
            let srgan2x_ = await srgan4x(updta.url)
            const thumbBuffer = await getBuffer(srgan2x_.result)
            const buff = await extractImageThumb(thumbBuffer);
            await conn.sendMessage(m.chat, { document: { url: srgan2x_.result }, mimetype: 'image/png', fileName: `enhanced no mull.png`, jpegThumbnail: buff.buffer }, { quoted: m })
            //conn.sendMessage(m.chat, { image: { url: srgan2x_.result }, caption: 'enhanced no mull' }, { quoted: m }).then(() => {
            DATABASE.data.chats[m.chat].enhance = false
            //})
            } else {
            reply('Reply gambarnya Baka (*￣ii￣)')
                }
            }
            }
            break
    	case 'google': {
            if (!text) return reply(`Kirim perintah ${command} dan masukan kata kunci yang ingin dicari berikut contohnya ${command} apa itu bot`)
            google({ 'query': text }).then(r => {
                var rs = r.slice(0, 5)
                let captserch = `\n`
                for (let i = 0; i < rs.length; i++) {
                    captserch +=  `*Link:* ${rs[i].link}\n*Title:* ${rs[i].title}\n*Snippet:* ${rs[i].snippet}\n\n`
                }
            reply(captserch)
            })
            }
            break
    	case 'pinterest': {
            if (!text) return reply(`Kirim perintah ${command} dan masukan kata kunci yang ingin dicari berikut contohnya ${command} megumin`)
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random() * anu.length)]
            conn.sendMessage(m.chat, { image: { url: result }, caption: ''}, { quoted: m })
            }
            break
        case 'music': {
            if (!text) return reply(`Masukan judul music apa yang ingin di cari dengan contoh ${prefix}music omg newjeans`)
            const msc = require('node-youtube-music')
            const { key } = await conn.sendMessage(m.chat, { text: 'Mencari data berdasarkan music.youtube.com' }, { quoted: m })
            msc.searchMusics(text).then(async(rmsc) => {
            let no = 1
                teks_mus = `Data diambil berdasarkan music.youtube.com\n\n`
            for (var x of rmsc.slice(0, 10)) {
                teks_mus += `${no++}. ${x.title}\n`
            if (x.artists && x.artists.length > 0) {
                teks_mus += `Artis: ${x.artists[0].name}\n`
                }
                teks_mus += `Durasi: ${x.duration.label}\n- ${blos(x.youtubeId)}\n\n`
            }
                teks_mus += `Balas pesan bot ini untuk memutar music dengan perintah ${prefix}p 1 untuk mengambil data music nomor tersebut.`
            setTimeout(() => {
                conn.sendMessage(m.chat, { text: teks_mus, edit: key }, { quoted: m })
            }, 5000)
            })
            }
            break
        case 'p': {
            if (!m.quoted) return
            if (!m.quoted.isBaileys) return
            const dataDownmp3 = m.quoted.text
            try {
            let urls_ = dataDownmp3.split('- ')
            let dur_ = dataDownmp3.split('Durasi: ')
            let mp3Files = getRandom('.mp3')
            const reactionMessage = { react: { text: '🎧', key: m.key } }
            const sendMsg = await conn.sendMessage(m.chat, reactionMessage)
            ytdlDownloader(`https://music.youtube.com/watch?v=${urls_[args[0]].replace('`', '')}&feature=share`, 'mp3').then(async (res) => {
            const { desc, thumb, title, channel } = res
            ytdl(`https://music.youtube.com/watch?v=${urls_[args[0]].replace('`', '')}&feature=share`, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(mp3Files))
            .on('finish', async () => {
            const pmus = await reply(`- ${title} - ${channel.replace(' - Topic', '')}`)
            await conn.sendMessage(m.chat, { audio: { url: mp3Files }, mimetype: 'audio/mpeg', ptt: true /*seconds: 359996400*/ }, { quoted: pmus })
            fs.unlinkSync(mp3Files)
                /*conn.sendMessage(m.chat, {
                    text: desc,
                    contextInfo: { externalAdReply: {
                        title: title,
                        body: channel,
                        thumbnailUrl: thumb,
                        sourceUrl: '',
                        mediaType: 1,
                        renderLargerThumbnail: true 
                    }}
                }, { quoted: pmus })*/
            //let exc = await executeAfterDelay(dur_[args[0]])
            })
            //setTimeout(() => {
            //    conn.sendMessage(m.chat, { delete: pmus.key })
            //}, exc)
            })
            } catch {
            await reply('💔️ Sepertinya ada yang salah saat mengambil data.')
                }
            }
            break
        case 'youtube': {
            if (!text) return reply(`Kirim perintah ${command} dan masukan kata kunci yang ingin dicari berikut contohnya ${command} light switch`)
            yts.search(text).then(results => {
            var data = results.videos.slice(0, 5)
                teks = ``
            for (var x of data) {
                teks += `*Judul:* ${x.title}\n\n*Durasi:* ${timeConvert(`${x.duration}`)}\n\n*Download:* ${prefix}ytmp3 - ${prefix}ytmp4\n${x.shareLink}\n-----------------------------\n`
            }
                teks += ``
                conn.sendMessage(m.chat, { text: teks }, { quoted: m })
            }).catch(() => reply('💔️ Maaf, Gunakan kata kunci lain'))
            }
            break
        case 'instagram': {
            if (!text) return reply(`Untuk mendownload photo, video, reels, hightlights & igtv dari instagram gunakan ${command} dan berikan link instagram yang ingin dijadikan photo, video, reels, hightlights & igtv`)
            let isInsta_ = args[0].match(/(https:\/\/www.instagram.com)/gi)
            if (!isInsta_) return await reply(`Itu bukan link instagram Baka (*￣ii￣)`)
            await waiting(m.chat, text)
            //await loading()
            try {
            const insta = await fetchJson(`https://vihangayt.me/download/instagram?url=${q}`, { method: 'get' })
            const res_insta = insta.data.data
            for (let i of res_insta) {
                if (i.type.includes('image')) {
                    await conn.sendMessage(m.chat, { image: { url: i.url }, caption: 'instagram no mull' }, { quoted: m })
                } else {
                    await conn.sendMessage(m.chat, { video: { url: i.url }, caption: 'instagram no mull '}, { quoted: m })
                }
            }
            } catch {
            await reply('💔️ Maaf, Server bermasalah')
                }
            }
            break
        case 'soundcloud': {
            if (!text) return reply(`Kirim perintah ${command} dan masukan kata kunci yang ingin dicari berikut contohnya ${command} light switch`)
            // Cek apakah input merupakan link SoundCloud
            let isSound_ = text.match(/(?:https?:\/{2})?(?:w{3}\.)?soundcloud.com/)
            if (isSound_) {
            // Jika input adalah link SoundCloud, lakukan proses download dan informasi lagu
            await waiting(m.chat, text)
            //await loading()
            scdl.download(text, CLIENT_ID)
            .then(stream => {
            stream.pipe(fs.createWriteStream('soundcloud.mp3'))
            })
            await sleep(7000)
            await conn.sendMessage(m.chat, { audio: { url: 'soundcloud.mp3' }, mimetype: 'audio/mpeg' }, { quoted: m })
            await sleep(10000)
            .then(() => fs.unlinkSync('soundcloud.mp3'))
            scdl.getInfo(text, CLIENT_ID).then(info =>{
            const dur = timeConvert(info.full_duration)
            if (info.full_duration >= 900000) return reply('Lagu lebih dari batas maksimal 15 Menit!')
            const scdl_ = `*Title:* ${info.title}
*Duration:* ${dur}
*Playback:* ${info.playback_count}
*Likes:* ${info.likes_count}`
            conn.sendMessage(m.chat, { image: { url: info.artwork_url },  caption: scdl_ }, { quoted: m })
            })
            } else {
            // Jika input bukan link SoundCloud, lakukan pencarian lagu
            scdl.search("tracks", text, CLIENT_ID).then(res => {
            var data = res.collection.slice(0, 5)
            teks = ``
            Object.keys(data).forEach(function (i) {
                var durasi = data[i].full_duration
                var duration = timeConvert(durasi)
                teks += `*Judul:* ${data[i].title}\n\n*Durasi:* ${duration}\n\n*Download:* ${prefix}soundcloud ${data[i].permalink_url}\n--------------------------------\n`
            })
            teks += ``
            conn.sendMessage(m.chat, { image: { url: res.collection[0].artwork_url },  caption: teks }, { quoted: m })
            }).catch(() => reply('💔️ Maaf, Gunakan kata kunci lain'))
            }
            }
            break;
        case 'ytmp3': {
            if (!text) return reply(`Untuk mendownload audio dari youtube gunakan ${command} dan berikan link youtube yang ingin dijadikan audio`)
            let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return await reply(`Itu bukan link youtube Baka (*￣ii￣)`)
            await waiting(m.chat, text)
            //await loading()
            if (args[1] == '-doc') {
            ytdlDownloader(text, 'mp3').then(async (res) => {
                const { title, channel, duration, views, desc, size, dl_url, thumb } = res
                if (size.split(' MB')[0] >= 10.00) return reply('File sudah melebihi batas maksimal 10 MB!')
                const ytmp3_ = `*Title:* ${title} 
*Uploaded by:* ${channel}
*Duration:* ${duration}
*Views:* ${views}
*Description:* ${desc ? `${desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}` : ``}`
            let mp3File = getRandom('.mp3')
            const thumbBuffer = await fetch(thumb).then(response => response.buffer());
            const buff = await extractImageThumb(thumbBuffer);
            ytdl(text, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(mp3File))
            .on('finish', async () => {
            let docmp3 = await conn.sendMessage(m.chat, { document: { url: mp3File }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`, jpegThumbnail: buff.buffer }, { quoted: m })
            fs.unlinkSync(mp3File)
            setTimeout(() => {
            conn.sendMessage(m.chat, { image: { url: thumb }, caption: ytmp3_ }, { quoted: docmp3 })
            }, 5000)
            })
            }).catch(() => reply('💔️ Maaf, Server bermasalah'))  
            } else if (args[1] == '-vn') {
            ytdlDownloader(text, 'mp3').then(async (res) => {
                const { title, channel, duration, views, desc, size, dl_url, thumb } = res
                if (size.split(' MB')[0] >= 20.00) return reply('File sudah melebihi batas maksimal 20 MB!')
                const ytmp3_ = `*Title:* ${title} 
*Uploaded by:* ${channel}
*Duration:* ${duration}
*Views:* ${views}
*Description:* ${desc ? `${desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}` : ``}`
            let mp3File = getRandom('.mp3')
            ytdl(text, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(mp3File))
            .on('finish', async () => {
            let vnmp3 = await conn.sendMessage(m.chat, { audio: { url: mp3File }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            fs.unlinkSync(mp3File)
            setTimeout(() => {
            conn.sendMessage(m.chat, { image: { url: thumb }, caption: ytmp3_ }, { quoted: vnmp3 })
            }, 5000)
            })
            }).catch(() => reply('💔️ Maaf, Server bermasalah'))  
            } else {
            ytdlDownloader(text, 'mp3').then(async (res) => {
                const { title, channel, duration, views, desc, size, dl_url, thumb } = res
                if (size.split(' MB')[0] >= 10.00) return reply('File sudah melebihi batas maksimal 10 MB!')
                const ytmp3_ = `*Title:* ${title} 
*Uploaded by:* ${channel}
*Duration:* ${duration}
*Views:* ${views}
*Description:* ${desc ? `${desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}` : ``}`
            let mp3File_ = getRandom('.mp3')
            ytdl(text, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(mp3File_))
            .on('finish', async () => {
            let mp3 = await conn.sendMessage(m.chat, { audio: { url: mp3File_ }, mimetype: 'audio/mpeg' }, { quoted: m })
            fs.unlinkSync(mp3File_)
            setTimeout(() => {
            conn.sendMessage(m.chat, { image: { url: thumb }, caption: ytmp3_ }, { quoted: mp3 })
            }, 5000)
            })
            }).catch(() => reply('💔️ Maaf, Server bermasalah'))
            }
            }  
            break 
        case 'ytmp4': {
            if (!text) return reply(`Untuk mendownload video dari youtube gunakan ${command} dan berikan link youtube yang ingin dijadikan video`)
            let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return await reply(`Itu bukan link youtube Baka (*￣ii￣)`)
            await waiting(m.chat, text)
            //await loading()
            ytdlDownloader(text, 'mp4').then(async (res) => {
                const { title, channel, duration, views, desc, size, dl_url } = res
                if (size.split(' MB')[0] >= 100.00) return reply('File sudah melebihi batas maksimal 100 MB!')
                const ytmp4_ = `*Title:* ${title} 
*Uploaded by:* ${channel}
*Duration:* ${duration}
*Views:* ${views}
*Description:* ${desc ? `${desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}` : ``}`
            conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: ytmp4_ }, { quoted: m })
            }).catch(() => reply('💔️ Maaf, Server bermasalah'))
            }  
            break
        case 'tiktokdl': case 'tiktok': {
            if (!text) return reply(`Untuk mendownload video dari tiktok gunakan ${command} dan berikan link tiktok yang ingin dijadikan video`)
            const { tiktok } = require('@xct007/frieren-scraper')
            let isTiktok = args[0].match(/(?:https?:\/vt)?(?:w{3}\.)?tiktok.com/)
            if (!isTiktok) return await reply(`Itu bukan link tiktok Baka (*￣ii￣)`)
            await waiting(m.chat, text)
            //await loading()
                try {
                const tiktok_ = await fetchJson('https://vihangayt.me/download/tiktok?url=' + text, { methode: 'get' })
                buffer = await getBuffer(tiktok_.data.play_url)
                await conn.sendMessage(m.chat, { video: buffer, mimetype: 'video/mp4', caption: `` }, { quoted: m })
                } catch {
            await reply('💔️ Maaf, Server bermasalah')
                }
            }
            break
        case 'elf': {
            konanc = await booru.search('konan', ['elf'], { limit: 1, random: true })
            conn.sendMessage(m.chat, { image: { url: konanc.posts[0].fileUrl }, caption: 'Elf kamu telah muncul.' }, { quoted: m })
            }
            break
        case 'loli': {
            konanc = await booru.search('konan', ['loli'], { limit: 1, random: true })
            await conn.sendMessage(m.chat, { image: { url: konanc.posts[0].fileUrl }, caption: 'Onii-Chan Baka!!' }, { quoted: m })
            }
            break
        case 'neko': {
            neko = HMfull.HMtai.sfw.neko()
            conn.sendMessage(m.chat, { image: { url: neko.url }, caption: 'Onii-Chan Baka!!' }, { quoted: m })
            }
            break
        case 'waifu': {
            waifu = await fetchJson(`https://api.waifu.pics/sfw/waifu`, { method: 'get' })
            conn.sendMessage(m.chat, { image: { url: waifu.url }, caption: 'Waifu kamu telah muncul.' }, { quoted: m })
            }
            break
        case 'nhentai': {
            if (!text) return reply('Beri aku nama Baka (*￣ii￣)')
            const datanh = await nhentai.search(text)
            const nhdet = datanh.data
                teks_Hentai = 'Hasil yang diberikan berdasarkan nhentai.to, nhentai.xxx, nhentai.website\n'
            for (let i of nhdet) {
                teks_Hentai += `\n📗Title: ${i.title}\n📘ID: ${i.id}\n⤗Download: ${prefix}ncode ${i.id}\n\n`
                }                     
            reply(teks_Hentai)
            }
            break
        case 'komiku': {
            const { komikuId } = require('@xct007/frieren-scraper')
            if (args[0] === 'detail') {
            komikuId.detail(args[1]).then(async (komikuDetail) => {
            const dt = komikuDetail
            const dtChapter = komikuDetail.chapters
                text_details = `📗Title: ${dt.title}\n📙Synopsis: ${dt.description}\n\n*_Untuk download silahkan kirimkan perintah dengan contoh_*\n*_${prefix}komiku download urlnya_*`
                text_detail = ``
            for (var chp of dtChapter) {
                text_detail += `\n${chp.chapter}\n⤗Download: ${prefix}komiku download ${chp.url}\n`
            }
                text_detail += ``
            await reply(text_details)
            reply(text_detail)
            })
            } else if (args[0] === 'download') {
            const komikuUrl = await getChapter(args[1])
            const komikuImg = komikuUrl.images
            const PDFpages = []
            let { key } = await conn.sendMessage(m.chat, { text: 'Membuat file pdf: 0/' + komikuImg.length}, { quoted: m })
            const thumbBuffer = await getBuffer(komikuImg[0])
            const buffer = await extractImageThumb(thumbBuffer)
            for (let i = 0; i < komikuImg.length; i++) {
                image_name = './media/komiku/'+i+'.jpg'
                await conn.sendMessage(m.chat, { text: `Membuat file pdf: ${i + 1}/${komikuImg.length}`, edit: key }, { quoted: m })
                await new Promise((resolve) => request(komikuImg[i]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
                PDFpages.push(image_name)
            }
            imgToPDF(PDFpages, 'A4').pipe(fs.createWriteStream(`output.pdf`))
            try {
                fs.readdir('./media/komiku/', async (err, files) => {
                    if (err) throw err
                    for (const file of files) {
                        await fs.unlink(path.join('./media/komiku/', file), err => {
                        if (err) throw err
                    })
                  }
                })
            } catch (err) {
                console.log(err)
            }
            setTimeout(async () => { 
                await conn.sendMessage(m.chat, { document: { url: 'output.pdf' }, mimetype: 'application/pdf', fileName: komikuUrl.title + '.pdf', pageCount: PDFpages.length, jpegThumbnail: buffer.buffer }, { quoted: m })
            }, 5000)
            setTimeout(async () => {
                await fs.unlinkSync('output.pdf')
            }, 5000)
            } else {
            komikuId.search(text).then(komikuList => {
            var data = komikuList
                text_komiku = ``
            for (var komiku of data) {
                text_komiku += `\n📗Title: ${komiku.title}\n📙Initial ${komiku.awal}\n📙Latest ${komiku.terbaru}\n⤗More Info: ${prefix}komiku detail ${komiku.url}\n\n`
            }
                text_komiku += ``
            conn.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: text_komiku }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Manga tidak ditemukan'))
            }
            }   
            break
         case 'ncode': {
            if (!isOwner) return reply('Lah mau ngapain ?')
            const nhcode = await nhentai.getDoujin(text)
            const nhimage = nhcode.images.pages
            nh_text = `📗Title: ${nhcode.title}\n🏷️Tag: ${nhcode.tags.join(', ')}`
            const PDFpages = []
            let { key } = await conn.sendMessage(m.chat, { text: 'Membuat file pdf: 0/' + nhimage.length}, { quoted: m })
            const thumbBuffer = await getBuffer(nhimage[0])
            const buffer = await extractImageThumb(thumbBuffer)
            for (let i = 0; i < nhimage.length; i++) {
                image_name = './media/nhentai/'+i+'.jpg'
                await conn.sendMessage(m.chat, { text: `Membuat file pdf: ${i + 1}/${nhimage.length}`, edit: key }, { quoted: m })
                await new Promise((resolve) => request(nhimage[i]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
                PDFpages.push(image_name)
            }
            imgToPDF(PDFpages, 'A4').pipe(fs.createWriteStream(`output.pdf`))
            try {
                fs.readdir('./media/nhentai/', async (err, files) => {
                    if (err) throw err
                    for (const file of files) {
                        await fs.unlink(path.join('./media/nhentai/', file), err => {
                        if (err) throw err
                    })
                  }
                })
            } catch (err) {
                console.log(err)
            }
            setTimeout(async () => { 
                await conn.sendMessage(m.chat, { document: { url: 'output.pdf' }, mimetype: 'application/pdf', fileName: nhcode.title + '.pdf', caption: nh_text, pageCount: PDFpages.length, jpegThumbnail: buffer.buffer }, { quoted: m })
            }, 5000)
            setTimeout(async () => {
                await fs.unlinkSync('output.pdf')
            }, 5000)
            }
            break
        case 'marry': {
            if (!text) return reply('Beri aku ID Baka (*￣ii￣)')
            if (global.DATABASE.data.users[m.sender].statusMarry) {
            let teks_marry = `Kamu telah menikah dengan [${global.DATABASE.data.users[m.sender].marryName}]`
            reply(teks_marry)
            } else {
            //if (DATABASE.data.users[m.sender].balance < 15000) return reply(`Balance kamu tidak mencukupi untuk melakukan pernikahan`)
            let anu_marry = await searchCharacterById(text)
            let dbMarry = global.DATABASE.data.users[m.sender].userMarriage
            let marryCheck = ''
                for (var i = 0; i < dbMarry.length; i++ ) {
                    if (dbMarry[i].name.full === anu_marry.name.full) {
                        marryCheck += 'true'
                    } else {
                }
            }
            if (marryCheck === 'true') {
                reply(`Kamu tidak bisa melakukan pernikahan kembali dengan [${anu_marry.name.full}]`)
            } else {
            let teks_charmarry = `Selamat [${DATABASE.data.users[m.sender].pushName}] atas pernikahannya dengan [${anu_marry.name.full}]. Sebagai ucapan selamat kami memberikan kamu + ❤️‍🔥 500 Popularitas.`
            await conn.sendMessage(m.chat, { image: { url: anu_marry.image.large }, caption: teks_charmarry }, { quoted: m })
            DATABASE.data.users[m.sender].statusMarry = true
            DATABASE.data.users[m.sender].marryName = anu_marry.name.full
            DATABASE.data.users[m.sender].userMarriage
            DATABASE.data.users[m.sender].userPopularty += 500 
            //addPopularity(m.sender, 1500, popularitas)
            //DATABASE.data.users[m.sender].balance -= 15000
                    }
                }
            }
            break
        case 'divorce': {
            if (!text) return reply('Beri aku ID Baka (*￣ii￣)')
            if (!DATABASE.data.users[m.sender].statusMarry) return await reply('Kamu belum melakukan pernikahan')
            let anu_marrys = await searchCharacterById(text)
            let teks_charmarrys = `Berhasil melakukan perceraian dengan [${anu_marrys.name.full}]. - ❤️‍🔥 25 Popularitas.`
            await conn.sendMessage(m.chat, { image: { url: anu_marrys.image.large }, caption: teks_charmarrys }, { quoted: m })
            let mry = DATABASE.data.users[m.sender].userMarriage
            DATABASE.data.users[m.sender].userPopularty -= 25
            DATABASE.data.users[m.sender].statusMarry = false
            DATABASE.data.users[m.sender].marryName = ''
            DATABASE.data.users[m.sender].userDivorce += 1
            mry.push(anu_marrys)
            }
            break
        case 'get_char': {
            if (!isOwner) return
            let getChar = await searchCharacterById(text)
            let outChar = `Claim successful!
Well done ${DATABASE.data.users[m.sender].pushName}, you claimed
📗Name: ${getChar.name.full}
It appears in :
- ${getChar.media.nodes[0].title.romaji ? `${getChar.media.nodes[0].title.romaji}` : ``}
`;
            
                outChar += `===== About ${getChar.name.full} =====
${getChar.description ? `${getChar.description}` : ``}`

            // NEW DATABASE FOR CLAIM CHARACTER
            let dbCharacter = global.DATABASE.data.users[m.sender].userCharacter
            dbCharacter.push(getChar)

            conn.sendMessage(m.chat, { image: { url: getChar.image.large }, caption: outChar }, { quoted: m })
            }
            break   
        case 'add_char': {
            if (!isOwner) return
            anu = await searchAnimeById(text)
            var u__ = anu.characters.nodes
            for (let i of u__) {
            qChar = `${i.name.full}`
            qId = `${i.id}`
            //reply(qChar)
            await searchCharacterById(qId).then(ress => {
                let isCharaAva = ''
                for (var z = 0; z < charlist.length; z++) {
                    if (charlist[z].full_name === ress.name.full) {
                        isCharaAva += 'true'
                    } else {                
                }
            }
                // console.log(isCharaAva)
            if (isCharaAva === 'true') {
            //reply(`Maaf karakter ${qChar} telah ditambahkan ke database!`)
            } else {
                    charlist.push({
                        Id: qId,
                        full_name: qChar,
                        keyword: qChar
                    })
            fs.writeFileSync('./lib/charlist.json', JSON.stringify(charlist, null, 2))
            //reply(`Berhasil menambahkan karakter ke database!`)
                }
            })    
            .catch(error => {
            reply('Karakter tidak ditemukan!')
            })
                }   
            }
            //console.log(anu)
            break
        case 'claim': {
                if (args.length < 0) return reply(`BAKA!!`);
                // if (level.getLevelingLevel(m.sender, _level) < 2) return reply(`Dibutuhkan level 2 untuk menggunakan fitur ini`);
                
                const read_carg = fs.readdirSync('./lib/chara_galery');
                const galeryPath = './lib/chara_galery/' + m.sender + '.json';
                const detectNumChar = read_carg.includes(m.sender + '.json') ? true : false;
                const buffGalery = detectNumChar ? JSON.parse(fs.readFileSync(galeryPath)) : '';
            
                try {
                    let stringCorrect = ``;
                    const charbuffSplited = buffChara.anime_result.name.full.split(' ')
            
                    for (var c = 0; c < charbuffSplited.length; c++) {
                        stringCorrect += `${charbuffSplited[c]}|`;
                    }
            
                    const correctChat = new RegExp(stringCorrect.slice(0, -1), 'gi');
            
                    if (buffChara.claimed_by_sender.length > 0) return reply(`BAKA!!`);
                    if (buffChara.status !== 'active') return reply(`charagame tidak terdaftar di ${groupMetadata.subject}`);
                    if (!correctChat.test(`${q}`)) return reply(`Claim unsuccessful~`);
            
                    if (!detectNumChar) {
                        const buffGaleryv = detectNumChar ? JSON.parse(fs.readFileSync(galeryPath)) : '';
            
                        if (buffGaleryv.status !== 'active' && fs.existsSync('./lib/chara_galery/' + m.sender + '.json')) {
                            return reply(`Double claim not allowed!`);
                        }
            
                        const galery_obj = {
                            status: 'active',
                            sender: m.sender,
                            name: pushname,
                            animes: []
                        };
                        
                        fs.writeFileSync(galeryPath, JSON.stringify(galery_obj, null, 2));
                        
                        const buffChara = JSON.parse(fs.readFileSync('./lib/chara/' + m.chat + '.json'));
                        const buffGalery = JSON.parse(fs.readFileSync('./lib/chara_galery/' + m.sender + '.json'));

                        // NEW DATABASE FOR CLAIM CHARACTER
                        let dbCharacter = global.DATABASE.data.users[m.sender].userCharacter
                        dbCharacter.push(buffChara.anime_result)
                        
                        buffGalery.animes.push(buffChara.anime_result);
                        fs.writeFileSync(galeryPath, JSON.stringify(buffGalery, null, 2));
            
                        buffChara.claimed_by_name.push(pushname);
                        buffChara.claimed_by_sender.push(m.sender);
                        buffChara.claimed_keyword.push(`${q}`);
                        fs.writeFileSync('./lib/chara/' + m.chat + '.json', JSON.stringify(buffChara, null, 2));
            
                        let outGalery = `Berhasil diklaim
Bagus sekali ${global.DATABASE.data.users[m.sender].pushName}, kamu mengklaim
📗Name: ${buffChara.anime_result.name.full}
Muncul dalam seri:
- ${buffChara.anime_result.media.nodes[0].title.romaji ? `${buffChara.anime_result.media.nodes[0].title.romaji}` : ``}`;
            
                        /*outGalery += `===== About ${buffChara.anime_result.name.full} =====
${buffChara.anime_result.description ? `${buffChara.anime_result.description}` : ``}`;*/
                        
                        if (/*buffGalery.animes.length === 0*/ false) {
                            reply(`Kamu harus mengklaim beberapa chara untuk menampilkan galeri!`);
                        } else {
                            //buff = await getBuffer(buffChara.anime_result.image[0])
                            //conn.sendMessage(m.chat, buff, image, { quoted: m, mimetype: 'image/jpeg', caption: outGalery })
                            conn.sendMessage(m.chat, { image: { url: buffChara.anime_result.image.large }, caption: outGalery }, { quoted: m });
                            //sendFileFromUrl(buffChara.anime_result.image[0], image, { quoted: m, caption: outGalery })
                        }
                         
                        buffChara.claimed_by_name.push(pushname);
                        buffChara.claimed_by_sender.push(m.sender);
                        buffChara.claimed_keyword.push(`${q}`);
                        buffGalery.status = 'unactive';  
                        fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2));
                        fs.writeFileSync(galeryPath, JSON.stringify(buffGalery, null, 2));
                    } else {
                        const buffGalerys = JSON.parse(fs.readFileSync('./lib/chara_galery/' + m.sender + '.json'));
                        const buffCharas = JSON.parse(fs.readFileSync('./lib/chara/' + m.chat + '.json'));
            
                        if (buffGalerys.status !== 'active') return reply(`Double claim not allowed!`);
                        
                        // NEW DATABASE FOR CLAIM CHARACTER
                        let dbCharacter = global.DATABASE.data.users[m.sender].userCharacter
                        dbCharacter.push(buffCharas.anime_result)

                        buffGalerys.animes.push(buffCharas.anime_result);
                        fs.writeFileSync(galeryPath, JSON.stringify(buffGalerys, null, 2));
            
                        const buffGalery = JSON.parse(fs.readFileSync('./lib/chara_galery/' + m.sender + '.json'));
                        const buffChara = JSON.parse(fs.readFileSync('./lib/chara/' + m.chat + '.json'));
            
                        let outGalery = `Berhasil diklaim
Bagus sekali ${global.DATABASE.data.users[m.sender].pushName}, Kamu mengklaim
📗Name: ${buffChara.anime_result.name.full}
Muncul dalam seri:
- ${buffChara.anime_result.media.nodes[0].title.romaji ? `${buffChara.anime_result.media.nodes[0].title.romaji}` : ``}`;
            
                        /*outGalery += `===== About ${buffChara.anime_result.name.full} =====
${buffChara.anime_result.description ? `${buffChara.anime_result.description}` : ``}`;*/
            
                        if (/*buffGalery.animes.length === 0*/ false) {
                            reply(`Kamu harus mengklaim beberapa chara untuk menampilkan galeri!`);
                        } else {
                            //buff = await getBuffer(buffChara.anime_result.image[0])
                            //conn.sendMessage(m.chat, buff, image, { quoted: m, mimetype: 'image/jpeg', caption: outGalery })
                            //sendFileFromUrl(buffChara.anime_result.image[0], image, { quoted: m, caption: outGalery })
                            conn.sendMessage(m.chat, { image: { url: buffChara.anime_result.image.large }, caption: outGalery }, { quoted: m });
                        }
            
                        // for (var i = 0; i < 15; i++) {
                        buffChara.claimed_by_name.push(pushname);
                        buffChara.claimed_by_sender.push(m.sender);
                        buffChara.claimed_keyword.push(correctChat);
                        buffGalery.status = 'unactive';  
                        fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2));
                        fs.writeFileSync(galeryPath, JSON.stringify(buffGalery, null, 2));
                    } 
                } catch (e) {
                    console.log(e);
                    reply('BAKA!!');
                    }
                }
                break;
                // NEW DATABASE GALLERY BY YOGI
        case 'gallery': {
                try {
                    if (mentionUser[0]) {
                        let { pushName, userCharacter } = global.DATABASE.data.users[mentionUser[0]]
                        galleryShow = `
❢ Nama ❢: ${pushName}

↯ Karakter diklaim ↯: ${userCharacter.length}

➬ Karakter terakhir diklaim ➬: 
${userCharacter[userCharacter.length - 1].name.full}

-----------------------------`
                    for (var i = 0; i < userCharacter.length; i++) {
                    const description = userCharacter[i].description;
                    const descToShow = description && description !== '\n' ?
                        description.split(' ').slice(0, 15).join(' ') : '-';
                        galleryShow += `
♛ Name ♛:- ${userCharacter[i].name.full}

⎙ ID ⎙:- ${userCharacter[i].id}

⤗More Info: ${prefix}charid ${userCharacter[i].id}

About:- ${descToShow}

-----------------------------`;
                        }
                        //console.log(galleryShow)
                        conn.sendMessage(m.chat, { image: { url: userCharacter[userCharacter.length - 1].image.large }, caption: galleryShow }, { quoted: m })
                } else {
                        let { pushName, userCharacter } = global.DATABASE.data.users[m.sender]
                        galleryShow = `
❢ Nama ❢: ${pushName}

↯ Karakter diklaim ↯: ${userCharacter.length}

➬ Karakter terakhir diklaim ➬:
${userCharacter[userCharacter.length - 1].name.full}

-----------------------------`
                    for (var i = 0; i < userCharacter.length; i++) {
                    const description = userCharacter[i].description;
                    const descToShow = description && description !== '\n' ?
                        description.split(' ').slice(0, 15).join(' ') : '-';
                        galleryShow += `
♛ Name ♛:- ${userCharacter[i].name.full}

⎙ ID ⎙:- ${userCharacter[i].id}

⤗More Info: ${prefix}charid ${userCharacter[i].id}

About:- ${descToShow}

-----------------------------`;
                        }
                        //console.log(galleryShow)
                        conn.sendMessage(m.chat, { image: { url: userCharacter[userCharacter.length - 1].image.large }, caption: galleryShow }, { quoted: m })
                }
                    } catch {
                    await conn.sendFileUrl(m.chat, 'https://telegra.ph/file/eac66f6f0069b2d4ab634.png', '💔️ Maaf, Gagal menampilkan galeri', m)
                    }
                }
                break
        case prefix + 'news': {
                try {
                    const somosUrl = 'https://somoskudasai.com/'
                    const somosList = await somoskudasai(somosUrl)
                    for (let i = 0; i < Math.min(somosList.length, 5); i++) {
                    const somos = somosList[i];
                    const somosTr = await translate(somos.title, { to: 'id' });
                    const text_somos = `"${somosTr.text}"\n\n📢 フェルン Anime news.`;
                    await conn.sendMessage(m.chat, { image: { url: somos.img }, caption: text_somos }, { quoted: m });
                    }
                } catch (error) {
                reply('💔️ Maaf, News tidak ditemukan')
                }
            }
            break
        case 'treanime': {
            getTrendingAnime().then(animeList => {
                text_anime = ``
                animeList.forEach((anime, index) => {
                text_anime += `\n📗Anime: ${anime.title.romaji || anime.title.english}\n📘Type: ${anime.format ? `${anime.format}` : ``}\n📘Genres: ${anime.genres.join(', ')}\n⤗More Info: ${prefix}aid ${anime.id}\n`
                })
                text_anime += ``
            conn.sendMessage(m.chat, { image: { url: animeList[0].coverImage.large }, caption: text_anime }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Anime tidak ditemukan'))
            }
            break
        case 'anime': {
            if (!text) return reply('Beri aku nama Baka (*￣ii￣)')
            const animeName = text // Ganti dengan nama anime yang ingin Anda cari
            searchAnimeByName(animeName).then(animeList => {
                text_anime = ``
                animeList.forEach((anime, index) => {
                text_anime += `\n📗Anime: ${anime.title.romaji || anime.title.english}\n📘Type: ${anime.format ? `${anime.format}` : ``}\n📘Genres: ${anime.genres.join(', ')}\n⤗More Info: ${prefix}aid ${anime.id}\n`
                })
                text_anime += ``
            conn.sendMessage(m.chat, { image: { url: animeList[0].coverImage.large }, caption: text_anime }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Anime tidak ditemukan'))
            }
            break
        case 'aid': {
            if (!text) return reply('Beri aku ID Baka (*￣ii￣)')
            if (args[1] === '-char') {
                searchAnimeById(args[0]).then(animeChar => {
                animeChar_text = ``
                animeChar.characters.nodes.forEach((character, index) => {
                animeChar_text += `\n📗Name: ${character.name.full || character.name.native}\n📘ID: ${character.id}\n⤗More Info: ${prefix}charid ${character.id}\n`
                })
                animeChar_text += ``
            conn.sendMessage(m.chat, { image: { url: animeChar.characters.nodes[0].image.large }, caption: animeChar_text }, { quoted: m })
                }).catch(error => reply('💔️ Maaf, Character tidak ditemukan'))
            } else {
                searchAnimeById(text).then(anime => {
                animeId_text = `📗Anime: ${anime.title.romaji || anime.title.english}
📘Genres: ${anime.genres.join(', ')}
📙Episode: ${anime.episodes ? `${anime.episodes}` : `0`}
📙Type: ${anime.format ? `${anime.format}` : ``}
↹Status: ${anime.status}
↛Aired: ${anime.startDate.year ? `${anime.startDate.year}`: `-`}/${anime.startDate.month ? `${anime.startDate.month}` : `-`}/${anime.startDate.day ? `${anime.startDate.day}` : `-`}
↯Rating: ${anime.averageScore ? `${anime.averageScore}` : `-`}
🕒Duration: ${anime.duration ? `${anime.duration}` : `-`}
⤗Season: ${anime.season ? anime.season : '-'} ${anime.seasonYear ? anime.seasonYear : ''}
📙Synopsis: ${anime.description ? `${anime.description}` : `-`}`
            conn.sendMessage(m.chat, { image: { url: anime.coverImage.large }, caption: animeId_text }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Anime tidak ditemukan'))            
                }
            }
            break
        case 'tremanga': {
            getTrendingManga().then(mangaList => {
                text_manga = ``
                mangaList.forEach((manga, index) => {
                text_manga += `\n📗Manga: ${manga.title.romaji || manga.title.english}\n📘Type: ${manga.format ? `${manga.format}` : ``}\n📘Genres: ${manga.genres.join(', ')}\n⤗More Info: ${prefix}mid ${manga.id}\n`
                })
                text_manga += ``
            conn.sendMessage(m.chat, { image: { url: mangaList[0].coverImage.large }, caption: text_manga }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Manga tidak ditemukan'))
            }
            break
        case 'manga': {
            if (!text) return reply('Beri aku nama Baka (*￣ii￣)')
            const mangaName = text // Ganti dengan nama manga yang ingin Anda cari
            searchMangaByName(mangaName).then(mangaList => {
                text_manga = ``
                mangaList.forEach((manga, index) => {
                text_manga += `\n📗Manga: ${manga.title.romaji || manga.title.english}\n📘Type: ${manga.format ? `${manga.format}` : ``}\n📘Genres: ${manga.genres.join(', ')}\n⤗More Info: ${prefix}mid ${manga.id}\n`
                })
                text_manga += ``
            conn.sendMessage(m.chat, { image: { url: mangaList[0].coverImage.large }, caption: text_manga }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Manga tidak ditemukan'))
            }
            break
        case 'mid': {
            if (!text) return reply('Beri aku ID Baka (*￣ii￣)')
            const mangaId = text // Ganti dengan ID manga yang ingin Anda cari
            searchMangaById(mangaId).then(manga => {
                mangaId_text = `📗Manga: ${manga.title.romaji || manga.title.english}
📘Genres: ${manga.genres.join(', ')}
📙Volumes: ${manga.volumes ? `${manga.volumes}` : `0`}
📙Chapters: ${manga.chapters ? `${manga.chapters}` : `0`}
📙Type: ${manga.format}
↹Status: ${manga.status}
↛Aired: ${manga.startDate.year ? `${manga.startDate.year}`: `-`}/${manga.startDate.month ? `${manga.startDate.month}` : `-`}/${manga.startDate.day ? `${manga.startDate.day}` : `-`}
↯Rating: ${manga.averageScore}
📙Synopsis: ${manga.description ? `${manga.description}` : `-`}`
            conn.sendMessage(m.chat, { image: { url: manga.coverImage.large }, caption: mangaId_text }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Manga tidak ditemukan'))  
            }
            break
        case 'character': {
            if (!text) return reply('Beri aku nama Baka (*￣ii￣)')
            const characterName = text // Ganti dengan nama character yang ingin Anda cari
            searchCharacterByName(characterName).then(characterList => {
                text_character = ``
                characterList.forEach((character, index) => {
                text_character += `\n📗Name: ${character.name.full || character.name.native}\n📘ID: ${character.id}\n⤗More Info: ${prefix}charid ${character.id}\n🤍  Relationship: ${prefix}marry ${character.id}\n`
                })
                text_character += ``
            conn.sendMessage(m.chat, { image: { url: characterList[0].image.large }, caption: text_character }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Character tidak ditemukan'))
            }
            break
        case 'charid': {
            if (!text) return reply('Beri aku ID Baka (*￣ii￣)')
            const characterId = text // Ganti dengan ID karakter yang ingin Anda cari
            searchCharacterById(characterId).then(character => {
                charId_text = `📗Name: ${character.name.full || character.name.native}\nAbout:-\n${character.description}`
                //character.media.nodes.forEach((media, index) => {
                  //  charId_text += `\n📗Anime: ${media.title.romaji || media.title.english}\n📘Type: ${media.type ? `${media.type}` : ``}\n📘Genres: ${media.genres.join(', ')}\n⤗More Info: ${prefix}aid ${media.id}\n`
                //})
                //charId_text += ``
            conn.sendMessage(m.chat, { image: { url: character.image.large }, caption: charId_text }, { quoted: m })
            }).catch(error => reply('💔️ Maaf, Character tidak ditemukan'))
            }
            break
        case 'boom': {
            if (isBoom(m.sender, boom)) return reply(`Masih ada sesi yang belum kamu selesaikan.`)
            let rid = randomNomor(100000)
            let ibom = randomRange(0, 8)
            let timeBoom = 30000
            let bboard = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
            const bomtext = `*B O O M*
Room ID : ${rid}

Buka tanpa mengenai BOOM

  1️⃣2️⃣3️⃣
  4️⃣5️⃣6️⃣
  7️⃣8️⃣9️⃣

`
            let { key } = await conn.sendMessage(m.chat, { text: bomtext }, { quoted: m })
            bboard[ibom] = '💥'
            boom.push({
                room: rid,
                id: m.sender,
                time: executeAfterDelay('0:30'),
                board: bboard,
                message: key
            })
            }
            break
        case 'tictactoe': 
            if (args.length < 1) return reply(`Kirim perintah *${command}* @pengguna`)
            if (isTicTacToe(m.chat, global.DATABASE.data.game.tictactoe)) return reply(`Masih ada game yg blum selesai`)
            if (mentionUser.length !== 0){
            if (mentionUser[0] === m.sender) return reply(`Kasian amat main ama diri sendiri`)
            let h = randomNomor(2000)
            let rid = randomNomor(100000)
            const str_ = `*Tic Tac Toe*
Room ID : ${rid}

@${m.sender.split('@')[0]} menantang @${mentionUser[0].split('@')[0]}

Ketikan Y untuk menerima tantangan
Ketikan T untuk menolak tantangan.

Hadiah : 💴 ${h} Balance`
            let { key } = await conn.sendMessage(m.chat, { text: str_, mentions: parseMention(str_) }, { quoted: m })
            global.DATABASE.data.game.tictactoe.push({
                room: rid, 
                id: m.chat,
                status: null,
                hadiah: h,
                penantang: m.sender,
                ditantang: mentionUser[0],
                TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'],
                message: key
            })
            } else {
                reply(`Kirim perintah *${prefix}tictactoe* @tag`)
            }
            break
        case 'tebakgambar': {
            if (tebakgambar[m.chat]) return conn.sendMessage(m.chat, {
                text: "Soal ini belum selesai"
            }, {
                quoted: tebakgambar[m.chat][0]
            })
            let timeout = 120000
            let poin = 4999
            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
            let result = anu[Math.floor(Math.random() * anu.length)]
            console.log("Jawaban: " + result.jawaban)
            tebakgambar[m.chat] = [
            await conn.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `TEBAKGAMBAR\n\nRangkailah gambar berikut\nTimeout *${(timeout / 1000).toFixed(2)} detik*\nBonus: ${poin} Exp`
            }, {
                quoted: m
            }), result, poin,
            setTimeout(() => {
                if (tebakgambar[m.chat]) {
                    reply(result.jawaban)
                    delete tebakgambar[m.chat]
                        }
                    }, timeout)
                ]
            }
            break
            case "ww": case "werewolf": {
            	if (!m.isGroup) return 
                //if (!isOwner) return reply('Hanya tipe pro/unlimited. yang dapat menggunakan ')
                conn.werewolf = conn.werewolf ? conn.werewolf : {}
                let ww = conn.werewolf
                let data = ww[m.chat]
                let value = args[0]
                let target = args[1]

                // membuat room
                if (value === "create") {
                    if (m.chat in ww) return reply("Group masih dalam sesi permainan")
                    if (playerOnGame(m.sender, ww) === true)
                        return reply("Kamu masih dalam sesi game")
                    ww[m.chat] = {
                        room: m.chat,
                        owner: m.sender,
                        status: false,
                        iswin: null,
                        cooldown: null,
                        day: 0,
                        time: "malem",
                        player: [],
                        dead: [],
                        voting: false,
                        seer: false,
                        guardian: [],
                    }
                    await reply("Room berhasil dibuat, ketik *ww join* untuk bergabung")

                // join sesi permainan
                } else if (value === "join") {
                    if (!ww[m.chat]) return reply("Belum ada sesi permainan")
                    if (ww[m.chat].status === true)
                        return reply("Sesi permainan sudah dimulai")
                    if (ww[m.chat].player.length > 16)
                        return reply("Maaf jumlah player telah penuh")
                    if (playerOnRoom(m.sender, m.chat, ww) === true)
                        return reply("Kamu sudah join dalam room ini")
                    if (playerOnGame(m.sender, ww) === true)
                        return reply("Kamu masih dalam sesi game")
                    let data = {
                        id: m.sender,
                        number: ww[m.chat].player.length + 1,
                        sesi: m.chat,
                        status: false,
                        role: false,
                        effect: [],
                        vote: 0,
                        isdead: false,
                        isvote: false,
                    }
                    ww[m.chat].player.push(data)
                    let player = []
                    let text = `*🐺 - WEREWOLF PLAYER*\n\n`
                    for (let i = 0; i < ww[m.chat].player.length; i++) {
                        text += `(${ww[m.chat].player[i].number}) @${ww[m.chat].player[i].id.replace("@s.whatsapp.net","")}\n`
                        player.push(ww[m.chat].player[i].id)
                    }
                    text += "\nJumlah player minimal adalah 5 dan maximal 15"
                    reply(text.trim())

                // game play
                } else if (value === "start") {
                    if (!ww[m.chat]) return reply("Belum ada sesi permainan")
                    if (ww[m.chat].player.length === 0)
                        return reply("Room belum memiliki player")
                    if (ww[m.chat].player.length < 5)
                        return reply("Maaf jumlah player belum memenuhi syarat")
                    if (playerOnRoom(m.sender, m.chat, ww) === false)
                        return reply("Kamu belum join dalam room ini")
                    if (ww[m.chat].cooldown > 0) {
                        if (ww[m.chat].time === "voting") {
                            clearAllVote(m.chat, ww)
                            addTimer(m.chat, ww)
                            return await run_vote(conn, m.chat, ww)
                        } else if (ww[m.chat].time === "malem") {
                            clearAllVote(m.chat, ww)
                            addTimer(m.chat, ww)
                            return await run_malam(conn, m.chat, ww)
                        } else if (ww[m.chat].time === "pagi") {
                            clearAllVote(m.chat, ww)
                            addTimer(m.chat, ww)
                            return await run_pagi(conn, m.chat, ww)
                        }
                    }
                    if (ww[m.chat].status === true)
                        return reply("Sesi permainan telah dimulai")
                    if (ww[m.chat].owner !== m.sender)
                        return reply(`Hanya @${ww[m.chat].owner.split`@`[0]} yang dapat memulai permainan`)
                    let list1 = ""
                    let list2 = ""
                    let player = []
                    roleGenerator(m.chat, ww)
                    addTimer(m.chat, ww)
                    startGame(m.chat, ww)
                    for (let i = 0; i < ww[m.chat].player.length; i++) {
                        list1 += `${ww[m.chat].player[i].number}. @${ww[m.chat].player[i].id.replace("@s.whatsapp.net", "")}\n`
                        player.push(ww[m.chat].player[i].id)
                    }
                    for (let i = 0; i < ww[m.chat].player.length; i++) {
                        list2 += `${ww[m.chat].player[i].number}. @${ww[m.chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[m.chat].player[i].role === "werewolf" || ww[m.chat].player[i].role === "sorcerer" ? `[${ww[m.chat].player[i].role}]` : ""}\n`
                        player.push(ww[m.chat].player[i].id)
                    }
                    for (let i = 0; i < ww[m.chat].player.length; i++) {
                    // werewolf
                    if (ww[m.chat].player[i].role === "werewolf") {
                        if (ww[m.chat].player[i].isdead != true) {
                        let text = `Hai ${conn.getName(ww[m.chat].player[i].id)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role("werewolf")} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n\n*List player :*\n${list2}\nKetik *${prefix}wwpc kill nomor* untuk membunuh player`
                        await conn.sendMessage(ww[m.chat].player[i].id, {
                            text,
                            mentions: player,
                        })
                    }

                // villager
                } else if (ww[m.chat].player[i].role === "warga") {
                    if (ww[m.chat].player[i].isdead != true) {
                        let text = `*🐺 - WEREWOLF GAME*\n\nHai ${conn.getName(ww[m.chat].player[i].id)} Peran kamu adalah *Warga Desa* ${emoji_role("warga")}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*List player :*\n${list1}`
                        await conn.sendMessage(ww[m.chat].player[i].id, {
                            text,
                            mentions: player,
                        })
                    }

                // penerawangan
                } else if (ww[m.chat].player[i].role === "seer") {
                    if (ww[m.chat].player[i].isdead != true) {
                        let text = `Hai ${conn.getName(ww[m.chat].player[i].id)} Kamu telah terpilih untuk menjadi *Penerawang* ${emoji_role("seer")}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n\n*List player :*\n${list1}\nKetik *${prefix}wwpc dreamy nomor* untuk melihat role player`
                        await conn.sendMessage(ww[m.chat].player[i].id, {
                            text,
                            mentions: player,
                        })
                    }

               // guardian
               } else if (ww[m.chat].player[i].role === "guardian") {
                    if (ww[m.chat].player[i].isdead != true) {
                        let text = `Hai ${conn.getName(ww[m.chat].player[i].id)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role("guardian")}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*List player :*\n${list1}\nKetik *${prefix}wwpc deff nomor* untuk melindungi player`
                        await conn.sendMessage(ww[m.chat].player[i].id, {
                            text: text,
                            mentions: player,
                        })
                    }

                // [ Sorcerer ]
                } else if (ww[m.chat].player[i].role === "sorcerer") {
                    if (ww[m.chat].player[i].isdead != true) {
                        let text = `Hai ${conn.getName(ww[m.chat].player[i].id)} Kamu terpilih sebagai Penyihir ${emoji_role("sorcerer")}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*List player :*\n${list2}\nKetik *${prefix}wwpc sorcerer nomor* untuk melihat role player`
                        await conn.sendMessage(ww[m.chat].player[i].id, {
                            text,
                            mentions: player,
                        })
                    }
                }
            }
            await reply("*🐺 - WEREWOLF GAME*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu")
            await run(conn, m.chat, ww)
        } else if (value === "vote") {
            if (!ww[m.chat]) 
                return reply("Belum ada sesi permainan")
            if (ww[m.chat].status === false)
                return reply("Sesi permainan belum dimulai")
            if (ww[m.chat].time !== "voting")
                return reply("Sesi voting belum dimulai")
            if (playerOnRoom(m.sender, m.chat, ww) === false)
                return reply("Kamu bukan player")
            if (dataPlayer(m.sender, ww).isdead === true)
                return reply("Kamu sudah mati")
            if (!target || target.length < 1 || target.split('').length > 2)
                return reply("Masukan nomor player")
            if (isNaN(target)) return reply("Gunakan hanya nomor")
            if (dataPlayer(m.sender, ww).isvote === true)
                return reply("Kamu sudah melakukan voting")
            let byId = getPlayerById2(m.sender, parseInt(target), ww)
            if (byId.db.isdead === true) 
                return reply("Player sudah mati")
            if (ww[m.chat].player.length < parseInt(target))
                return reply("Invalid")
            if (getPlayerById(m.chat, m.sender, parseInt(target), ww) === false)
                return reply("Player tidak terdaftar!")
            vote(m.chat, parseInt(target), m.sender, ww)
                return reply("✅ Vote")
        } else if (value == "exit") {
            if (!ww[m.chat]) return reply("Tidak ada sesi permainan")
            if (playerOnRoom(m.sender, m.chat, ww) === false)
                return reply("Kamu tidak dalam sesi permainan")
            if (ww[m.chat].status === true)
                return reply("Permainan sudah dimulai, kamu tidak bisa keluar")
            reply(`@${m.sender.split`@`[0]} Keluar dari permainan`)
            playerExit(m.chat, m.sender, ww)
        } else if (value === "delete") {
            if (!ww[m.chat]) return reply("Tidak ada sesi permainan")
            if (ww[m.chat].owner !== m.sender)
                return reply(`Hanya @${ww[m.chat].owner.split("@")[0]} yang dapat menghapus sesi permainan ini`)
            reply("Sesi permainan berhasil dihapus").then(() => {
                delete ww[m.chat]
            })
        } else if (value === "player") {
            if (!ww[m.chat]) return reply("Tidak ada sesi permainan")
            if (playerOnRoom(m.sender, m.chat, ww) === false)
                return reply("Kamu tidak dalam sesi permainan")
            if (ww[m.chat].player.length === 0)
                return reply("Sesi permainan belum memiliki player")
            let player = []
            let text = "*🐺 - WEREWOLF GAME*\n\n*List player :*\n"
            for (let i = 0; i < ww[m.chat].player.length; i++) {
                text += `(${ww[m.chat].player[i].number}) @${ww[m.chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[m.chat].player[i].isdead === true ? `☠️ ${ww[m.chat].player[i].role}` : "" }\n`
                player.push(ww[m.chat].player[i].id)
            }
            reply(text)
        } else {
            let text = `*🐺 - WEREWOLF GAME*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*❓ - EX COMMAND*\n`
            text += `${prefix}ww create\n`
            text += `${prefix}ww join\n`
            text += `${prefix}ww start\n`
            text += `${prefix}ww exit\n`
            text += `${prefix}ww delete\n`
            text += `${prefix}ww player\n\n`
            text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`.trim()
            reply(text)
        }
            }
            break
            case "wwpc": {
            	if (m.isGroup) return reply(mess.OnlyPM)
                conn.werewolf = conn.werewolf ? conn.werewolf : {}
                let ww = conn.werewolf
                let value = (args[0] || '').toLowerCase()
                let target = args[1]

                if (playerOnGame(m.sender, ww) === false)
                    return reply("Kamu tidak dalam sesi game")
                if (dataPlayer(m.sender, ww).status === true)
                    return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
                if (dataPlayer(m.sender, ww).isdead === true)
                    return reply("Kamu sudah mati")
                if (!target || target.length < 1 || target.split('').length > 2) 
                    return reply(`Masukan nomor player \nContoh : \n${command} kill 1`)
                if (isNaN(target)) 
                    return reply("Gunakan hanya nomor")
                let byId = getPlayerById2(m.sender, parseInt(target), ww)
                if (byId.db.isdead === true) 
                    return reply("Player sudah mati")
                if (byId.db.id === m.sender)
                    return reply("Tidak bisa menggunakan skill untuk diri sendiri")
                if (byId === false) 
                    return reply("Player tidak terdaftar")
                if (value === "kill") {
                    if (dataPlayer(m.sender, ww).role !== "werewolf")
                    return reply("Peran ini bukan untuk kamu")

                if (byId.db.role === "sorcerer") 
                    return reply("Tidak bisa menggunakan skill untuk teman")

                    return reply("Berhasil membunuh player " + parseInt(target)).then(() => {
                        dataPlayer(m.sender, ww).status = true
                        killWerewolf(m.sender, parseInt(target), ww)
                    })
                } else if (value === "dreamy") {
                    if (dataPlayer(m.sender, ww).role !== "seer") 
                        return reply("Peran ini bukan untuk kamu")

                    let dreamy = dreamySeer(m.sender, parseInt(target), ww)
                    return reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`).then(() => {
                        dataPlayer(m.sender, ww).status = true
                    })
                } else if (value === "deff") {
                    if (dataPlayer(m.sender, ww).role !== "guardian") 
                        return reply("Peran ini bukan untuk kamu")

                    return reply(`Berhasil melindungi player ${target}`).then(() => {
                        protectGuardian(m.sender, parseInt(target), ww)
                        dataPlayer(m.sender, ww).status = true
                    })
                } else if (value === "sorcerer") {
                    if (dataPlayer(m.sender, ww).role !== "sorcerer") 
                        return reply("Peran ini bukan untuk kamu")

                    let sorker = sorcerer(m.sender, parseInt(target), ww)
                    return reply(`Berhasil membuka identitas player ${target} adalah ${sorker}`).then(() => {
                        dataPlayer(m.sender, ww).status = true
                    })
                }
            }
            break
        case 'ch': {
            if (!m.isGroup) return
            global.DATABASE.data.game.chess = global.DATABASE.data.game.chess ? global.DATABASE.data.game.chess : {}
            let cs = global.DATABASE.data.game.chess
            // Membuat sesi Chess Game.
            if (args[0] === 'create') {
                if (m.chat in cs) return reply('⚠️ Sesi permainan telah dibuat sebelumnya.')
                cs[m.chat] = {
                    create: m.sender,
                    status: 'waiting',
                    black: null,
                    white: null,
                    fen: null,
                    currentTurn: null,
                    players: [],
                    hasJoined: []
                }
                reply('🎮 Berhasil membuat sesi permainan, menunggu pemain bergabung.')
            // Bergabung dalam Chess Game.
            } else if (args[0] === 'join') {
                if (!cs[m.chat]) return reply('⚠️ Belum ada sesi permainan.')
                if (cs[m.chat].status === 'playing') return reply('⚠️ Sesi permainan sedang berjalan tidak dapat bergabung.')
                if (cs[m.chat].players.length >= 2) return reply('⚠️ Oops! Hanya dapat dimainkan oleh 2 pemain.')
                if (playerOnRooms(m.sender, m.chat, cs) === true) return reply('⚠️ Kamu sudah bergabung.')
                //if (playerOnGame(m.sender, cs) === true) return reply('')
                data = {
                    id: m.sender
                }
                cs[m.chat].players.push(data)
                if (cs[m.chat].players.length === 2) {
                    cs[m.chat].status = 'ready'
                    const [black, white] = Math.random() < 0.5 ? [cs[m.chat].players[1], cs[m.chat].players[0]] : [cs[m.chat].players[0], cs[m.chat].players[1]];
                    cs[m.chat].black = black
                    cs[m.chat].white = white
                    cs[m.chat].currentTurn = white
                    reply(`♛ Chess Game ♛\n\nPemain:\n• Hitam: @${cs[m.chat].black.id.split('@')[0]}\n• Putih: @${cs[m.chat].white.id.split('@')[0]}\n\nPembuat sesi harap memulai permainan dengan printah ${prefix}chess start.`);
                } else {
                    reply(`Bergabung dalam permainan.`)
                }
            // Memulai Chess Game
            } else if (args[0] === 'start') {
                if (!cs[m.chat]) return reply('⚠️ Belum ada sesi permainan.')
                if (cs[m.chat].players.length < 2) return reply('⚠️ Oops! Belum ada pemain.')
                
                //if (playerOnGame(m.sender, cs) === false) return reply('⚠️ Kamu belum bergabung kedalam sesi.')
                if (playerOnRooms(m.sender, m.chat, cs) === true) return reply('⚠️ Kamu belum bergabung dkedalam sesi.')
                cs[m.chat].status = 'playing'
                if (cs[m.chat].players.length === 2) {
                    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
                    cs[m.chat].fen = fen 
                    const encodedFen = cs[m.chat].fen
                    const turn = `♛ Chess Game ♛\n\nGiliran:\n• Putih: @${cs[m.chat].white.id.split('@')[0]}`
                    const flipParam = m.sender === cs[m.chat].black.id ? '' : '&flip=true'
                    const flipParam2 = m.sender === cs[m.chat].black.id  ? '' : '-flip'
                    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
                    try {
                    await conn.sendMessage(m.chat, { image: { url: boardUrl }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    } catch (error) {
                    const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
                    await conn.sendMessage(m.chat, { image: { url: boardUrl2 }, caption: turn, mentions: parseMention(turn) }, { quoted: m })
                    }
                }
            } else {
                reply(`♕ Chess Game ♕

Permainan papan strategi yang dimainkan oleh 2 pemain pada sebuah papan kotak-kotak yang terdiri dari 64 kotak, yang disusun dalam petak 8×8, yang terbagi sama rata dalam kelompok warna putih dan hitam.

Cara penggunaan:
• ${prefix}chess create 
_${blos('membuat sesi permainan.')}_

• ${prefix}chess join
_${blos('bergabung dalam permainan.')}_

• ${prefix}chess start
_${blos('memulai permainan.')}_

• ${prefix}chess delete
_${blos('menghapus sesi permainan.')}_`)
            }
            }
            break
        case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'slap': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'kill': case 'kick': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': {
            if (mentionUser.length !== 0) {
            anu = await get.get(`https://api.waifu.pics/sfw/${command}`).json()
            buff = await getBuffer(anu.url)
            fs.writeFileSync(`./media/hug_${mentionUser[0]}.webp`, buff)
            a = await webp2mp4File(`./media/hug_${mentionUser[0]}.webp`)
            //mp4 = await getBuffer(a.result)
            const capt = `@${m.sender.split("@")[0]} ${command} @${mentionUser[0].split("@s.whatsapp.net")[0]}`
            //conn.sendMessage(m.chat, { video: { url: a.result }, mimetype: 'video/mp4', caption: yt4_teks }, { quoted : m })
            await conn.sendMessage(m.chat, { video: { url: a.result }, gifPlayback: true, caption: capt, mentions: parseMention(capt) }, { quoted: m })
            //await conn.sendVideo(m.chat, a.result, capt, m, true, { mentions: parseMention(capt) })
            //conn.sendMessage(from, mp4, video, { quoted: m, mimetype: Mimetype.gif, gifPlayback: true , caption: capt, contextInfo: { forwardingScore: 999, isForwarded: true, "mentionedJid": [mentionUser[0], sender]}})
            //fs.unlinkSync(`./media/hug_${mentionUser[0]}.webp`)
            } else {
            anuv = await get.get(`https://api.waifu.pics/sfw/${command}`).json()
            buffv = await getBuffer(anuv.url)
            fs.writeFileSync(`./media/hug_${m.sender}.webp`, buffv)
            av = await webp2mp4File(`./media/hug_${m.sender}.webp`)
            //mp4v = await getBuffer(av.result)
            const captz = `@${m.sender.split("@")[0]} ${command} themself`
            await conn.sendMessage(m.chat, { video: { url: av.result }, gifPlayback: true, caption: captz, mentions: parseMention(captz) }, { quoted: m })
            //conn.sendMessage(from, mp4v, video, { quoted: m, mimetype: Mimetype.gif, gifPlayback: true , caption: captz, contextInfo: { forwardingScore: 999, isForwarded: true, "mentionedJid": [sender]}})
            //await conn.sendVideo(m.chat, av.result, captz, m, true, { mentions: parseMention(captz) })
            //fs.unlinkSync(`./media/hug_${m.sender}.webp`)
            }
            }
            break
            default:
                /*if (m.mtype == 'viewOnceMessageV2') {
                    let msg = m.message.viewOnceMessageV2.message
                    console.log(msg)
                    let type = Object.keys(msg)[0]
                    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                    let buffer = Buffer.from([])
                    for await (const chunk of media) {
                        buffer = Buffer.concat([buffer, chunk])
                    }
let teks = `• @${m.sender.split("@")[0]} Terdeteksi mengirim pesan sekali lihat.`

await conn.sendTextWithMentions(m.chat, teks, m)
                    await delay(500)
                    if (/video/.test(type)) {
                    return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                    } else if (/image/.test(type)) {
                    return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                    }
                }*/
                if (isOwner){
                    if (budy.startsWith('=>')) {
                        var konsol = budy.slice(3)
                        Return = (sul) => {
                            var sat = JSON.stringify(sul, null, 2)
                            bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            //console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(m.sender.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                            reply(String(e))
                            }
                        }
                    }

                    if (isOwner){
                        if (budy.startsWith('>>')){
                            //console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                            try {
                                let evaled = await eval(budy.slice(2))
                                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                                reply(`${evaled}`)
                            } catch (err) {
                                reply(`${err}`)
                            }
                        } else if (budy.startsWith('$')){
                            //console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                            exec(budy.slice(2), (err, stdout) => {
                                if (err) return reply(`${err}`)
                                if (stdout) reply(`${stdout}`)
                            }) 
                        }
                    } 
        }
        

    } catch (err) {
        console.log(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.bgRedBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
