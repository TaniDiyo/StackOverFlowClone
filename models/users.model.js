import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    profilePic:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        maxlength:100,
    },
},
{
        timestamps: true,
    });

    const User =mongoose.model("User",userSchema);
    export default User;