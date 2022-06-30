import mongoose, { MongooseError } from "mongoose";
import { DataBaseError } from "./error/dataBaseError";
import DisconnectedError from "mongoose"

export async function connectDB() {

  try {
    const db = await mongoose.connect('mongodb://localhost:27020/MyDele');
    console.log("database is connected", db.connection.db.databaseName)
  } catch (err) {
    throw new DataBaseError();
  }
}   


      
    
    
