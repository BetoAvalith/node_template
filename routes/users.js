import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/users.js";
import { createUserValidator } from "../validators/users.js";

const users = Router();

users.get('/', getUsers);

users.get('/:id', getUserById);

users.post('/', createUserValidator,createUser);

export default users