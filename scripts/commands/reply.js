const fs = require("fs");
module.exports.config = {
  name: "reply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SIDDIK",
  description: "Respond Okh Bro",
  usePrefix: false,
  prefix:"awto",
  category: "user",
  commandCategory: "no prefix",
  cooldowns: 5,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("magi") || react.includes("bessa") || 
react.includes("খানকি মাগি") || 
react.includes("চুদানি") ||
react.includes("চুদা") ||
react.includes("Vuady") ||
react.includes("ভুদা") || 
react.includes("buda") || 
react.includes("gali") ||
react.includes("galibaz") ||        react.includes("সাওয়া") || 
react.includes("khanki") ||
react.includes("maderxud") ||
react.includes("Tor nanir khali ghor") || 
react.includes("xuda") || 
react.includes("xudi") ||
react.includes("cuda") ||
react.includes("cudi") ||
react.includes("mgi") ||
react.includes("nodi") || 
react.includes("নডি") ||
react.includes("মাগি") ||
react.includes("মাদারচুদ") ||
react.includes("চুদ") ||
react.includes("চুদা") ||
react.includes("চুদি") || 
react.includes("vuday") ||
react.includes("ষুদি") ||
react.includes("bal") ||
react.includes("খাংকির পোলা") ||
react.includes("Abal ") ||
react.includes("খানকি মাগি") || 
react.includes("Saoya") || 
react.includes("Sawya") || 
react.includes("tor mare xudi") || react.includes("vuda") || react.includes("heda") || react.includes("hop")) {
		var msg = {
				body:`╭────────|
╰‣ ❒𝐌𝐄𝐒𝐒𝐄𝐆𝐄:\n╭────────
╰‣ এখানে গালাগালি করলে মুখ   সেলাই কইরা দিমু..!!😾 `, 
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
 
  }
