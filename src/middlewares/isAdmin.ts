import { Request,Response,NextFunction } from "express";

interface userType extends Request{
    type:string
}

const isAdmin=async (req:userType,res:Response,next:NextFunction)=>{
    try{
        if(req.type==="ADMIN"){
            res.status(200).json({
                msg:"Admin authorized successfully!!"
            });
            next();
        }
        else{
            res.status(400).json({
                msg:"Unauthorized Admin!!"
            });
        }
    }
    catch(err){
        res.status(400).json({
            msg:err
        });
    }
}

export default isAdmin;