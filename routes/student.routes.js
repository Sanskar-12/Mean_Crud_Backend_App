import express from "express";
import { createStudent } from "../controllers/student.controller.js";
import { createStudentRequest } from "../middlewares/student.middleware.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudentRequest, createStudent);

export default studentRouter;
