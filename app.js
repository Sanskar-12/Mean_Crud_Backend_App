import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";

dotenv.config();
connectToDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
