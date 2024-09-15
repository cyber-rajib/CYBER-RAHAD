module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	permssion: 0,
  premium: false,
  prefix: true,
	credits: "ALVI",
	description: "Admin info",
	category: "...",
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
var link =[ "https://i.postimg.cc/1RVNrq7Z/Messenger-creation-15dbf147-078e-4693-8bf0-56b7df6f9f40.jpg", 
            
            "https://i.postimg.cc/1RVNrq7Z/Messenger-creation-15dbf147-078e-4693-8bf0-56b7df6f9f40.jpg", 
            
"https://https://i.postimg.cc/1RVNrq7Z/Messenger-creation-15dbf147-078e-4693-8bf0-56b7df6f9f40.jpg",
            
            "https://drive.google.com/file/d/1MDOH_ACDB7JFaLGTcHie99zN1ppJ-8RL/view?usp=drivesdk" ];
  
var callback = () => api.sendMessage({body:`🌻-𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥-🌻\n
------------------------------------------------\n🌺-𝗡𝗮𝗺𝗲-🌺       : MASUM\n🍁-𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-🍁 : Hm Masum Ahamed\n💚-𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻-💚    : (𝗜𝘀𝗹𝗮𝗺)\n🌸-𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌸 : (𝗗𝗵𝗮𝗸𝗮)\n🌿-𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌿 :(𝗗𝗵𝗮𝗸𝗮)\n🔥-𝗚𝗲𝗻𝗱𝗲𝗿-🔥     : (𝗠𝗮𝗹𝗲)\n♻️-𝗔𝗴𝗲-♻️            :  N/A\n🔰-𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽-🔰 : (SINGEL)\n✴️-𝗪𝗼𝗿𝗸-✴️         : JOB\n📩-𝗚𝗺𝗮𝗶𝗹-📩        :  ahamedmdmasum03@gmail.com\n❇️-𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽-❇️ :  wa.me/×\n♀️-𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺-♀️  : t.me/চালাই না🥱\n-🌼𝗙𝗯 𝗹𝗶𝗻𝗸-🌼   : https://www.facebook.com/profile.php?id=100078624862893&mibextid=ZbWKwL
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
