const fs = require("fs");
module.exports = {
  config:{
  name: "npxs17",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs17",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😈")==0 || body.indexOf("🤬")==0 || body.indexOf("😡")==0 || body.indexOf("👊")==0) {
    var msg = {
        body: "রেগে গেলা তো হেরে গেলা কন্টোল করতে শেখো প্রিয়😚🖤-!",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs17.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😚", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
