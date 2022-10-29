import { Router } from "express";

const users = Router();


users.get('/', (req, res) => {
    
    res.send({name: "Beto"})
})

users.get('/apellido', (req, res) => {
    
    res.send({name: "Rpbledo"})
})

export default users