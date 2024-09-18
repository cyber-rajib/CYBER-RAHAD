/**
* @Sk Siddik Khan
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "addmin",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "BOT ADDMIN INFORMATION",
  prefix: true, 
  category: "Random-IMG", 
  usages: "user",
  cooldowns: 5,
  dependencies: {
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`╭─────────────|
╰‣ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡
╭─────────────|
╰‣ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 : 𝗦𝗞-𝗦𝗜𝗗𝗗𝗜𝗞
╭─────────────|
╰‣ 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝗡𝗔𝗢𝗚𝗔𝗢𝗡
╭─────────────|
╰‣ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧
╭─────────────|
╰‣ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/rxsiddik1
╭─────────────|
╰‣ 𝗧𝗔𝙇𝗘𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞:t.me/rdxprem12
╭─────────────|
╰‣ 𝗕𝗢𝗧 𝗪𝗢𝗡𝗘𝗥: 𝗦𝗜𝗗𝗗𝗜𝗞 
╭─────────────|
╰‣ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/TERA.PAPPA.IS.BUSY`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100005002412625/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
 
