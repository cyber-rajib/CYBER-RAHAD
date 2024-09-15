module.exports.config = {
	name: "owner",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "SIDDIK BOT INFORMATION",
  prefix: true, 
  category: "user", 
  usages: "owner",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/XcwnWJE.jpeg", 
 
            "https://i.imgur.com/XcwnWJE.jpeg", 
 
"https://i.imgur.com/XcwnWJE.jpeg",
 
            "https://i.imgur.com/XcwnWJE.jpeg"];
 
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : SIDDIK KHAN\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :SK SIDDIK KHAN\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (Naogaon)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :Bishnupur, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (19+)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : ❌\n𝗚𝗺𝗮𝗶𝗹        :  sk@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801831773***\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : @rdxprem12\n𝗙𝗯 𝗹𝗶𝗻𝗸   :https://www.facebook.com/rxsiddik1
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
 
