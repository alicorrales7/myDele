import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './util/config';
import { main } from './routes/route';
import { connectDB } from './util/connection';

export const app = express();
dotenv.config()


connectDB()

//examples
const port = config.PORT;
const numb = config.number;
const name = config.string;

main();

app.listen(port, ()=> {
    console.log('\nServer running in ----> "http://localhost:3000"\n')
})