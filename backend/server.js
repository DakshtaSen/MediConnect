import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())

app.use(cors())
// app.use(cors())  it will allow to connect frontend with backend

//api endpoints

app.get('/',(req,res)=>{
  res.send('API Working')
})

//start the express app
app.listen(port, ()=> console.log("server started",4000))