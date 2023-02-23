import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
// const connection = require('./config/mongoConnection.js');


const app = express()


app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}))
app.use(cors())

//lZ2QdEtHnVpvNCU
const CONNECTION_URL ='mongodb+srv://<sahilmody1234>:<lZ2QdEtHnVpvNCU>@cluster0.d5wjeuo.mongodb.net/?retryWrites=true&w=majority'
const PORT =process.env.PORT || 5000


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then (()=> app.listen(PORT),()=>console.log(`Server running on port : ${PORT}`))
.catch((error)=>console.log(error.message))

// mongoose.set('useFindAndModify', false);