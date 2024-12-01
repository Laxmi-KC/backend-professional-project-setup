import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`);
            console.log(`\n MongodDB connected..  DB HOST : ${connectionInstance.connection.host}`);
            
            

    }catch (error){
        console.log("Mongodb connection error", error);
        // console.log("mongodburi", process.env.MONGODB_URI);
        process.exit(1);
        
    }
}

export default connectDB;