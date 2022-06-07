import express from 'express';
import dotenv from 'dotenv';
import config from './util/config';
import { main } from './routes/route';
import { connectDB } from './util/connection';


export const app = express();
dotenv.config()


connectDB();

main();


const port = config.PORT
app.listen(port, ()=> {
    console.log('\nServer running in ----> "http://localhost:3000"\n')
})