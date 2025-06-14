const blogModel = require('../models/blogModel')


exports.createBlog = async (req, res) => {
    try {
        const blog = await blogModel.create({ ...req.body, author: req.user._id })
        res.status(201).json(blog)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'server error' })
    }
}

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().populate('author', 'username')
        res.status(200).json({ message: 'success', blogs })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'server error' })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog || blog.author.toString() !== req.user._id.toString()) return res.status(4003).json({ message: 'unauthorized' })

        const update = await blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: 'success', update })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'server error' })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)
        if (!blog || blog.author.toString() !== req.user._id.toString()) return res.status(4003).json({ message: 'unauthorized' })
        await blog.deleteOne();
        res.status(200).json({ message: 'Blog deleted' })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "server error" })
    }
}