module.exports.config = {
  name: "bye",
  version: "1.0.1",
  prefix: true,
  permssion: 0,
  credits: "RAHAT", 
  description: "No Prefix",
  category: "bye",
  usages: "bye",
  cooldowns: 1, 
},

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("maya nalang")==0 || (event.body.indexOf("by")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "take your time."
			}
			api.sendMessage(msg, threadID, messageID);
setTimeout(() => {
api.sendMessage({sticker: "162332973951561"}, threadID, messageID)
}, 3)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
