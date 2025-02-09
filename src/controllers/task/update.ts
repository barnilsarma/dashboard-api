import { Request, Response } from "express";
import prisma from "../../../prisma";

const Update = async (req: Request, res: Response) => {
    try {
        const upd = await prisma.task.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                due: req.body.due,
                status: req.body.status,
                assigned: req.body.assigned
            }
        });
        res.status(200).json({
            msg: upd
        });
    }
    catch (err) {
        res.status(400).json({
            msg: "Error updating task!"
        })
    }
}

export default Update;