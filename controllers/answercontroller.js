import Answer from "../models/answers.model.js";

export const answerController = async (req,res)=>{
    const {answer,userId,QuestionId} = res.body;
    const answer = await Answer.create({
        answer,QuestionId, userId,
    });
    const savedAnswer = await answer.save();
    res.status(201).json({
        message:"successfull",
        answer: savedAnswer,
    });
    const getAllanswers = async (req,res)=>{
        res.status(200).json({
            message:"Successfull",
            answer:await Answer.find().populate("userId").populate("QuestionId"),
        });
    const updateAnswer = async (req,res)=>{
        const updateAnswer = await Answer.findByIdAndUpdate(req.params.id,
      req.body,
      { new: true, runValidators: true }
        );
        res.status(200).json({
            message:"Successfull",
            answer: updateAnswer,
        });
    }
    }
}