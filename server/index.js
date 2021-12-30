import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/posts.js'

dotenv.config()
const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', router)

app.get('/', (req, res) => {
  res.send('Hello to MEmories API')
})
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log('DB connected'))
  .catch(err => {
    console.log(err)
  })
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running!')
})
