module.exports.config = {
  name: "info",
  version: "1.0.1", 
  permssion: 0,
  credits: "SIDDIK",
  prefix:true,
  description: "Admin and Bot info.",
  category: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/5BPiJjA.jpeg",
 
            "https://i.imgur.com/sDPReLk.jpeg",
 
            "https://i.imgur.com/mn5oq9L.jpeg",
 
            "https://i.imgur.com/9cXJ9h7.jpeg"];
 
var callback = () => api.sendMessage({body:`===「 Bot & Owner Info 」===
❏ Bot Name: ${global.config.BOTNAME}
❏ Bot Prefix: ${global.config.PREFIX}
❏ Author Name: SIDDIK-KHAN
❏ FB: SK-SIDDIK-KHAN
❏ 2nd FB: TANJID HASAN TAMIM
❏ Author Email: siddik4x9@gmail.com
❏ Author Github: SK-SIDDIK-143
❏ Statues : Single
❏ Bot Running: ${hours}:${minutes}:${seconds} 
❏ Thanks For Using: SK SIDDIK BOT 🥀
===================== \n\n${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/siddik.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/siddik.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/siddik.jpg")).on("close",() => callback());
   };
 
