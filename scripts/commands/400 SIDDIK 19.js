const fs = require("fs");
module.exports = {
  config:{
  name: "npxs19",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs19",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("good night")==0 || body.indexOf("Good Night")==0 || body.indexOf("🥱")==0 || body.indexOf("gd n8")==0) {
    var msg = {
        body: "আহা সোনা গো আমার তোমার জন্য খুবই কষ্ট হচ্ছে।😭কারন মেয়ে হলে তুমি আমার বউ। ছেলে হলে তোমার বউ বিয়ের রাতে আমার সাথে পালাবে😹🐸",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs19.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
