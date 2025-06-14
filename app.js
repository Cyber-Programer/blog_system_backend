const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRouter = require('./routes/authRoutes')
const blogRouter = require('./routes/blogRoutes')
dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/user',authRouter)
app.use('/api/blogs',blogRouter)

app.get('/', (req, res) => {
    res.send('welcome to my server')
})




const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) })