const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createBlog, allBlog, singleBlog, deleteBlog, updateBlog } = require('../controller/blogCtrl');

const router = express.Router();

router.post("/", createBlog);

router.get('/all', allBlog);

router.get("/single/:id", singleBlog);

router.put("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

module.exports = router; 