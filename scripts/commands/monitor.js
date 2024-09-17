const axios = require('axios');
const fs = require('fs');
const path = require('path');
 
module.exports.config = {
  name: "ck",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "GENERATE QUOTES",
  prefix: true, 
  category: "Notes", 
  usages: "user",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
const SAD_QUOTES_API = 'https://ap-rizz.chatbotmesss.repl.co/api/rizz';
 
module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get(SAD_QUOTES_API);
    const { quote, author } = response.data;
 
   
    const imageUrl = 'https://i.imgur.com/5IcjJw5.gif'; 
    const imageFileName = 'img.png'; 
    const cacheFolderPath = path.join(__dirname, 'cache');
    const imagePath = path.join(cacheFolderPath, imageFileName);
 
    if (!fs.existsSync(cacheFolderPath)) {
      fs.mkdirSync(cacheFolderPath);
    }
 
    try {
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));
    } catch (error) {
      console.error('Error downloading the image:', error);
      api.sendMessage("Error fetching quotes or sending the image.", event.threadID, event.messageID);
      return;
    }
 
 
    const message = {
      body: quote + ' - ' + author,
      attachment: fs.createReadStream(imagePath),
    };
 
 
    try {
      await api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error('Error sending message:', error);
    }
 
  
    fs.unlinkSync(imagePath);
  } catch (error) {
    console.error('Error fetching quotes or sending the image:', error);
    api.sendMessage("Error fetching quotes or sending the image.", event.threadID, event.messageID);
  }
};
 
 
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});
