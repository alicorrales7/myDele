import express from 'express';
import config from './util/config';
import { connectDB } from './util/connection';
import { userRoutes } from './routes/userRoutes';
import { carRoutes } from './routes/carRoutes';
import { houseRoutes } from './routes/houseRoutes';
import morgan from 'morgan';
import { phoneRoutes } from './routes/phoneRoutes';
import { ServerErrorTry } from './util/error/serverError';

export const app = express()

app.use(morgan("dev"))

connectDB();

userRoutes()
carRoutes()
houseRoutes()
phoneRoutes()

try {
    const port = config.PORT
    app.listen(port, () => {
        console.log('\nServer running in ----> "http://localhost:3000"\n')
    })
} catch (err) {
    throw new ServerErrorTry()
} 
  




