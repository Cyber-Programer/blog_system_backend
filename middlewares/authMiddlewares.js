const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.status(401).json({ message: "no token found" })
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await userModel.findById(decode.id).select('-password')
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" })
    }
}

module.exports = protect