module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "SIDDIK",
  description: "Restart the Bot",
  commandCategory: "system",
  usages: "addmin",
  cooldowns: 5
   };
module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`Wait Boss`, threadID, () => process.exit(1));
}
 
