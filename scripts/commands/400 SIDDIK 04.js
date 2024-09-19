const fs = require("fs");
module.exports = {
  config:{
  name: "npx04",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx04",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🍼")==0 || body.indexOf("pompom")==0 || body.indexOf("Pompom dew")==0 || body.indexOf("Pom Pom Khabo")==0) {
    var msg = {
        body: "জা্ঁন্ঁ প্ঁম‌্ঁ'প্ঁম্ঁ খা্ঁবা্ঁ__🤭🤤",
	attachment: fs.createReadStream(__dirname + `/Siddik/pompom.m4a)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
