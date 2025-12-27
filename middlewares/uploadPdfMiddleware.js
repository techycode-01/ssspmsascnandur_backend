const multer = require("multer");
const path = require("path");

/* ================================
   Multer Storage for PDF
================================ */
const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/pdfs"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

/* ================================
   PDF Filter ONLY
================================ */
const pdfFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed"), false);
    }
};

const uploadPdfMiddleware = multer({
    storage: pdfStorage,
    fileFilter: pdfFilter,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
});

module.exports = { uploadPdfMiddleware };
