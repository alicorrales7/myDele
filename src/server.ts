import express from 'express';
import dotenv from 'dotenv';
import config from './util/config';
import { main } from './routes/route';
import { connectDB } from './util/connection';
import  {SyncDB}  from './controllers/UserController';
import { ModelUser } from './models/User';
export const app = express();
dotenv.config()


connectDB();

SyncDB();


main();


const port = config.PORT
app.listen(port, ()=> {
    console.log('\nServer running in ----> "http://localhost:3000"\n')
})