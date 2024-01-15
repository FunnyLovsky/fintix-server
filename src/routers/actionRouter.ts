import { Router } from 'express';
import { ActionController } from '../controllers/actionsController';

const router = Router();

router.get('/actions', ActionController.getActions);
router.post('/create', ActionController.create);
router.put('/update', ActionController.update);
router.delete('/delete', ActionController.delete);
router.post('/import', ActionController.parseFile);
router.post('/export', ActionController.createFile);

export default router;
