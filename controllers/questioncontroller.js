import Question from "../models/questions.model.js";

export const questionController = async (req,res) =>{
    const {title,description,userId} = req.body;
    const question = await Question.create({
        title,
        description,
        userId,
    });

    const savedQuestion = await question.save();
    res.status(201).json({
        message:"successfull",
        question: savedQuestion,
    });

    const getAllQuestions = async (req,res)=>{
        res.status(200).json({
            message:"succesfull",
            question : await Question.find().populate("userId"),
        });

        const deleteQuestion = async (req,res)=>{
            const {id} = req.params;
            const question = await Question.findById(id);
            if(!question){
                return res.status(404).json({
                    message:"not found",
                });
            }
            await question.remove();
            res.status(200).json({
                message:"deleted",
            });

        }
    }
    
}