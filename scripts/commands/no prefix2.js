const fs = require("fs");
module.exports.config = {
  name: "npxs29",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs29",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("miss you")==0 || body.indexOf("Miss You")==0 || body.indexOf("MISS YOU")==0 || body.indexOf("Siddik")==0) {
    var msg = {
        body: "-/❤️লাইনটা শুধু মাত্র জারা প্রিয় মানুষ হারাইছে তাদের জন্য💔🥺",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs29.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
