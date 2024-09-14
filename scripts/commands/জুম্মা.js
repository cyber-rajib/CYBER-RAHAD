module.exports.config = {
	name: "জুম্মা",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Jummah Info 🖤",
  prefix: true, 
  category: "user", 
  usages: "",
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
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/bd9C0lj.jpg",
            "https://i.imgur.com/SA7gxQ4.jpg",
            "https://i.imgur.com/bd9C0lj.jpg",
            "https://i.imgur.com/SA7gxQ4.jpg",
            
"https://i.postimg.cc/VkPnqxr6/received-470087989232913.png"];var callback = () => api.sendMessage({body:`╭•┄┅════❁•SIDDIK•❁════┅┄•╮

🕌🕋
.... 人
...( ◎ )._______人
..║ ∩║____.-:'''"''";-.
..║ ∩║___(*(*(*|*)*)*)
..║ ∩║_. ║∩∩ ∩ ∩║
█ █ █ █ ██ █ █ █ █ █ █🕋🕌🕋🕌
🕌🕌🕌🕌জুম্মা মোবারক🕌🕌🕌🕌

❥━ღ❛ আসসালামু্ঁ আলাইকুম❛ ❛ 
                    ❛আজ শুক্রবার পবিএ জুম্মার দিন❛ ❛কোন এক শু্lক্রবারেই এই 彡দুনিয়া বিলিন হয়ে যাবে-ღ
࿐গুনাহ মাফের আরেকটি দিন পবিত্র জুম্মার দিন💞

❥━ღ❛হে আল্লাহ্ আজকের এইদিনে❛ ❛ 
                      ❛ ❛আমাদের পাপ কাজ 彡-ღক্ষমা করে দাও..... 🤲🤲আমিন ࿐❤🌸

╰•┄┅════❁•SIDDIK•❁════┅┄•╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
