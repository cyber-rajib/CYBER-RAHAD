module.exports.config = {
  name: "tag",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  credits: "RAHAT",
  description: "Mention Tag🌺",
  category: "fun",
  usages: "mention 💞",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports .run = async function({ api, args, Users, event }) {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const { mentions, threadID, messageID } = event;
  function reply(body) {
    api.sendMessage(body, threadID, messageID);
  }
  let solantag = args[args.length - 2];
  let time = args[args.length - 1];
  if (Object.keys(mentions) == 0 && args[0] != "stop") return reply("Please tag the person you want to call the soul");
  if ((!solantag || !time) && args[0] != "stop") reply("Sai cú pháp !!!\n\nHD: taglientuc @tag nội dung 5 2\nTrong đó: 5 là số lần tag 2 là số thời gian mỗi lần tag");
  if (isNaN(solantag) && args[0] != "stop") return reply("The number of times the tag must be a number\n\nHD: taglientuc @tag Hi 10 2\nWhere: Hi is the content to be tagged\n10 is the number of times the tag\n2 is the pause time after each tag");
  if (isNaN(time) && args[0] != "stop") return reply("Thời gian giữa mỗi lần tag phải là một con số");
  time = time * 1000;
  const target = Object.keys(mentions)[0];
  var name = (await Users.getData(target)).name
  var mentionsTag = [];
  mentionsTag.push({
    id: target,
    tag: name
  })
  let i = 0;
  if (["stop", "clear"].includes(args[0])) {
    clearTimeout(time);
    time = 0;
    i = solantag;
    return reply("done");
  }
  reply(`Oky Boss Tag star kora holo<>credits Khan Rahul RK`);
  var noidungtag = args.slice(2, args.length - 2).join(" ");
  for (i = 0; i < solantag; i++) {
    await delay(time);
    api.sendMessage({
      body: '' + name + ' ' + noidungtag,
      mentions: mentionsTag
    }, threadID);
  };
}
