import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config(
    {
        path: './env'
    }
)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at PORT : ${process.env.PORT}`)
        })
        app.on(("error",(error)=>{
            console.error("Error :", error)
            throw error
        }))
    })
    .catch(
        (error) => {
            console.error("MONGODB connection faild succesfuly :", error)
        }
    )
























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