const fs = require("fs");
module.exports = {
  config:{
  name: "npx39",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx39",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("ছেকা")==0 || body.indexOf("Ami Chai Na")==0 || body.indexOf("Lagbe na tumake amar")==0 || body.indexOf("Family Manbe Na")==0) {
    var msg = {
        body: "•এমনো হাজার ও ভালোবাসা হেরে জাই 💔😊",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx39.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
