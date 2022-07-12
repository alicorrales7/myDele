<<<<<<< HEAD
import express from 'express';
=======
import express, { urlencoded } from 'express';
import config from './util/config';
>>>>>>> 7aa03c03296a3751dc43d639fe66420baa932b5e
import { connectDB } from './util/connection';
import { userRoutes } from './routes/userRoutes';
import { carRoutes } from './routes/carRoutes';
import { houseRoutes } from './routes/houseRoutes';
import morgan from 'morgan';
import { phoneRoutes } from './routes/phoneRoutes';
import { ServerErrorTry } from './util/error/serverError';
<<<<<<< HEAD
import * as dotenv from "dotenv";
=======
import { localAuth } from './services/auth_service';
import { middleware } from './util/middleware';
>>>>>>> 7aa03c03296a3751dc43d639fe66420baa932b5e
export const app = express()


app.use(morgan("dev"))

dotenv.config();
connectDB();
<<<<<<< HEAD
userRoutes()
carRoutes()
houseRoutes()
phoneRoutes()
=======
localAuth();
middleware();
userRoutes();
carRoutes();
houseRoutes();
phoneRoutes();

>>>>>>> 7aa03c03296a3751dc43d639fe66420baa932b5e
try {
    app.listen(3000, () => {
        console.log('\nServer running in ----> "http://localhost:3000"\n')
    })
} catch (err) {
    throw new ServerErrorTry()
}






