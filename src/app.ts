const { default: mongoose } = require("mongoose");
import express from "express";
import 'express-async-errors';
import cors from "cors";
import bodyParser from "body-parser";
import {
  CORS_WHITELISTED_DOMAINS
} from './keys';
import { errorHandler } from "./middlewares";
import emailRouter from "./routes/emailRoutes";
import healthRouter from "./routes/healthRoutes";

// Configure App
const app = express();
app.use(errorHandler);
app.use(bodyParser.json());

const whitelist = CORS_WHITELISTED_DOMAINS?.split(",") || [];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1)
      callback(null, true)
    else
      callback(new Error("Not allowed by CORS."))
  },
  credentials: true,
};

app.use(cors(corsOptions))

// Configuring routes
app.get("/", (req, res) => {
  res.status(201).send({ message: 'Hi from Emailing Service!' });
});

app.use("/api/email", emailRouter);
app.use("/health", healthRouter);

export default app;