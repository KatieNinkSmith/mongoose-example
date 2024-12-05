import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/conn.mjs";
import Learner from "./models/learners.mjs";
import learners from "./routes/learners.mjs";
const PORT = process.env.PORT || 5052;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my learners api");
});
app.use("/api/learners", learners);

// global error handling after the routes
app.use((err, _req, res, next) => {
  res.status(500).send("Oh no my table is broken");
});

// start the express server
app.listen(PORT, () => {
  console.log(`Listen Linda, Listen on port:${PORT}`);
});
