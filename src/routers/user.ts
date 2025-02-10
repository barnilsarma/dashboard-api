import Router from "express";
import * as Controllers from "../controllers";
const router=Router();
router.post('/',Controllers.User.Create);
router.get('/:id',Controllers.User.Read);
router.get('/',Controllers.User.ReadAll);
router.patch('/:id',Controllers.User.Update);
router.delete('/:id',Controllers.User.Delete);

export default router;