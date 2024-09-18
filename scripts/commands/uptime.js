module.exports.config = {
	name: "up",
	version: "0.0.2",
	permission: 0,
        prefix: true,
	credits: "SIDDIK",
	description: "uptime",
	category: "admin",
	usages: "",
    cooldowns: 5,
 
};

onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours} hours ${minutes} minutes ${seconds} second`;
    api.sendMessage(`Hello Master, the bot has been running for ${uptimeString}.`, event.threadID);
  }
};
