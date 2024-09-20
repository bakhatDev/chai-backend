import { DB_NAME } from "./constants";
import connectDB from "./db/index"
import dotenv from "dotenv"

dotenv.config(
    {
        path: './env'
    }
)



connectDB()
























/*
import mongoose from "mongoose";
import express form "express"
const app = express()

;(
    async ()=>{
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.error("ERROR : ", error)
                throw error
            })
            app.listen(process.env.PORT, ()=>{
                console.log(`app is listening on PORT : ${process.env.PORT}` )
            })
        }catch(error){
            console.error("ERROR :" , error)
            throw error
        }
    }
)()
    */