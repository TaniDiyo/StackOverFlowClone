import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from "dns";

import userRoutes from "./routes/userRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

connectDB();

const app = express();   // Create app FIRST

app.use(express.json()); // Middleware

// Routes
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/comments", commentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});