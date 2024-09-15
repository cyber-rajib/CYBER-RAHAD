const fs = require("fs");
module.exports = {
  config:{
  name: "npxx31",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxx31",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Suno")==0 || body.indexOf("oi")==0 || body.indexOf("Oi")==0 || body.indexOf("Oy")==0) {
    var msg = {
        body: "আমি Messenger সিদ্দিক বট কচি কচি মেয়ে রা মেসেজ দিলে আমার নাম্বার চলে আসবে ইউজ দ্যা ইমোজি 💕 💝 💙😚",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxx31.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
