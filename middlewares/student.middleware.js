import { Student } from "../models/student.model.js";
import { STATUS_CODES } from "../utils/constants.js";
import { requiredFieldsForCreateStudentRequest } from "../utils/index.js";
import { Response } from "../utils/template.js";

export const createStudentRequest = async (req, res, next) => {
  // validation for required fields
  for (const field in requiredFieldsForCreateStudentRequest) {
    if (!req.body[field]) {
      return Response(
        res,
        STATUS_CODES.BAD_REQUEST,
        false,
        requiredFieldsForCreateStudentRequest[field],
        null,
      );
    }
  }

  // validation for existing Student in DB
  const email = req.body.email;
  const existingStudent = await Student.findOne({ email });

  if (existingStudent) {
    return Response(
      res,
      STATUS_CODES.NOT_FOUND,
      false,
      "Student has registered with this Email",
      null,
    );
  }

  next();
};
