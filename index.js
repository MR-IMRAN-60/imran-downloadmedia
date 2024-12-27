const axios = require('axios');

// Base URL for the API
const apimain = 'https://nayan-video-downloader.vercel.app/';

async function alldl(url) {
  try {
    
    const response = await axios.get(`${apimain}alldown?url=${url}`);

    
    const imu = response.data.data;

    
    return {
      Author: "MOHAMMAD IMRAN",
      Facebook: "https://www.facebook.com/profile.php?id=100075122837809",
      whatapp: "wa.me/+8801689903267",
      data: imu  
    };
  } catch (error) {
    console.error("Error downloading video:", error);
    throw error;  
  }
}

module.exports = { alldl };
