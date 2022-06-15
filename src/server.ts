import express from 'express';
import config from './util/config';
import { connectDB } from './util/connection';
import { userRoutes } from './routes/userRoutes';
export const app = express()



connectDB()

userRoutes()


//Resolve the id conversion
const port = config.PORT
app.listen(port, ()=> {
    console.log('\nServer running in ----> "http://localhost:3000"\n')
})