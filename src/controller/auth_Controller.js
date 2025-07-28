import {
  loginService,
  registerService,
  refreshTokenService,
} from "../services/auth_Services.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email y contraseña son requeridos",
      });
    }

    const result = await loginService(email, password);

    res.status(200).json({
      success: true,
      message: "Login exitoso",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

export const registerController = async (req, res) => {
  try {
    const { name, lastname, email, password, telefono, birthdate } = req.body;

    if (!name || !lastname || !email || !password) {
      return res.status(400).json({
        error: "Nombre, apellido, email y contraseña son requeridos",
      });
    }

    const userData = {
      name,
      lastname,
      email,
      password_hash: password, // Se hasheará en el hook del modelo
      telefono,
      birthdate,
    };

    const result = await registerService(userData);

    res.status(201).json({
      success: true,
      message: "Usuario registrado exitosamente",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const refreshTokenController = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        error: "Refresh token requerido",
      });
    }

    const result = await refreshTokenService(refreshToken);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout exitoso",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getProfileController = async (req, res) => {
  try {
    const user = req.user; // Viene del middleware de autenticación

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        uuid: user.uuid,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        telefono: user.telefono,
        birthdate: user.birthdate,
        role: user.role.name,
        status: user.status,
        date_created: user.date_created,
        last_connection: user.last_connection,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
