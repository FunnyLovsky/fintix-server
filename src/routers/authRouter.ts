import { Router } from 'express';
import { AuthController } from '../controllers/authControlles';

const router = Router();

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/refresh', AuthController.refresh);

export default router;
