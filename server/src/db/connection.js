import mongoose, { mongo } from "mongoose";
import "dotenv/config";

const URI=process.env.MONGO_URI;
mongoose.set('strictQuery',false);

mongoose.connect(URI).then(()=>{
    console.log('connection to database successfull');
}).catch((e)=>{
    console.log('failed to connect to database due to error: '+e);
});