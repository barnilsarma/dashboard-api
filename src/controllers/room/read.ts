import { Request,Response } from "express";
import prisma from "../../../prisma";

const Read=async (req:Request,res:Response)=>{
    try{
        const data=await prisma.room.findUnique({
            where:{
                id:req.params.id
            },
            include:{
                admin:true,
                tasks:true
            }
        });
        res.status(200).json({
            msg:data
        });
    }
    catch(err){
        res.status(400).json({
            msg:err
        });
    }
}

export default Read;