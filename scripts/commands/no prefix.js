const fs = require("fs");
module.exports = {
  config:{
  name: "npx35",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "hihihihi",
  category: "no prefix",
  usages: "npx35",
  cooldowns: 5, 
},
 
handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("hate you")==0 || body.indexOf("Hate You")==0 || body.indexOf("Hate you")==0 || body.indexOf("Ginna kori")==0) {
    var msg = {
        body: "সত্যিকারের ভালোবাসা গুলো কখনোই সঠিক মর্যাদা পাইনা আমার মালিক Khan Rahul RK কে আমি অনেক সম্মান করি!💔😊",
	attachment: fs.createReadStream(__dirname + `/Siddik/npx35.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
    }
  },
  start: function({ siddik }) {
 
  }
}
