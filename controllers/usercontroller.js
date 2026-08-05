import userModel from "../models/user.model.js";

export const registerUser = async (req,res) =>{
    try{
        const{name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Please fill all the details",
            });
        }
        const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.status(400).json({
            message:"User exists",
        });
    }

    const user = await userModel.create({
        name,email,password,
    });
    res.status(201).json
({
    sucess:true,
    message:"user registered suceessfully",
    user,
});
    } catch(error){
        res.status(500).json({
            message:"error",
        });
    }

};