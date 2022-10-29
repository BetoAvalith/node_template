import { Router } from "express";

import { readdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Routes
import users from "./users.js";


const router = Router();

const routes = {
    users,
    // ... more routes files
}

const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));

readdirSync(PATH_ROUTES).filter( file => {
    const name = file.split('.')[0];

    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`);
        router.use(`/${name}`, routes[`${name}`])
    }    
    
});
export default router;
