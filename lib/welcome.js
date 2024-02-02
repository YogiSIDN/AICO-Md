const fs = require('fs')
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./myfunc')
const {
	delay,
	proto,
	jidDecode,
	jidNormalizedUser,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	downloadContentFromMessage,
} = require('@whiskeysockets/baileys')
const moment = require('moment-timezone')

module.exports.aDelete = async (conn, m) => {
	try {
		const dataChat = global.dbc
		const mess = dataChat.find((a) => a.id == m.id);
		const mek = mess.m;
		const participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		//console.log(participant)
		const froms = mek.key.remoteJid;
		await conn.sendMessage(
			froms, {
				text: `• @${mek.sender.split("@")[0]} Terdeteksi menghapus pesan.`,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await conn.copyNForward(froms, mek, true);
  	await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
		}
		}

	} catch (err) {
	  console.log(err)
	}
	}
