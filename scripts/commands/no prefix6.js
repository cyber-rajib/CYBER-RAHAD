const fs = require("fs");
module.exports = {
  config:{
  name: "npxs50",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs50",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Dokha")==0 || body.indexOf("song")==0 || body.indexOf("ছলনাময়ী")==0 || body.indexOf("বেইমান")==0) {
    var msg = {
        body: "•এটা আমাদের মানতেই হবে🙂 একটা নারী কখনো এক পুরুষের প্রশংসায় সন্তুষ্ট থাকে না 😴🥀",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs50.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
