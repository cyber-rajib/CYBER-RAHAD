const fs = require("fs");
module.exports = {
  config:{
  name: "npx36",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx36",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("song")==0 || body.indexOf("Song")==0 || body.indexOf("music")==0 || body.indexOf("Music")==0) {
    var msg = {
        body: "এই মেরা জান আমি সিদ্দিক বট আমার সাথে গানটি SUNO✅✅ আমার মালিক সিদ্দিকে আমি অনেক সম্মান করি!💔😊",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx36.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💏", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
