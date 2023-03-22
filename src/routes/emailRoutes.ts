import { Router } from "express";
import { body, Result, ValidationError, validationResult } from 'express-validator';
// import User, { IUserDocument } from "../models/user";
import { InvalidInputError } from "../errors";
import { REQUIRED_EMAIL_BODY_ERR_MSG, REQUIRED_EMAIL_ERR_MSG } from "../errors/keys";
// import { UserSignedUp } from "../events";

const router = Router();

const returnUnauthorized = (res) => {
  res.statusCode = 401;
  res.send("Unauthorized");
};

router.post("/send", [
  body('email').isEmail().withMessage(REQUIRED_EMAIL_ERR_MSG),
  body('emailBody').notEmpty().withMessage(REQUIRED_EMAIL_BODY_ERR_MSG)
], async (req, res) => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) throw new InvalidInputError(errors.array());

  try {
    return res.status(200).send({ success: true });
  } catch (err) {
    throw new InvalidInputError();
  }
});

export default router;