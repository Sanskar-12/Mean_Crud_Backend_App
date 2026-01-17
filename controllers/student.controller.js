import { Student } from "../models/student.model.js";
import { STATUS_CODES } from "../utils/constants.js";

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

    return res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: "Student Created Successfully",
      data: student,
    });
  } catch (error) {
    console.log(error, "createStudent Error");
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Error in createStudent: ${error}`,
    });
  }
};
