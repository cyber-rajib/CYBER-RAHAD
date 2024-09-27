module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  credits: "RAHAT",
  description: "goiadmin💞",
  category: "fun",
  usages: "Admin Mention💞",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100022795671292","100050206390910") {
    var aid = ["100022795671292","100004208040827","100050206390910","100004423418433","100080666112902"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" Don't Mention My Admin Owner Busy Rights Now🥰"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
