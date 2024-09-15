const axios = require("axios");
const fs = require("fs");
const request = require("request");
 
const link = [
  "https://i.imgur.com/gsTkRVN.mp4",
 
];
 
module.exports.config = {
  name: "🖕",
  version: "1.0.0",
  hasPermssion:"0",
  credits: "SIDDIK",
  description: "আঙ্গুল তোমার হেডা দিয়ে ভরে দিবো",
  commandCategory: "Hình ảnh",
  usages: "🖕",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("🖕")) {
    const rahad = [
      "আঙ্গুল্ঁ দে্ঁখা্ঁও্ঁ\n\আঙ্গুল্ঁ তো্ঁমার্ঁ\n\হে্ঁডা্ঁ দি্ঁয়ে্ঁ ভ্ঁরে্ঁ দি্বো্ঁ",
      "আঙ্গুল্ঁ দে্ঁখা্ঁও্ঁ\n\আঙ্গুল্ঁ তো্ঁমার্ঁ\n\হে্ঁডা্ঁ দি্ঁয়ে্ঁ ভ্ঁরে্ঁ দি্বো্ঁ",
 
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];
 
    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp3")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp3"), event.messageID);
 
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp3")).on("close", () => callback());
    return requestStream;
  }
};
 
module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};
 
module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🖕"] === "undefined" || data["🖕"]) data["🖕"] = false;
  else data["🖕"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🖕"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
 
