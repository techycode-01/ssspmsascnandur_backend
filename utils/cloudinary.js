const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

/* IMAGE */
const cloudinaryUploadImg = async (filePath, folder) => {
    const result = await cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: "image",
        access_mode: "public",   // ✅ VERY IMPORTANT
        type: "upload",          // ✅ ensure public delivery
    });

    return {
        url: result.secure_url,
        asset_id: result.asset_id,
        public_id: result.public_id,
    };
};

/* PDF (RAW) */
const cloudinaryUploadPdf = async (filePath, folder) => {
    const result = await cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: "raw", // ✅ CRITICAL
        access_mode: "public",   // ✅ VERY IMPORTANT
        type: "upload",          // ✅ ensure public delivery
    });

    return {
        url: result.secure_url, // /raw/upload/
        asset_id: result.asset_id,
        public_id: result.public_id,
    };
};

/* DELETE (IMAGE / PDF) */
const cloudinaryDeleteImg = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId, {
        resource_type: "auto",
    });
};

module.exports = {
    cloudinaryUploadImg,
    cloudinaryUploadPdf,
    cloudinaryDeleteImg,
};
