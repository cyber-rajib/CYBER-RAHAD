const fs = require("fs");
module.exports = {
  config:{
  name: "npxsm73",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxsm73",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🥀")==0 || body.indexOf("💔")==0 || body.indexOf("😭")==0 || body.indexOf("🌻")==0) {
    var msg = {
        body: "- পাবেন না জেনেও কী তাকে ভালোবাসেন  💔",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs73.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
                                  }
