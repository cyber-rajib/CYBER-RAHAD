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
  return api.sendMessage(`╭──────────────➣
│𝗠𝗥.🅼🅰🆂🆄🅼 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Trying To Restart...♻️
│━━━━•🔰•━━━━┓
│❖Restarting: in 6's
│
│
│ ╔══╦╦╗─╔╦══╗
│ ║╔╗║║╚╦╝╠║║╝
│ ║╠╣║╚╗║╔╬║║╗
│ ╚╝╚╩═╩═╝╚══╝
│	     Restarted..
│			 🄱🄾🅃
│  Bot by MASUM
│━━━━•♻️•━━━━┛
│𝗠𝗥.🅼🅰🆂🆄🅼 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Successfully Restarted
╰──────────────➣`, threadID, () => process.exit(1));
}
