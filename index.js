const axios = require('axios');


const apimain = 'https://nayan-video-downloader.vercel.app/';


function createRequest(endpoint) {
  return async function(params) {
    try {
      const response = await axios.get(`${apimain}${endpoint}`, { params });
      const imran = response.data.data; 
      
      return {
        developer: "MOHAMMAD IMRAN",
        devfb: "https://www.facebook.com/profile.php?id=100075122837809",
        devwp: "wa.me/+8801689903267",
        status: true,
        data: imran 
      };
    } catch (error) {
      console.error('Error in API request:', error);
      throw error;  
    }
  };
}


module.exports = {
  alldl: createRequest('alldown')
};
