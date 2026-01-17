import { STATUS_CODES } from "../utils/constants.js";
import { requiredFieldsForCreateStudentRequest } from "../utils/index.js";

export const createStudentRequest = (req, res, next) => {
  for (const field in requiredFieldsForCreateStudentRequest) {
    if (!req.body[field]) {
      return res.status(STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: requiredFieldsForCreateStudentRequest[field],
      });
    }
  }

  next();
};
