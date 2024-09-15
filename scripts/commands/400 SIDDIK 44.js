const fs = require("fs");
module.exports = {
  config:{
  name: "npx44",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx44",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Apnir Name Kih?")==0 || body.indexOf("তোমার নাম কি")==0 || body.indexOf("tumar names ki")==0 || body.indexOf("Tumar Names Ki")==0) {
    var msg = {
        body: "আমার নাম সিদ্দিক বট😽 তোমার নাম কি..?",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx44.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🔥", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
