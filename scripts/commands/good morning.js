module.exports = {
  config:{
  name: "good morning",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "RAHAT", 
  description: "Morning",
  category: "no prefix",
  usages: "good morning",
  cooldowns: 5, 
},

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("Gm")==0 || event.body.indexOf("Mrng")==0 || event.body.indexOf("GM")==0 || event.body.indexOf("gm")==0 || event.body.indexOf("morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("GOOD MORNING")==0 ) { 
    var msg = {
        body: `<3 Morning too Darling ${name} ❤️`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
