const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
name: "prefix7",
version: "1.0.0",
permission: 0,
credits: "nazrul",
prefix: true,
description: "guide",
category: "system",
usages: "",
cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
   // const GP = "•┄┅════❁🌺❁════┅┄•\n${GP}\n•┄┅════❁🌺❁════┅┄•\n\n"; 
// ===== 𝐒𝐈𝐃𝐃𝐈𝐊 𝐁𝐎𝐓 ====="
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—\n𝐍𝐀𝐌𝐄➢𝐒𝐈𝐃𝐃𝐈𝐊 𝐁𝐎𝐓\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 ➢ ｢ ${global.config.PREFIX} ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃➢ ｢ ${client.commands.size} ｣\n𝐓𝐈𝐌𝐄 ➢${time}\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄\n${diptoName}\n𝐎𝐖𝐍𝐄𝐑➢ 𝐒𝐈𝐃𝐃𝐈𝐊\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐒𝐢𝐝𝐝𝐢𝐤 𝐁𝐨𝐭`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.postimg.cc/Kvc0WxT1/FB-IMG-17130017232311130.jpg","https://i.postimg.cc/cLnkRTYh/1697029960036.jpg"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/Shaon${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}
