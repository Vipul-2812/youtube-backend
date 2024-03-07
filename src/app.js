import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cors({origin:process.env.CORS_ORIGIN}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))





//routes import
import userRouter from './Routers/user.routes.js'


//routes declaration

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export {app};

