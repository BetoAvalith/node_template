import * as dotenv from 'dotenv' 
dotenv.config()

import express from 'express';
import cors from 'cors';

import { dbConnect } from './config/mongo.js';
import router from './routes/index.js';


const app = express();

app.use(cors());


// Router
app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App lista en http://localhost:${port}`)
})

dbConnect();