import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp=async (req,res)=>{
    try {
        const {firstName,lastName,userName,email,password}=req.body
       let existEmail=await User.findOne({email})
       if(existEmail){
        return res.status(400).json({message:"email already exist !"})
       }
       let existUsername=await User.findOne({userName})
       if(existUsername){
        return res.status(400).json({message:"userName already exist !"})
       }
       if(password.length<8){
        return res.status(400).json({message:"password must be at least 8 characters"})
       }
      
       let hassedPassword=await bcrypt.hash(password,10)
      
       const user=await User.create({
        firstName,
        lastName,
        userName,
        email,
        password:hassedPassword
       })

       let token=await genToken(user._id)
       res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:process.env.NODE_ENVIRONMENT==="production"
       })
      return res.status(201).json(user)

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"signup error"})
   
    }
}