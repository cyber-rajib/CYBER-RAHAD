const fs = require("fs");
module.exports = {
  config:{
  name: "siddik-4",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "siddik-4",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🤗")==0 || body.indexOf("🤗🤗")==0 || body.indexOf("🤗🤗🤗")==0 || body.indexOf("🤗🤗🤗🤗")==0) {
    var msg = {
        body: "╭─────•◈•─────╮\n         🅂🄸🄳🄳🄸🄺🄱🄾🅃       \n\n~ কেউ নিজের স্বপ্নের জন্য পরিবার ছাড়ে..!!😅\n_আবার কেউ পরিবারের জন্য নিজের স্বপ্নকে ছাড়ে_🙂\n\n         𝗦𝗞.𝗦𝗜𝗗𝗗𝗜𝗞.𝗞𝗛𝗔𝗡       \n╰─────•◈•─────╯",
	attachment: fs.createReadStream(__dirname + `/Siddik/siddik-4.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
