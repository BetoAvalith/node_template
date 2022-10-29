import * as dotenv from 'dotenv' 
dotenv.config()

import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App lista en http://localhost:${port}`)
})