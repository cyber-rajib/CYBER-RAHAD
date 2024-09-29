const fs = require("fs");
module.exports = {
  config:{
  name: "npxsm74",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxsm74",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("💝")==0 || body.indexOf("🍫")==0 || body.indexOf("💞")==0 || body.indexOf("💟")==0) {
    var msg = {
        body: "- জমে থাকা অভিমান ছাই হয় এস্ট্রেতে আমিও প্রেমিক ছিলাম কোন এক পৃষ্ঠাতে💔",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs74.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍒", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
