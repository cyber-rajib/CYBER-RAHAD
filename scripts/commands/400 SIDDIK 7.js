const fs = require("fs");
module.exports = {
  config:{
  name: "siddik-7",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "siddik-7",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😽")==0 || body.indexOf("😽😽")==0 || body.indexOf("😽😽😽")==0 || body.indexOf("😽😽😽😽")==0) {
    var msg = {
        body: "╭─────•◈•─────╮\n         🅂🄸🄳🄳🄸🄺🄱🄾🅃       \n\n—💙🌻জোর করে রেখে দেওয়া'র মতো একজন মানুষ আমার হোক! যে ঝগড়া রাগ অভিমান শেষে বল'বে তুমি শুধু আমার😽💙\n\n         𝗦𝗞.𝗦𝗜𝗗𝗗𝗜𝗞.𝗞𝗛𝗔𝗡       \n╰─────•◈•─────╯",
	attachment: fs.createReadStream(__dirname + `/Siddik/siddik-7.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
