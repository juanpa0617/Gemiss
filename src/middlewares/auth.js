import { verifyToken } from "../utils/jwt";
import { getUserByIdService } from "../services/user_Services.js";

export const authenticateToken = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }

    const decoded = verifyToken(token);
    const user = await getUserByIdService(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    if (!user.status) {
      return res.status(401).json({ message: "Usuario no activo" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalido o expirado" });
  }

};

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        error: 'Usuario no autenticado' 
      });
    }

    const userRole = req.user.role.name;
    
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ 
        error: 'No tienes permisos para acceder a este recurso' 
      });
    }

    next();
  };
};