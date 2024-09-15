const fs = require("fs");
module.exports = {
  config:{
  name: "npxs22",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs22",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("SK SIDDIK")==0 || body.indexOf("Sk Siddik")==0 || body.indexOf("sk")==0 || body.indexOf("SK")==0) {
    var msg = {
        body: "-Hello আমি সিদ্দিক বট বলতেছি✅ আমার সিদ্দিক বস তোমার জন্য গানটি আমার ডাটাবেজই রাখছেন Play Voice Message Thank you",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs22.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☺️", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
