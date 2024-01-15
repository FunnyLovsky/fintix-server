import { Router } from 'express';
import { ActionController } from '../controllers/actionsController';

const router = Router();

router.get('/actions', ActionController.getActions);
router.post('/actions', ActionController.create);
router.put('/actions', ActionController.update);
router.delete('/actions', ActionController.delete);
router.post('/import', ActionController.parseFile);
router.post('/export', ActionController.createFile);

export default router;
