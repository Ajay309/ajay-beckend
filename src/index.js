import dotenv from "dotenv";
import connectDB from "./db";


dotenv.config({
    path:'.env'
})

connectDB()











// import { express } from "express";

// const app = express()
// ( async() => {
//     try {
//      await   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error" , (error)=> {
//         console.log("ERR:" , error);
//         throw error

        
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log(`app is listning on port ${process.env.PORT}`);
//      })
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err
//     }
// }) ()