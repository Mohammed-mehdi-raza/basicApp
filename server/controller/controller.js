import user from "../models/user.js";

export const login = async(req,res)=>{
    let {username,password} = req.body;
    try {
        let existingUser = await user.findOne({username});
        if(existingUser){
            res.status(200).json({data:existingUser});
        }else{
            res.status(400).json({message:"user does not exists. Please Register first !!!!"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message});
    }
}

export const register = async(req,res)=>{
    let {username,password} = req.body;
    try{
        let existingUser = await user.findOne({username});
        if(existingUser){
            res.status(400).json({message:"user already exists"});
        }else{
            let result = await user.create({username,password});
            res.status(200).json({data:result});
        }
    }catch(error){
        console.log(error);
        res.status(400).json({message:error.message});
    }
}
