import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async() => {
   try {
   const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
   console.log(`\n DB sucessfully conected !! DB HOST: ${ConnectionInstance.connection.HOST}`); 
   } catch (error) {
   console.log("the connection failled:", error)
   process.exit(1);
   }
}

export default connectDB