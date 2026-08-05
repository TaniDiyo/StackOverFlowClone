import mongoose from "mongoose"

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected sucessfuly");
    }catch(error){
        console.log("Error in connecting server",error);
    }
}

export default connectDB;