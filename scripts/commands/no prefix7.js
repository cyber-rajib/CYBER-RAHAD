const fs = require("fs");
module.exports = {
  config:{
  name: "npxs52",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs52",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Depression")==0 || body.indexOf("Broken")==0 || body.indexOf("🙏🏻")==0 || body.indexOf("Broken Heart")==0) {
    var msg = {
        body: "•Depression kaw k vlo thakte dea na💔",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs52.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
