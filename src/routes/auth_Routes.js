import express from 'express';
import { 
  loginController, 
  registerController, 
  refreshTokenController, 
  logoutController, 
  getProfileController 
} from '../controller/auth_Controller.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

// Rutas públicas
router.post('/login', loginController);
router.post('/register', registerController);
router.post('/refresh-token', refreshTokenController);

// Rutas protegidas
router.post('/logout', authenticateToken, logoutController);
router.get('/profile', authenticateToken, getProfileController);

export default router;