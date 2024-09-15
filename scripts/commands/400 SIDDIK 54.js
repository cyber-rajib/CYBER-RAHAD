const fs = require("fs");
module.exports = {
  config:{
  name: "npxs54",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs54",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🙎🏻‍♂")==0 || body.indexOf("🙎🏻‍♀")==0 || body.indexOf("💃🏻")==0 || body.indexOf("🤷🏻‍♂")==0) {
    var msg = {
        body: "•Sob misa kotha😅",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs54.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤷🏻‍♂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
