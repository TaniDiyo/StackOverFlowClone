import Answer from "../models/answers.model.js";

// Create Answer
export const createAnswer = async (req, res) => {
  try {
    const { answer, userId, questionId } = req.body;

    const newAnswer = await Answer.create({
      answer,
      userId,
      questionId,
    });

    res.status(201).json({
      success: true,
      message: "Answer created successfully",
      answer: newAnswer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Answers
export const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find()
      .populate("userId")
      .populate("questionId");

    res.status(200).json({
      success: true,
      answers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Answer
export const updateAnswer = async (req, res) => {
  try {
    const updatedAnswer = await Answer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedAnswer) {
      return res.status(404).json({
        success: false,
        message: "Answer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Answer updated successfully",
      answer: updatedAnswer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Answer
export const deleteAnswer = async (req, res) => {
  try {
    const deletedAnswer = await Answer.findByIdAndDelete(req.params.id);

    if (!deletedAnswer) {
      return res.status(404).json({
        success: false,
        message: "Answer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Answer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};