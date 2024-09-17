module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "SIDDIK",
	description: "Off",
	commandCategory: "System",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye I love you mwah",event.threadID, () =>process.exit(0))
