import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100,
    },
    description:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    views:{
        type:Number,
        default:0,
    },
    acceptedAnswer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answer",
    }
},
{
    timestamps:true,
});

const Question = mongoose.model("Question",questionSchema);
export default Question;