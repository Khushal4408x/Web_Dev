import express from 'express'
import apiRouter from "./routes/index.js"
import cors from 'cors'
import './db.js'
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/v1',apiRouter)


app.listen(3000);


