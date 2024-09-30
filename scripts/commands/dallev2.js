const axios = require('axios');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 
module.exports = {
  config: {
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
  run: async({ api, event, args }) => {
    const prompt = (event.messageReply?.body.split("dalle")[1] || args.join(" ")).trim();
    if (!prompt) return api.sendMessage("❌| Wrong Format. ✅ | Use: 17/18 years old boy/girl watching football match on TV with '𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵' and '69' written on the back of their dress, 4k", event.threadID, event.messageID);
    try {
       //const cookies = "cookies here (_U value)";
const cookies = ["1kbBnSXuYX4wUmbsffOeinDFhmu4fPrE_JU_vF8c5h6dzQDUDOLsMzY5ZUG19B1pwHbSoQTQOBIchVTxffBlfP_WF5iDq30jjagUnxLNrWQzpFidW3Yqmo7uPY-bmSKk-GrZfAB7REZz-hvXQPgKEJfS4zo3zh52-yPlAn_a-7UGxf2XITeYov07E2ZkDbKGnMIWUz1_KvT1OxLpoW4YHHg"];
const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];
      const wait = api.sendMessage("𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙞𝙩𝙝𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞", event.threadID);
      const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookies=${randomCookie}`);
const imageUrls = response.data.imgUrls || [];
      if (!imageUrls.length) return api.sendMessage("Empty response or no images generated.", event.threadID, event.messageID);
      const images = await Promise.all(imageUrls.map(url => axios.get(url, { responseType: 'stream' }).then(res => res.data)));
    api.unsendMessage(wait.messageID);
   api.sendMessage({ body: `𝙨𝙪𝙘𝙚𝙨𝙨𝙛𝙪𝙡 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞`, attachment: images }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage(`Generation failed!\nError: ${error.message}`, event.threadID, event.messageID);
    }
  }
}
