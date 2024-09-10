module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি এসকে বস ${name} ব্লক করছে তাই এড করতে পারলাম না😞😞  \n✢━━━━━𝐒𝐈𝐃𝐃𝐈𝐊━━━━✢ `, event.threadID)
   } else api.sendMessage(`সিদ্দিক BoSS, ${name} লিভ নেওয়া আইডি টা পুনরায় এড করতে সফল্য! \n✢━━━━━𝐒𝐈𝐃𝐃𝐈𝐊━━━━✢`,

 event.threadID);
  })
 }
                     }
