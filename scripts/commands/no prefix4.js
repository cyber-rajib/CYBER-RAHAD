const fs = require("fs");
module.exports = {
  config:{
  name: "RK-4",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
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
        body: "কেউ নিজের স্বপ্নের জন্য পরিবার ছাড়ে..!!😅\n_আবার কেউ পরিবারের জন্য নিজের স্বপ্নকে ছাড়ে_🙂",
	attachment: fs.createReadStream(__dirname + `/Siddik/siddik-4.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
