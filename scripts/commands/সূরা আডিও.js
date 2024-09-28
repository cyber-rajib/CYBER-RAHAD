module.exports.config = {
  name: "sura",
  version: "1.0.0",
  permission: 0,
  credits: "RAHAT",
  description: "সূরা অডিও",
  prefix: true, 
  category: "user", 
  usages: "sura",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["সূরা💞"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/uc?id=1Ml6znasS_cajYJVS8OJ19DQO6aaLzWkc",

"https://drive.google.com/uc?id=1NKyRitWSGriX3TG23YTLj0tgfySwn6Q-",

"https://drive.google.com/uc?id=1N-sbqx4LjEc-OOEa0MXhM2crzyvn3ynj",

"https://drive.google.com/uc?id=1N9AzB4zAWlz2bG3UesZ7GawyJykRO79s",

"https://drive.google.com/uc?id=1MrLaZG9NyfSDLjZvCRK69L0nnepV6R7U",

"https://drive.google.com/uc?id=1N7W-i_Xr3lxM0cvv4dQlGUvsFGoyHnIl",

"https://drive.google.com/uc?id=1Mn8JXddjoYKHkNcgAdnw8dnwhr2Ems6s",

"https://drive.google.com/uc?id=1NLbrtpig80X1_NTlRHmeKG7ZQPtTmdTJ",

"https://drive.google.com/uc?id=1NFnzqXl8aC_9tpngoKcfeWEyyT3DNdGW",

"https://drive.google.com/uc?id=1NAkALvze0fkzkRvzDSTQvt-nqCIqqQBv",

"https://drive.google.com/uc?id=1NFrEbcdP3CnZ1ZB1KKDCDa6gpV5x4W4t",

"https://drive.google.com/uc?id=1MpowaaCScbWY-vEGtfLX5xPzKCQineHl"];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/26.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/26.mp3"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/26.mp3")).on("close",() => callback());
   };
 
 
