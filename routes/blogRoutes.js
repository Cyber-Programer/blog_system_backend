const router = require('express').Router()
const { createBlog, updateBlog, deleteBlog, getBlogs } = require('../controllers/blogController')
const protect = require('../middlewares/authMiddlewares')


router.route('/')
    .get(getBlogs)
    .post(protect, createBlog)

router.route('/:id')
    .put(protect, updateBlog)
    .delete(protect, deleteBlog)

module.exports = router;