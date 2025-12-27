const express = require("express");
const router = express.Router();

const {
  uploadPhoto,
  clientImgResize,
} = require("../middlewares/uploadImages");

/* ================= PDF MIDDLEWARE ================= */
const { uploadPdfMiddleware } = require("../middlewares/uploadPdfMiddleware");

const {
  uploadImages,
  uploadPdf,
  deleteImages,
  deletePdf,
} = require("../controller/uploadCtrl");

// upload image for product
router.post(
  "/",
  uploadPhoto.array("images", 10),
  clientImgResize,
  uploadImages
);

// upload pdf
router.post(
  "/pdf",
  uploadPdfMiddleware.array("file", 1),
  uploadPdf
);

// delete image for product
router.delete("/delete-img/:id", deleteImages);

// delete pdf
router.delete("/delete-pdf/:id", deletePdf);

module.exports = router;
