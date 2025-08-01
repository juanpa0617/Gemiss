
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken, verifyToken } from "../utils/jwt.js";
import {
  createUserService,
  getUserByIdService,
} from "../services/user_Services.js";
import User from "../models/users_Model.js";
import Role from "../models/role_Model.js";

export const loginService = async (email, password) => {
  try {
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

    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      throw new Error("Credenciales inválidas");
    }

    await User.update(
      { last_connection: new Date() },
      { where: { id: user.id } }
    );

    const payload = {
      id: user.id, 
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
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error("El email ya está registrado");
    }

    const newUser = await createUserService({
      ...userData,
      id_role: userData.id_role || 2,
      status: "active",
    });

    const userWithRole = await User.findByPk(newUser.id, {
      include: [
        {
          model: Role,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    });

    const payload = {
      id: userWithRole.id, 
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
    const user = await getUserByIdService(decoded.id); 

    if (!user || user.status !== "active") {
      throw new Error("Usuario no válido");
    }

    const payload = {
      id: user.id, 
      email: user.email,
      role: user.role.name,
    };

    const newAccessToken = generateAccessToken(payload);

    return { accessToken: newAccessToken };
  } catch (error) {
    throw new Error("Refresh token inválido");
  }
};