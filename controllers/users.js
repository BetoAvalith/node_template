import { matchedData } from "express-validator";
import { usersModel } from "../models/users.js"


export const getUsers = async (req, res) => {
   
    const data = await usersModel.find({}); 

    res.send({ data })

}

export const getUserById = async (req, res) => {
    
}

export const createUser = async (req, res) => {  
      
    const body = matchedData(req);
    
    const data = await usersModel.create(body);
   
    res.send({data});
}


export const updateUser = async (req, res) => {
    
}


export const deleteUser = async (req, res) => {
    
}