// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'wanderlust_DEV',
//     allowedFormats: ["png","jpg","jpeg"]
   
//   },
// });

// module.exports ={
//     cloudinary,
//     storage,
// };


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

console.log("Cloudinary Cloud Name:", process.env.CLOUD_NAME);
console.log("Cloudinary API Key exists:", !!process.env.CLOUD_API_KEY);
console.log("Cloudinary API Secret exists:", !!process.env.CLOUD_API_SECRET);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

console.log("Cloudinary Config:", cloudinary.config());

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowedFormats: ["png", "jpg", "jpeg"]
    },
});

module.exports = {
    cloudinary,
    storage,
};