import express from "express";
import User from "../models/User.js";

const router = express.Router();

// REGISTRO
router.post("/register", async (req, res) => {
  try {
    console.log("📩 DATOS RECIBIDOS:", req.body);

    const { user, email, password } = req.body;

    // Validar campos
    if (!user || !email || !password) {
      return res.status(400).json({ mensaje: "Faltan datos" });
    }

    // Verificar si ya existe
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "El usuario ya existe" });
    }

    // Crear usuario
    const nuevoUsuario = new User({ user, email, password });
    await nuevoUsuario.save();

    console.log("✅ USUARIO GUARDADO:", nuevoUsuario);

    res.json({ mensaje: "Usuario guardado 🔥" });

  } catch (error) {
    console.error("❌ ERROR REGISTER:", error);
    res.status(500).json({ mensaje: "Error en registro" });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("🔐 LOGIN:", req.body);

    const { email, password } = req.body;

    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ mensaje: "Usuario no existe" });
    }

    if (usuario.password !== password) {
      return res.status(400).json({ mensaje: "Contraseña incorrecta" });
    }

    console.log("✅ LOGIN OK:", usuario);

    res.json({
      mensaje: "Login exitoso",
      usuario
    });

  } catch (error) {
    console.error("❌ ERROR LOGIN:", error);
    res.status(500).json({ mensaje: "Error en login" });
  }
});

export default router;