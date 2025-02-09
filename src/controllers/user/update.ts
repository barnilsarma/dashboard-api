import { Request,Response } from "express";
import prisma from "../../../prisma";

const Update=async (req:Request,res:Response)=>{
    try{
        const data=await prisma.user.update({
            where:{
                id:req.params.id
            },
            data:{
                
            }
        });
        res.status(200).json({
            msg:data
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error reading user data"
        });
    }
}

export default Update;