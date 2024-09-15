const fs = require("fs");
module.exports = {
  config:{
  name: "npx27",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx27",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("assalamu walaikum")==0 || body.indexOf("Assalamu Walaikum")==0 || body.indexOf("আসলামু ওয়ালাইকুম")==0 || body.indexOf("আসসালামু ওয়ালাইকুম রাহমাতুল্লাহি ওয়াবারকাতুহু")==0) {
    var msg = {
        body: "WalaikumSalam. I Am Messenger Siddik BOT🙋‍♂️🥀",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx27.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
