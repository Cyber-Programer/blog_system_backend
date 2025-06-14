const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ error: 'inputs required' })

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: 'User already created' })
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ username, email, password: hashPassword })
        res.status(200).json({ message: 'User created', newUser })
    } catch (error) {
        console.error(error);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).json({ error: "Input's required" })
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" })
    }

    res.json({ message: "login Success", token: generateToken(user._id) })
}