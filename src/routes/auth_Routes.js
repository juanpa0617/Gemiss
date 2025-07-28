import express from 'express';
import { 
  login, 
  register, 
  refreshToken, 
  logout, 
  getProfile 
} from '../controllers/auth_Controller.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Rutas públicas
router.post('/login', login);
router.post('/register', register);
router.post('/refresh-token', refreshToken);

// Rutas protegidas
router.post('/logout', authenticateToken, logout);
router.get('/profile', authenticateToken, getProfile);

export default router;