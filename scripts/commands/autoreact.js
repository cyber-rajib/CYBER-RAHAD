const fs = require('fs-extra');
const pathFile = __dirname + '/autoreact/autoreact.txt';
 
module.exports.config = {
  name: "autoreact",
  version: "2.0.0",
  permission: 2,
  credits: "SIDDIK",
  description: "turn on/off automatically seen when new messages are available",
  prefix: false,
  category: "system",
  usages: "on/off",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const dipto = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','😸','💦','🤨','😭','😁','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','🫤','🍍','🍌','🌚','🥥','🐛','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀']
 
const logger = require("../../SIDDIK/catalogs/siddikc.js");
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       dipto.sendMessage(lang("on"), events.threadID, events.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       nayan.sendMessage(lang("off"), events.threadID, events.messageID);
     } else {
       dipto.sendMessage(lang("error"), events.threadID, events.messageID);
     }
   }
   catch(e) {
     logger("unexpected error while using autoseen function", "system");
   }
}
    };
module.exports.run = function (){}}
}
