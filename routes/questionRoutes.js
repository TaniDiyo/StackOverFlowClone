import express from "express"
import { createQuestion, getAllQuestions, deleteQuestion } from "../controllers/questionController.js";
const router = express.Router();

router.post("/",createQuestion);
router.get("/",getAllQuestions);
router.delete("/:id", deleteQuestion);

export default router;