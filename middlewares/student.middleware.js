import { Student } from "../models/student.model.js";
import { STATUS_CODES } from "../utils/constants.js";
import { requiredFieldsForCreateStudentRequest } from "../utils/index.js";

export const createStudentRequest = async (req, res, next) => {
  // validation for required fields
  for (const field in requiredFieldsForCreateStudentRequest) {
    if (!req.body[field]) {
      return res.status(STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: requiredFieldsForCreateStudentRequest[field],
      });
    }
  }

  // validation for existing Student in DB
  const email = req.body.email;
  const existingStudent = await Student.findOne({ email });

  if (existingStudent) {
    return res.status(STATUS_CODES.NOT_FOUND).json({
      success: false,
      message: "Student has registered with this Email",
    });
  }

  next();
};
