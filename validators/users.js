import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createUserValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").isEmail(),
  check("password").exists().notEmpty(),
  check("role").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];
