import express from"express"
import mongoose from"mongoose"
import dotenv from"dotenv"
import UserRoute from "./Routes/UserRoutes.js"
import CoverRoutes from"./Routes/CoverRoutes.js"
import cors from "cors"
import ResumeRoutes from "./Routes/ResumeRoutes.js"
dotenv.config()
const app=express()
const port =process.env.PORT||8000
app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
mongoose.connect(process.env.DB_URL).then(()=>console.log("connected to database")).catch((e)=>{if(e)
    return console.error((e))})
app.use(express.json())
app.use("/User",UserRoute)
app.use('/Cover',CoverRoutes)
app.use('/Resume',ResumeRoutes)
app.listen(port,()=>{
    console.log(`server is running at  ${port}`)
})

