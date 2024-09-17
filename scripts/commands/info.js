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
 
var callback = () => api.sendMessage({body:`✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨
 
╭────────
╰‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ━━[𝗦𝗜𝗗𝗗𝗜𝗞 𝗕𝗢𝗧]━━➣
 
╭────────
╰‣ 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐒𝐤 𝐒𝐢𝐝𝐝𝐢𝐤 𝐊𝐡𝐚𝐧
 
╭────────
╰‣ 𝐂𝐨𝐧𝐜𝐚𝐭𝐞𝐭

╭────────
╰‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : m.me/TERA.PAPPA.IS.BUSY
 
╭────────
╰‣ 𝐓𝐠  : t.me/@rdxprem12
 
╭────────
╰‣ ✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨
 
╭────────
╰‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ━[𝗦𝗜𝗗𝗗𝗜𝗞 𝗕𝗢𝗧]━➣
 
╭────────
╰‣ 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX} 
 
╭────────
╰‣ 𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds} 
 
╭────────
╰‣ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  \n ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/siddik.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/siddik.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/siddik.jpg")).on("close",() => callback());
   };
 
