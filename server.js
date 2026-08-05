import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Server is running!");
});

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
})