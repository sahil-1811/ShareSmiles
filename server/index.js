import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}))
app.use(cors())

app.use('/posts', postRoutes);
app.use('/user',userRoutes)

//lZ2QdEtHnVpvNCU
const CONNECTION_URL = "mongodb+srv://sahil-1811:sahilmody@cluster0.d5wjeuo.mongodb.net/test"
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));