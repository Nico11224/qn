/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../control');
const {MessageType,Mimetype} = require('queen-natsumi-web-api');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Build = require('../build');

const Language = require('../language');
const Lang = Language.getString('conventer');

if (Build.WORKTYPE == 'private') {

    Asena.addCommand({Pnatsumi: 'tblend ?(.*)', fromMe: true, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Dodge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Or TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Multiply TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Grainmerge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - And TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Burn TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Difference TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Grainextract TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Divide TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Xor TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Hardmix TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Negation TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
}
else if (Build.WORKTYPE == 'public') {

    Asena.addCommand({Pnatsumi: 'tblend ?(.*)', fromMe: false, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Dodge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Or TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Multiply TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Grainmerge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - And TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Burn TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Difference TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Grainextract TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Divide TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Xor TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Hardmix TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by QueenNatsumi - Negation TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
}