import { Router } from "express";

import { readdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";


const router = Router();

// const routes = {
//     users,
//     // ... more routes files
// }

const PATH_ROUTES = dirname(fileURLToPath(import.meta.url)); //`${__dirname}`

readdirSync(PATH_ROUTES).filter( file => {
   
    const name = file.split('.')[0];  // [ 'user', 'js' ]

    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`); // users, ...
        // http://localhost:5000/api/users, ...
        import(`./${file}`).then( moduleRouter => {router.use(`/${name}`, moduleRouter.router)})
    }    
    
});

export default router;
