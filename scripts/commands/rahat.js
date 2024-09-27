/**
* @author Khan Rahul RK
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "rahat",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  credits: "RAHAT",
  description: "RAHATVGet Your Life Line🌺",
  category: "rahat",
  usages: "RAHAT 💞",
  dependencies: {
   
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/oNxckLI.jpg",
"https://i.imgur.com/UNc2yYc.jpg",
"https://i.imgur.com/sTcSuOb.jpg",
"https://i.imgur.com/eQMN6OE.jpg",
"https://i.imgur.com/eQMN6OE.jpg",
"",
"",  
""
     ];
     var callback = () => api.sendMessage({body:`হাই মাই নেইম ইজ রাহাত খাঁন আমার প্রোফাইল লিংক`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
