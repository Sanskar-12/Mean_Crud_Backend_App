import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/student.controller.js";
import { createStudentRequest } from "../middlewares/student.middleware.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudentRequest, createStudent);
studentRouter.get("/get/all", getAllStudents);
studentRouter.get("/get/:studentId", getStudentById);
studentRouter.put("/update/:studentId", updateStudent);

export default studentRouter;
