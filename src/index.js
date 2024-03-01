
// require('dotenv').config({path:'./env'});
import  express from "express";
// import mongoose from "mongoose";
import connectDB from "./DB/index.js";
import 'dotenv/config';



const app = express();
connectDB();
const port = process.env.PORT;

app.listen(3000,()=>{
     console.log(`server is started on port ${port}`)
})