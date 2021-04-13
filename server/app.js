import "@babel/polyfill";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "./db";
import responseConstruct from "./helpers/response";

dotenv.config();

// connect to database
mongoose.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ type: 'application/json' }));
app.use(express.text());

app.use("/api/v1", routes);

app.get("/", (req, res) => responseConstruct({
    req,
    res,
    status: 200,
    data: {
      message: "Welcome to global todo",
    },
  })
);

app.use((req, res) => responseConstruct({
    req,
    res,
    status: 404,
    data: {
      message: "Oops! this endpoint has no power 🔋",
    },
  })
);

export default app;
