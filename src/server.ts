import express, { urlencoded } from 'express';
import config from './util/config';
import { connectDB } from './util/connection';
import { userRoutes } from './routes/userRoutes';
import { carRoutes } from './routes/carRoutes';
import { houseRoutes } from './routes/houseRoutes';
import morgan from 'morgan';
import { phoneRoutes } from './routes/phoneRoutes';
import { ServerErrorTry } from './util/error/serverError';
import { localAuth } from './services/auth_service';
import { middleware } from './util/middleware';
export const app = express()


app.use(morgan("dev"))

connectDB();
localAuth();
middleware();
userRoutes();
carRoutes();
houseRoutes();
phoneRoutes();

try {
    const port = config.PORT
    app.listen(port, () => {
        console.log('\nServer running in ----> "http://localhost:3000"\n')
    })
} catch (err) {
    throw new ServerErrorTry()
} 
  




