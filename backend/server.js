import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import userRouter from './routes/userRoute.js'
import doctorRouter from './routes/doctorRoute.js'

//app config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/user',userRouter)

app.use('/api/doctor',doctorRouter)

app.get('/', (req, res) => {
  res.json({
    msg:"working"
  })
})

//start the express app
app.listen(PORT, () => console.log(`Server started on port ${PORT} `))
