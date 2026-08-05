import express from "express"
const app = express()
const PORT = 5000
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Server is running!");
});
app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
})