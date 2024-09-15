module.exports.config = {
  name: "info",
  version: "1.0.1", 
  permssion: 0,
  premium: false,
  prefix: true,
  credits: "Joshua Sy", //don't change the credits please
  description: "ALVI and Bot info .",
  category: "info",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/1RVNrq7Z/Messenger-creation-15dbf147-078e-4693-8bf0-56b7df6f9f40.jpg", 
            
            "https://i.postimg.cc/cJzJzDjW/Screenshot-20230730-182443.jpg", 
            
            "https://i.postimg.cc/N0yxZjDz/Screenshot-20230730-191933.jpg",

"https://drive.google.com/file/d/1MDOH_ACDB7JFaLGTcHie99zN1ppJ-8RL/view?usp=drivesdk",
            
            ""];
  
var callback = () => api.sendMessage({body:`🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ${global.config.BOTNAME}

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉 মাসুম আহমেদ 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱

⊱ ༅༎😽💚༅༎


༎হেডা༅༎ভরা༅༎কারেন্ট༅༎নিয়া༅༎আমার༅༎সাথে ༅



༎পিরিত༅༎করতে༅༎আইসো༅༎না༅༎প্রিয়༅༎





⊱🤤


🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 : ঢাকা, বাংলাদেশ

_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❶)💥 : https://www.facebook.com/Ahamed Masum

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❷)💥 : https://www.facebook.com/profile.php?id=100078624862893&mibextid=ZbWKwL

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️ : {🌻Ahamed Masum} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍  

♻️➟ 𝐔𝐏𝐓𝐈𝐌𝐄 ♻️

🔰𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄🔰 : ${juswa} 

🐰🍒𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆🍒🐰 ${hours}:${minutes}:${seconds}.

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ${global.config.BOTNAME} 『😽🖤🌺』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
