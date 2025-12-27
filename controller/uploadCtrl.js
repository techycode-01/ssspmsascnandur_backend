const path = require("path");
const fs = require("fs");
const asyncHandler = require("express-async-handler");

/* ================= Cloudinary Utils ================= */
const {
  cloudinaryUploadImg,
  cloudinaryUploadPdf,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");

/* =====================================================
   IMAGE UPLOAD (❌ DO NOT TOUCH – WORKING)
===================================================== */
const uploadImages = asyncHandler(async (req, res) => {
  try {
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const uploaded = await cloudinaryUploadImg(file.path, "images");
      urls.push(uploaded);

      // remove local file
      fs.unlinkSync(file.path);
    }

    res.status(200).json(urls);
  } catch (error) {
    throw new Error(error);
  }
});

/* =====================================================
   PDF UPLOAD (✅ FIXED – RAW RESOURCE)
===================================================== */
const uploadPdf = asyncHandler(async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "No PDF files uploaded",
      });
    }

    const urls = [];

    for (const file of files) {
      const uploaded = await cloudinaryUploadPdf(file.path, "pdfs");
      urls.push(uploaded);

      fs.unlinkSync(file.path);
    }

    res.status(200).json(urls);
  } catch (error) {
    console.error("PDF Upload Error:", error);

    res.status(500).json({
      message: error.message || "PDF upload failed",
    });
  }
});


/* =====================================================
   IMAGE DELETE (❌ DO NOT TOUCH – WORKING)
===================================================== */
const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await cloudinaryDeleteImg(id);
    res.status(200).json({ message: "Image Deleted" });
  } catch (error) {
    console.error("Image Delete Error:", error);

    res.status(500).json({
      message: error.message || "Image delete failed",
    });
  }
});

/* =====================================================
   PDF DELETE (✅ NEW)
===================================================== */
const deletePdf = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await cloudinaryDeleteImg(id);
    res.status(200).json({ message: "PDF Deleted" });
  } catch (error) {
    console.error("PDF Delete Error:", error);

    res.status(500).json({
      message: error.message || "PDF delete failed",
    });
  }
});

module.exports = {
  uploadImages,
  uploadPdf,
  deleteImages,
  deletePdf,
};
