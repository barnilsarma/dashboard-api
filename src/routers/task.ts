import Router from "express";
import * as Controllers from "../controllers";
const router=Router();
router.post('/',Controllers.Task.Create);
router.get('/read',Controllers.Task.Read);
router.patch('/:id',Controllers.Task.Update);
router.delete('/:id',Controllers.Task.Delete);

export default router;