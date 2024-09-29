const fs = require("fs");
module.exports = {
  config:{
  name: "😥",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "মানুষ দুনিয়ার অতিথি মাত্র",
  category: "no prefix",
  usages: "RAHAT-10",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😥")==0 || body.indexOf("😥😥")==0 || body.indexOf("😥😥😥")==0 || body.indexOf("😥😥😥😥")==0) {
    var msg = {
        body: "─•মানুষ_দুনিয়ার অতিথি মাত্র-😅🩷🪽🩵🪽",
	attachment: fs.createReadStream(__dirname + `/Siddik/siddik-10.mp4`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
