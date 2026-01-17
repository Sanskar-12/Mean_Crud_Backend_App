import { STATUS_CODES } from "../utils/constants.js";

export const createStudent = (req, res) => {
  try {
  } catch (error) {
    console.log(error, "createStudent Error");
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Error in createStudent: ${error}`,
    });
  }
};
