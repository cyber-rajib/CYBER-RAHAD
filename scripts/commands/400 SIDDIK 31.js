const fs = require("fs");
module.exports = {
  config:{
  name: "npxs31",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "SIDDIK", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npxs31",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("LOVE")==0 || body.indexOf("love")==0 || body.indexOf("Love")==0 || body.indexOf("Valobashi")==0) {
    var msg = {
        body: "- তুমি না বাসলে কি হবে আমি তো বাসি..!🙂💔",
	attachment: fs.createReadStream(__dirname + `/Siddik/npxs31.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
