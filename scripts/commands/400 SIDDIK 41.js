const fs = require("fs");
module.exports = {
  config:{
  name: "npx41",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx41",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("fuck")==0 || body.indexOf("Vuda")==0 || body.indexOf("Magi")==0 || body.indexOf("Fuck")==0) {
    var msg = {
        body: "-উফ আসো🤭 আসো ডুকিয়ে চাপ দেই🥴🤤",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx41.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
