import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/users.js";

const users = Router();

users.get('/', getUsers);

users.get('/:id', getUserById);

users.post('/', createUser);

export default users