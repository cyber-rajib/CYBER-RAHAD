const axios = require('axios');
const fs = require('fs');
const path = require('path');
 
module.exports = {
  config: {
    name: "movie",
    version: "1.0.0",
    permission: 0,
    credits: "SIDDIK",
    description: "Fetch movie data",
    prefix: 'awto',
    category: "movie",
    usages: "[movie name]",
    cooldowns: 5,
  },
 
  handleReply: async function ({ api, event, handleReply }) {
      try {
          const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`)
          const apiUrl = kl.data.movie
          const { messageID, threadID } = event;
 
          if (handleReply.quality) {
 
              const selectedQualityIndex = parseInt(event.body.trim()) - 1;
 
              if (isNaN(selectedQualityIndex) || selectedQualityIndex < 0 || selectedQualityIndex >= handleReply.quality.length) {
                  return api.sendMessage('Invalid selection. Please choose a valid number.', threadID, messageID);
              }
 
              const selectedQuality = handleReply.quality[selectedQualityIndex];
              const nnn = `${selectedQuality.resolution}` || `${selectedQuality.name}`
              console.log(`Selected quality: ${nnn}`);
 
 
              try {
                  const downloadData = await axios.get(`${apiUrl}/movie?type=download&url=${selectedQuality.url}`);
                  const downloadLinks = downloadData.data.links;
                  const additionalInfo = downloadData.data.additionalInfo;
 
                  let downloadMessage = `Download Links for ${nnn}:\n\n`;
 
                  if (downloadLinks && downloadLinks.length > 0) {
                      downloadLinks.forEach((link, index) => {
                          downloadMessage += `${index + 1}» ${link.downloadName}: ${link.href}\n\n`;
                      });
                  } else {
                      downloadMessage += "No download links available.\n";
                  }
 
                  downloadMessage += `\nAdditional Info:\n`;
                  downloadMessage += `File Size: ${additionalInfo["File Size"] || 'N/A'}\n`;
                  downloadMessage += `File Type: ${additionalInfo["File Type"] || 'N/A'}\n`;
                  downloadMessage += `Resolution: ${additionalInfo["Resolution"] || 'N/A'}\n`;
                  downloadMessage += `Audio Tracks: ${additionalInfo["Audio Tracks:"] || 'N/A'}\n`;
 
                  return api.sendMessage(downloadMessage, threadID, messageID);
              } catch (downloadError) {
                  console.error('Error fetching download links:', downloadError);
                  return api.sendMessage('An error occurred while fetching the download links. Please try again later.', threadID, messageID);
              }
          }
 
          const { link } = handleReply;
 
 
          try {
              const data = await axios.get(`${apiUrl}/movie?type=quality&url=${link[event.body - 1]}`);
              const categorizedLinks = data.data.downloadLinks;
 
 
 
              let msg;
              if (categorizedLinks[0].name){
                  msg = `Episode`
              } else {
                  msg = `Resolution`
              }
              let qualityMessage = `Select ${msg}:\n\n`;
 
              let availableQualities = [];
 
              categorizedLinks.forEach((item, index) => {
                  const nm = item.name || item.resolution;
 
 
                  qualityMessage += `${index + 1}» ${nm}\n`;
                  availableQualities.push(item);
              });
 
              if (availableQualities.length === 0) {
                  qualityMessage = "Sorry, no resolutions are available for this movie.";
              }
 
              api.sendMessage({ body: qualityMessage }, threadID, (error, info) => {
                  if (error) {
                      console.error('Error replying to user:', error);
                      return api.sendMessage('An error occurred while processing your request. Please try again later.', threadID, messageID);
                  }
 
                  global.client.handleReply.push({
                      type: 'reply',
                      name: this.config.name,
                      messageID: info.messageID,
                      author: event.senderID,
                      quality: availableQualities
                  });
              }, messageID);
 
          } catch (qualityError) {
              console.error('Error fetching available resolutions:', qualityError);
              return api.sendMessage('An error occurred while fetching available resolutions. Please try again later.', threadID, messageID);
          }
 
      } catch (error) {
          console.log(error);
          return api.sendMessage('An error occurred while processing your request.', threadID, messageID);
      }
  },
 
 
 
 
  start: async function ({ nayan, events, args, Users, permission }) {
    try {
      const msg = args.join(" ");
        const { messageID, threadID } = events;
        const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`)
          const apiUrl = kl.data.movie
          if (!args[0]) return nayan.reply(`Usage:\n${global.config.PREFIX}${this.config.name} [movie name]`, events.threadID, events.messageID);
      const response = await axios.get(`${apiUrl}/movie?type=search&name=${encodeURIComponent(msg)}`);
      const movies = response.data.movies;
 
      if (movies.length === 0) {
        return nayan.reply('No movies found for the search query.', events.threadID, events.messageID);
      }
 
      let message = 'Here are the movies you searched for:\n\n';
      let imgData = [];
      let li = [];
      let num = 0;
 
      for (const movie of movies) {
        message += `» ${num + 1} - ${movie.title}\n` +
                   `Quality: ${movie.quality}\n` +
                   `Language: ${movie.language}\n` +
                   `Rating: ${movie.rating}\n\n`;
 
        li.push(movie.link)
 
        const imageResponse = await axios.get(movie.image, { responseType: 'arraybuffer' });
        const imagePath = path.join(__dirname, `/cache/${num + 1}.jpg`);
        fs.writeFileSync(imagePath, imageResponse.data);
        imgData.push(fs.createReadStream(imagePath));
 
        num++;
      }
 
 
      nayan.reply({ body: message,
                    attachment: imgData }, events.threadID, (error, info) => {
        if (error) {
          return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
        }
 
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: events.senderID,
          link: li,
        });
      }, events.messageID);
 
    } catch (error) {
      console.log(error);
      nayan.reply('An error occurred while fetching movie data. Please try again later.', events.threadID, events.messageID);
    }
  }
};
 
