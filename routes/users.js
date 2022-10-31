import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/users.js";
import { createUserValidator } from "../validators/users.js";

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUserValidator, createUser);

export { router };