import { Request,Response } from "express";
import prisma from "../../../prisma";

const Delete=async (req:Request,res:Response)=>{
    try{
        const action=await prisma.task.delete({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({
            msg:"Successfully deleted the task!"
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error deleting task!"
        })
    }
}

export default Delete;