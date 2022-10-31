import { usersModel } from "../models/users.js";


export const findUsersService = async () => {
   
   const data = await usersModel.find({}); 

   return data;

}

export const createUserService = async (body) => {  
    
    const data = await usersModel.create(body);
   
    return data;
}
