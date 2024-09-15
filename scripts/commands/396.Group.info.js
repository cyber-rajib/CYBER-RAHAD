const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "boxinfo",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "View your box information",
  prefix: true, 
  category: "Box", 
  usages: "gorup",
  cooldowns: 5,
  dependencies: [] 
};
 
module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
			var callback = () =>
				api.sendMessage(
					{
						body: `╭─────•◈•─────╮\n         🅂🄸🄳🄳🄸🄺🄱🄾🅃       \n\n🔧 Group Name: ${threadName}\n🔧 Group ID: ${id}\n🔧 Approval: ${pd}\n🔧 Emoji: ${icon}\n🔧 Information: including ${threadMem} members\n🔧 Number of males: ${nam} members\n🔧 Number of females: ${nu} members\n🔧 With ${qtv} administrators\n🔧 Total number of messages: ${sl} msgs.\n\n𝐎𝐖𝐍𝐄𝐑:-「𝐒𝐊-𝐒𝐈𝐃𝐃𝐈𝐊」💫\n
🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝚂𝙺.𝚂𝙸𝙳𝙳𝙸𝙺.𝙺𝙷𝙰𝙽🖤\n
 
𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝:- 👇 https://www.facebook.com/rxsiddik1\n
 
👋For Any Kind Of Help Contact On Messenger 👇m.me/TERA.PAPPA.IS.BUSY 😇 \n\n╰─────•◈•─────╯`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }
 
