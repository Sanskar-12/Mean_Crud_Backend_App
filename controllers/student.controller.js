import { Student } from "../models/student.model.js";
import { STATUS_CODES } from "../utils/constants.js";
import { Response } from "../utils/template.js";

export const createStudent = async (req, res) => {
  try {
    const { name, age, email, studentClass, address, phone } = req.body;

    const student = await Student.create({
      name,
      age,
      email,
      studentClass,
      address,
      phone,
    });

    return Response(
      res,
      STATUS_CODES.CREATED,
      true,
      "Student Created Successfully",
      student,
    );
  } catch (error) {
    console.log(error, "createStudent Error");

    return Response(
      res,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      false,
      `Error in createStudent: ${error}`,
      null,
    );
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});

    return Response(
      res,
      STATUS_CODES.OK,
      true,
      "All Students fetched Successfully",
      students,
    );
  } catch (error) {
    console.log(error, "getAllStudents Error");

    return Response(
      res,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      false,
      `Error in getAllStudents: ${error}`,
      null,
    );
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await Student.findById(studentId);

    if (!student) {
      return Response(
        res,
        STATUS_CODES.NOT_FOUND,
        false,
        "Student not found",
        null,
      );
    }

    return Response(
      res,
      STATUS_CODES.OK,
      true,
      "Student fetched Successfully",
      student,
    );
  } catch (error) {
    console.log(error, "getStudentById Error");

    return Response(
      res,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      false,
      `Error in getStudentById: ${error}`,
      null,
    );
  }
};
