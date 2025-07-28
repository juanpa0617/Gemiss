import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import {
  getUserByEmailService, //servicio pendiente 
  createUserService,
  getUserByIdService,
} from "../services/user_Services.js";
import User from "../models/users_Model.js";

export const loginService = async (email, password) => {
  try {
    // Buscar usuario por email con el rol incluido
    const user = await User.findOne({
      where: { email, status: "active" },
      include: [
        {
          model: Role,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    });

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      throw new Error("Credenciales inválidas");
    }

    // Actualizar última conexión
    await User.update(
      { last_connection: new Date() },
      { where: { id: user.id } }
    );

    // Generar tokens
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role.name,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
      user: {
        id: user.id,
        uuid: user.uuid,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role.name,
      },
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

export const registerService = async (userData) => {
  try {
    // Verificar si el email ya existe
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error("El email ya está registrado");
    }

    // Crear nuevo usuario (el hash de la contraseña se hace en el hook del modelo)
    const newUser = await createUserService({
      ...userData,
      id_role: userData.id_role || 2, // Rol de cliente por defecto
      status: "active",
    });

    // Obtener el usuario con el rol incluido
    const userWithRole = await User.findByPk(newUser.id, {
      include: [
        {
          model: Role,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    });

    // Generar tokens
    const payload = {
      userId: userWithRole.id,
      email: userWithRole.email,
      role: userWithRole.role.name,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
      user: {
        id: userWithRole.id,
        uuid: userWithRole.uuid,
        name: userWithRole.name,
        lastname: userWithRole.lastname,
        email: userWithRole.email,
        role: userWithRole.role.name,
      },
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

export const refreshTokenService = async (refreshToken) => {
  try {
    const decoded = verifyToken(refreshToken);
    const user = await getUserByIdService(decoded.userId);

    if (!user || user.status !== "active") {
      throw new Error("Usuario no válido");
    }

    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role.name,
    };

    const newAccessToken = generateAccessToken(payload);

    return { accessToken: newAccessToken };
  } catch (error) {
    throw new Error("Refresh token inválido");
  }
};

