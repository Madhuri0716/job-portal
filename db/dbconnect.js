import mongoose from "mongoose";

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.mongodb_uri);
        console.log("data base connected");
    } catch (error) {
        console.log(error);
    }
    
    }
export default connectdb

