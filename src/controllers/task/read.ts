import { Request,Response } from "express";
import prisma from "../../../prisma/index";

const Read=async (req:Request,res:Response)=>{
    try{
        const data=await prisma.task.findMany();
        res.status(200).json({
            msg:data
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error reading data!"
        })
    }
}

export default Read;