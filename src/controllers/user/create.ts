import prisma from "../../../prisma";
import { Request,Response } from "express";

const Create=async (req:Request,res:Response)=>{
    try{
        const action=await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email
            }
        });
        res.status(200).json({
            msg:action
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error creating user!!"
        });
    }
}

export default Create;