import { Request,Response } from "express";
import prisma from "../../../prisma";

const Delete=async (req:Request,res:Response)=>{
    try{
        const data=await prisma.room.delete({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({
            msg:"Successfully deleted room!"
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error deleting data!"
        });
    }
}

export default Delete;