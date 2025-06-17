
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import router from "./src/routes/api.js";
const app = express();

// Security Middleware

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

// Parsing 

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true}));

// Rate Limiter 

const limiter = rateLimit({windowMs: 15*60*1000, max: 1000});

app.use(limiter);
// app.use("etag", false);
app.use("api/v1", router)


export default app;