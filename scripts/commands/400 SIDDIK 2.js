const fs = require("fs");
module.exports = {
  config:{
  name: "npxx2",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxx2",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🙄")==0 || body.indexOf("🙄🙄")==0 || body.indexOf("🙄🙄🙄")==0 || body.indexOf("🙄🙄🙄🙄")==0) {
    var msg = {
        body: "•উ্ঁপ্রে্ঁ কি্ঁ দে্ঁখো্ঁ🙄🥀",
	attachment: fs.createReadStream(__dirname + `/Siddik/upray.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌝", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
