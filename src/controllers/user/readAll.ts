import prisma from "../../../prisma";
import { Response, Request } from "express";

const ReadAll = async (req: Request, res: Response) => {
    try {
        const data = await prisma.user.findMany();
        res.status(200).json({
            msg: data
        });
    }
    catch (err) {
        res.status(200).json({
            msg: err
        });
    }
}

export default ReadAll;