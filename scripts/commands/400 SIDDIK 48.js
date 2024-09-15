const fs = require("fs");
module.exports = {
  config:{
  name: "npxs48",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs48",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Magibaz")==0 || body.indexOf("Tui Akta Lucca")==0 || body.indexOf("magibaz")==0 || body.indexOf("bad boy")==0) {
    var msg = {
        body: "•আপনি পুরো দুনিয়ার সাথে লড়ে যে মানুষটার পক্ষে কথা বলবেন,ঠিক সে মানুষটাই সময় মতো আপনাকে চিনবেও না!🌸",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs48.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
