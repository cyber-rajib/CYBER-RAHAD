module.exports.config = {
  name: "tg",
  version: "1.1.1",
  permssion: 0,
  credits: "SIDDIK",
  prefix:true,
  description: "create tg link",
  category: "Tg",
  usages: "[whats up number]",
  cooldowns: 5
};
 
module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
  if (!say) api.sendMessage("Please enter a wp number", event.threadID, event.messageID)
  else api.sendMessage(`t.me/@rdxprem12${say}`, event.threadID, event.messageID);
}
 
