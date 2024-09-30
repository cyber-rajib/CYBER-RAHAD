const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
  name: "edit",
  version: "1.0",
  credits: "𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵",
  permssion: 2,
  prefix: true,
  description: "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝗜𝗺𝗮𝗴𝗲𝘀 𝗯𝘆 𝗗𝗮𝗹𝗹𝗲- 𝗔𝗜",
  category: "𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written 𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵 and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
},

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written 𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵 and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const w = await api.sendMessage("𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙞𝙩𝙝𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞", event.threadID);

const response = await axios.get(`https://www.noobs-api.000.pe/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=1kbBnSXuYX4wUmbsffOeinDFhmu4fPrE_JU_vF8c5h6dzQDUDOLsMzY5ZUG19B1pwHbSoQTQOBIchVTxffBlfP_WF5iDq30jjagUnxLNrWQzpFidW3Yqmo7uPY-bmSKk-GrZfAB7REZz-hvXQPgKEJfS4zo3zh52-yPlAn_a-7UGxf2XITeYov07E2ZkDbKGnMIWUz1_KvT1OxLpoW4YHHg`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dalle', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `𝙨𝙪𝙘𝙚𝙨𝙨𝙛𝙪𝙡 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
