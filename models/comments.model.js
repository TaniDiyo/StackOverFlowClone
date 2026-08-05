import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    QuestionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
    },
    AnswerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answer",
    }
},
{
    timeStamps:true,
});

const Comment = mongoose.model("comment",commentSchema);
export default Comment;