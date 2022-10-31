import { matchedData } from "express-validator";

import { createUserService, findUsersService } from "../services/users.js";


export const getUsers = async (req, res) => {
   
    const data = await findUsersService(); 

    res.send({ data })

}

export const getUserById = async (req, res) => {

}

export const createUser = async (req, res) => {  
      
    const body = matchedData(req);
    
    const data = await createUserService(body);
   
    res.send({data});
}


export const updateUser = async (req, res) => {
    
}


export const deleteUser = async (req, res) => {
    
}