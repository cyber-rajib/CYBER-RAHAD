const fs = require('fs-extra');
const pathFile = __dirname + '/autoreact/autoreact.txt';
 
module.exports.config = {
  name: "autoreact",
  version: "2.0.0",
  permission: 2,
  credits: "SIDDIK",
  description: "..",
  prefix: false,
  category: "...",
  usages: "",
  cooldowns: 5,
};

languages: {
  "vi": {},
      "en": {
          "off": 'the autoreact function has been disabled for new messages.',
          "on": 'the autoreact function is now enabled for new messages.',
        "error": 'incorrect syntax'
      }
  },
 
handleEvent: async ({ api, event, Threads }) => {
 
  if (!fs.existsSync(pathFile))
   fs.writeFileSync(pathFile, 'false');
   const isEnable = fs.readFileSync(pathFile, 'utf-8');
   if (isEnable == 'true') {
    
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const dipto = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','😸','💦','🤨','😭','😁','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','🫤','🍍','🍌','🌚','🥥','🐛','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀']
 
const r = dipto[Math.floor(Math.random() * dipto.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
}
    };
module.exports. run = async ({ api, event, args }) => {
   try {
     const logger = require("../../SIDDIK/catalogs/siddikc.js");
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       api.sendMessage('the autoreact function is now enabled for new messages.', event.threadID, event.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       api.sendMessage('the autoreact function has been disabled for new messages.', event.threadID, event.messageID);
     } else {
       api.sendMessage('incorrect syntax', event.threadID, event.messageID);
     }
   }
   catch(e) {
     logger("unexpected error while using autoseen function", "system");
   }
};
