module.exports.config = {
	name: "sing",
  version: "2.1.0",
  permission: 0,
  credits: "SIDDIK",
  description: "Download audio from YouTube",
  prefix: true, 
  category: "media", 
  usages: "{pn} [<song name>|<song link>]:"+ "\n   Example:"+"\n{pn} chipi chipi chapa chapa",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

onStart: async ({ api, event }) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    const ytdl = require("ytdl-core");
    const request = require("request");
    const yts = require("yt-search");
 
    const input = event.body;
    const text = input.substring(12);
    const data = input.split(" ");
 
    data.shift();
    const musicName = data.join(" ");
 
    try {
      api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
 
      const searchResults = await yts(musicName);
      if (!searchResults.videos.length) {
        return api.sendMessage("🙂💔", event.threadID, event.messageID);
      }
 
      const music = searchResults.videos[0];
      const musicUrl = music.url;
 
      const stream = ytdl(musicUrl, { filter: "audioonly" });
 
      const fileName = `${event.senderID}.mp3`;
      const filePath = __dirname + `/cache/${fileName}`;
 
      stream.pipe(fs.createWriteStream(filePath));
 
      stream.on('response', () => {
        console.info('[DOWNLOADER]', 'Starting download now!');
      });
 
      stream.on('info', (info) => {
        console.info('[DOWNLOADER]', `Downloading music: ${info.videoDetails.title}`);
      });
 
      stream.on('end', () => {
        console.info('[DOWNLOADER] Downloaded');
 
        if (fs.statSync(filePath).size > 10485760004) {
          fs.unlinkSync(filePath);
          api.setMessageReaction('💔', event.messageID, (err) => {}, true);
 
          return api.sendMessage('🙂💔', event.threadID);
        }
 
        const message = {
          body: `Here's your song`,
          attachment: fs.createReadStream(filePath)
        };
        api.setMessageReaction('✅', event.messageID, (err) => {}, true);
        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
        });
      });
    } catch (error) {
      api.setMessageReaction("🙂", event.messageID, (err) => {}, true);
      console.error('[ERROR]', error);
      api.sendMessage('🙂💔', event.threadID);
    }
  }
};
