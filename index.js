import cookieParser from "cookie-parser"
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
     origin: "http://localhost:5173" ,
     credentials: true
}))

const PORT = process.env.PORT || 9003

const runServer = async ()=>{
    try {
         app.listen(PORT , ()=>{
            console.log(`Your server is running at http://localhost:${PORT}`)
         })
    } catch (error) {
        console.log(error)
    }
}
runServer()