import { Request,Response } from "express"
import prisma from "../../../prisma/index";

const Create=async (req:Request,res:Response)=>{
    try{
        const action=await prisma.room.create({
            data:{
                name:req.body.name,
                admin:{
                    connect:{
                        id:req.body.userId
                    }
                }
            }
        });
        res.status(200).json({
            msg:action
        });
    }
    catch(err){
        res.status(400).json({
            msg:err
        });
    }
}

export default Create;