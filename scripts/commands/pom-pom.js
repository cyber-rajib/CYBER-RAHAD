module.exports.config = {
  name: "pom pom",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "SIDDIK",
  description: "POM POM PIC",
  commandCategory: "Random inmage",
  usages: "pompom",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
 
module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/2PBlIqx.jpg",
    "https://i.imgur.com/Hn99iMk.jpg",
    "https://i.imgur.com/uqof6q8.jpg",
    "https://i.imgur.com/P8uEII1.jpg",
    "https://i.imgur.com/7cnkEjt.jpg",
    "https://i.imgur.com/dyEJCPi.jpg",
    "https://i.imgur.com/mtlrGjB.jpg",
    "https://i.imgur.com/pZ4e3l0.jpg",
    "https://i.imgur.com/3Mp9raS.jpg",
    "https://i.imgur.com/HSJou64.jpg",
    "https://i.imgur.com/gayXMpV.jpg",
    "https://i.imgur.com/O9GX4x8.jpg",
    "https://i.imgur.com/gI1LHzO.jpg",
    "https://i.imgur.com/BJrD55i.jpg",
    "https://i.imgur.com/DAhngNI.jpg",
    "https://i.imgur.com/3R5SR2O.jpg",
    "https://i.imgur.com/aUnN5sh.jpg",
    "https://i.imgur.com/X0zi59l.jpg",
    "https://i.imgur.com/X0zi59l.jpg",
    "https://i.imgur.com/eCISkgP.jpg",
    "https://i.imgur.com/nNtpTrj.jpg",
    "https://i.imgur.com/nNtpTrj.jpg",
    "https://i.imgur.com/1bd2ydZ.jpg",
    "https://i.imgur.com/Tk820OB.jpg",
    "https://i.imgur.com/0tYeu8n.jpg",
    "https://i.imgur.com/2R9OJHL.jpg",
    "https://i.imgur.com/5JHrstZ.jpg",
    "https://i.imgur.com/BrvhzSK.jpg",
    "https://i.imgur.com/j5oK4Mu.jpg",
    "https://i.imgur.com/H1JcQQQ.jpg",
    "https://i.imgur.com/2vq9lXD.jpg",
    "https://i.imgur.com/EhMNnYG.jpg",
    "https://i.imgur.com/il2UjnC.jpg",
  ];
  var callback = () => api.sendMessage({ body: `পম পম সাইজ বলে দিও তোমরা 🙈😹`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};
