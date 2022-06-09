import express from 'express';
import dotenv from 'dotenv';
import config from './util/config';
import { main } from './routes/route';
import { connectDB } from './util/connection';
import { Add_User, insert_One } from './models/User';
import {UpdateMany_User} from './models/User'
import { Find_User } from './models/User';


export const app = express();
dotenv.config()
connectDB()

//Add_User()
UpdateMany_User()


main();


const port = config.PORT
app.listen(port, ()=> {
    console.log('\nServer running in ----> "http://localhost:3000"\n')
})