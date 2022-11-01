import { Router } from "express";

import { readdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";


const router = Router();

const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));

readdirSync(PATH_ROUTES).filter( file => {
   
    const name = file.split('.')[0];  // [ 'user', 'js' ]

    if (name !== 'index') {

        console.log(`Cargando ruta ${name}`); 
       
        import(`./${file}`).then( moduleRouter => {router.use(`/${name}`, moduleRouter.router)})

    }    
    
});

export default router;
