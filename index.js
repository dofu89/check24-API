import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoute from './routes/products.js'

const app = express()
dotenv.config()

const connect = () => {
  mongoose.connect(process.env.DB, console.log('DB Connected'))
}

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected')
})
mongoose.connection.on('connected', () => {
  console.log('mongoDB connected')
})

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoute)

app.listen(8000, () => {
  connect(), console.log('Server is listening on PORT 8000')
})
