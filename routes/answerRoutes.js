import express from "express"
import { createAnswer, getAllAnswers, deleteAnswer, updateAnswer } from "../controllers/answercontroller.js";
const router = express.Router();

router.post("/",createAnswer);
router.get("/",getAllAnswers);
router.put("/:id",updateAnswer);
router.delete("/:id",deleteAnswer);

export default router;