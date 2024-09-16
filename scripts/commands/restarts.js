module.exports.config = {
  name: "restart",
  version: "7.0.0",
  permission: 2,
  credits: "SIDDIK",
  prefix: false,
  description: "restart bot system",
  category: "admin",
  usages: "restart",
  cooldowns: 5,
  dependencies: {
    "process": ""
  }
};
 
module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`╭────────────➣
│𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞 𝗦𝗘𝗥𝗩𝗘𝗥𝗦 𝗜𝗦 │
│Trying To Restart...♻️│
│━━━━•🔰•━━━━┓│
│❖Restarting: in 6's❖│
│
│
│ ╔══╦╦╗─╔╦══╗│
│ ║╔╗║║╚╦╝╠║║╝│
│ ║╠╣║╚╗║╔╬║║╗│
│ ╚╝╚╩═╩═╝╚══╝│
│	     Restarted..│
│			 🄱🄾🅃│
│  BOT BY SIDDIK│
│━━━━•♻️•━━━━┛│
│𝗦𝗞 𝗦𝗜𝗗𝗗𝗜𝗞 𝗦𝗘𝗥𝗩𝗘𝗥𝗦 𝗜𝗦│
│Successfully Restarted│
╰────────────➣`, threadID, () => process.exit(1));
}
