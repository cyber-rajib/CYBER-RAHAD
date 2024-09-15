const fs = require("fs");
module.exports = {
  config:{
  name: "npxs23",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs23",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Good Morning")==0 || body.indexOf("good morning")==0 || body.indexOf("Gd M9")==0 || body.indexOf("gd m9")==0) {
    var msg = {
        body: "-আসসালামু আলাইকুম🥰 শুভ সকাল💚আমি সিদ্দিক বট বলতাছি।  আপনি কেমন আছেন?😍",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs23.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
