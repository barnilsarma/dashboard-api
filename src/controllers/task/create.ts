import prisma from "../../../prisma";
import { Request,Response } from "express";

const Create=async (req:Request,res:Response)=>{
    try{
        const action=await prisma.task.create(
            {
                data:{
                    name:req.body.name,
                    due:req.body.due,
                    status:req.body.status,
                    assigned:req.body.assigned,
                    Room:{
                        connect:{
                            id:req.body.roomId
                        }
                    }
                }
            }
        );
        res.status(200).json({
            msg:action
        });
    }
    catch(err){
        res.status(400).json({
            msg:"Error creating task!!"
        })
    }
}

export default Create;