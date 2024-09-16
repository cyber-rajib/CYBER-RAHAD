const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const url = require('url');
 
module.exports.config = {
    name: "imgur2",
    version: "1.0.0",
    permission: 0,
    credits: "Rahad",
    description: "Uploads replied attachment to Imgur",
    prefix: false, 
    category: "Video and images Imgur upload", 
    usages: "imgur2",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};
 
module.exports.run = async ({ api, event }) => {
    try {
        const attachmentUrl = event.messageReply.attachments[0]?.url || event.messageReply.attachments[0];
        if (!attachmentUrl) return api.sendMessage('Please reply to an image or video with /imgur', event.threadID, event.messageID);
        var { threadID, messageID, body } = event,
            { PREFIX } = global.config;
        let threadSetting = global.data.threadData.get(threadID) || {};
        let prefix = threadSetting.PREFIX || PREFIX;
      
        const attachment = (await axios.get(attachmentUrl, { responseType: 'arraybuffer' })).data;
 
        const imgurLink = await uploadToImgur(attachment);
 
        console.log('Imgur link:', imgurLink);
 
        const replyMessage = "${imgurLink}",
 
        return api.sendMessage({ body: replyMessage }, event.threadID, event.messageID);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        return api.sendMessage('An error occurred while processing the attachment.', event.threadID, event.messageID);
    }
};
 
async function uploadToImgur(attachment) {
    try {
        const formData = new FormData();
        formData.append('image', attachment);
 
        console.log('Uploading to Imgur...');
 
        const uploadResponse = await axios.post('https://api.imgur.com/3/upload', formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Client-ID c76eb7edd1459f3` 
            }
        });
 
        console.log('Upload response:', uploadResponse.data);
 
        return uploadResponse.data.data.link;
    } catch (error) {
        console.error('Imgur upload error:', error.response?.data || error.message);
        throw new Error('An error occurred while uploading to Imgur.');
    }
} 
