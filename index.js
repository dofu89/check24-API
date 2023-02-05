import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoute from './routes/products.js'
import userRouter from './routes/userRoutes.js'

const app = express()
dotenv.config()

const connect = () => {
  mongoose.connect(process.env.DB, console.log('DB Connected'))
}

const db = mongoose.connection

db.on('disconnected', () => {
  console.log('mongoDB disconnected')
})
db.on('connected', () => {
  console.log('mongoDB connected')
})

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoute)
app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(8000, () => {
  connect(), console.log('Server is listening on PORT 8000')
})
