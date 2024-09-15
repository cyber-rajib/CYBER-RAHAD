const fs = require("fs");
module.exports = {
  config:{
  name: "npxs21",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs21",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😳")==0 || body.indexOf("🤯")==0 || body.indexOf("🥶")==0 || body.indexOf("😨")==0) {
    var msg = {
        body: "কি গো চমকে গেলে নাকি আমাকে দেখে🫢😹 যাবাই তো আমি মানেই আতঙ্ক🐸",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs21.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
