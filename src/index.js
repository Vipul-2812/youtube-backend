
// require('dotenv').config({path:'./env'});
import  express from "express";
import connectDB from "./DB/index.js";
import 'dotenv/config';
import {app} from "./app.js"




 connectDB()
 .then(()=>{
     const port = process.env.PORT || 8000;
     app.listen( port,()=>{
     console.log(`server is started on port ${port}`)
     })
 })
 .catch((error)=>{
     console.log("MONGO DB CONNECTION FAILED !!" , error)
 })


