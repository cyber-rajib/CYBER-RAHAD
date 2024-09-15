const fs = require("fs");
module.exports = {
  config:{
  name: "npxs9",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs9",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("👋")==0 || body.indexOf("🎸")==0 || body.indexOf("Hat Marvo")==0 || body.indexOf("hat marbo")==0) {
    var msg = {
        body: "আহা সোনা গো আমার তোমার কি ক্যালসিয়ামের অভাব হাত মারা বাদ দিয়ে বিয়ে করে ফেলো😹",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs9.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😷", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
