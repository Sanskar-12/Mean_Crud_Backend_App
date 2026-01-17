import express from "express";
import {
  createStudent,
  deleteStudent,
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
studentRouter.delete("/delete/:studentId", deleteStudent);

export default studentRouter;
