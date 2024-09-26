 module.exports = {
  config: {
    name: "dalle",
    version: "1.0.0",
    permission: 2,
    credits: "RAHAT",
    description: "",
    prefix: 'true',
    category: "auto prefix",
    usages: "bing prompt",
    cooldowns: 10,
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written RAHUL and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const w = await api.sendMessage("𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙞𝙩𝙝𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞", event.threadID);

const response = await axios.get(`https://www.noobs-api.000.pe/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=1SJ5rtWR9TZuMqsF2fHv8J0Gv1LLmrteUOrqLvWuUah0bafIfMkAJLTLPjUk1vb4vyXE5YU_jlEt36n9hpQICAJdNDcluOWEC-WAF5mrbw1qTeTUvdFUPpoZNrke8lXmEGOl2JbJ3H9a_47Id-JgHpbJBmw_yugem-PEGRGE0bsKSitmvaA_z5EumeAOMvrrBFnl5wQKdEOez-d2txXQGxg`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dalle', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `𝙨𝙪𝙘𝙚𝙨𝙨𝙛𝙪𝙡 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\n𝙠𝙝𝙖𝙣 𝙧𝙖𝙝𝙪𝙡 𝙧𝙠💞`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
