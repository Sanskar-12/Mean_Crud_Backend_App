import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import morgan from "morgan";
import studentRouter from "./routes/student.routes.js";
import cors from "cors";

dotenv.config();
connectToDB();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
app.use("/api/v1", studentRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
