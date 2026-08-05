import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    QuestionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    answer:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

const answer = mongoose.model("answer",answerSchema);
export default answer;