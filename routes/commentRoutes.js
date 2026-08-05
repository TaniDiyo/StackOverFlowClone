import express from "express"
import { createComment, deleteComment, updateComment } from "../controllers/commentcontroller.js";
const router = express.Router();

router.get("/",createComment);
router.delete("/:id",deleteComment);
router.put("/:id",updateComment);

export default router;