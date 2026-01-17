import express from "express";
import {
  createStudent,
  getAllStudents,
} from "../controllers/student.controller.js";
import { createStudentRequest } from "../middlewares/student.middleware.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudentRequest, createStudent);
studentRouter.get("/get/all", getAllStudents);

export default studentRouter;
