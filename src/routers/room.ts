import Router from "express";
import * as Controllers from "../controllers";
const router=Router();
router.post('/',Controllers.Room.Create);
router.get('/:id',Controllers.Room.Read);
router.patch('/:id',Controllers.Room.Update);
router.delete('/:id',Controllers.Room.Delete);

export default router;