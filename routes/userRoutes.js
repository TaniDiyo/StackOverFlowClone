import express from "express";
import { registerUser } from "../controllers/usercontroller.js";

const router = express.Router();
router.get("/register", (req, res) => {
    res.send("User Register Route");
});
router.post("/register", registerUser);

export default router;