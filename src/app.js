import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cors({origin:process.env.CORS_ORIGIN}))
app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))


export {app};

