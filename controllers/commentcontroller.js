import comment  from "../models/comments";

export const CommentController = async (req,res)=>{
    const {comment,userId,QuestionId}=req.body;
 //crate comment
    const comment = await comment.create({
        comment,userId,QuestionId,
    });
    const savedComment = await comment.save();
    res.status(200).json({
        message:"successfull",
        comment: savedComment,
    });

    //delete comment
    const deleteComment = async (req,res)=>{
        const deleteComment = await comment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Successfully deleted",
            comment: deleteComment,
        });

    //update comment 

    const updateComment = async (req,res) =>{
        const updateComment = await comment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Successfully updated",
        });
    }
    }
}