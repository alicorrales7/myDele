import mongoose from "mongoose";
import { ModelUser } from "../models/User";


export async function connectDB() {

 const db =  await mongoose.connect('mongodb://localhost:27020/MyDele');
  console.log("database is connected", db.connection.db.databaseName )  
}

