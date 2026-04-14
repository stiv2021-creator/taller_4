import React, { useState } from "react";
import {
  Box, Card, CardContent, TextField, Button, Typography,
  InputAdornment, IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // --- SOLUCIÓN AL ERROR DE CONEXIÓN ---
  // Si estás en tu PC usa localhost, si estás en la nube usa Render
  const API_URL = window.location.hostname === "localhost" 
    ? "http://localhost:3001" 
    : "https://taller-4-cc82.onrender.com";

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const formularioValido =
    user !== "" &&
    email !== "" &&
    password !== "" &&
    validarEmail(email) &&
    validarPassword(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formularioValido) return;

    try {
      // ✅ Se cambió "http://localhost:3001" por la variable dinámica API_URL
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registro exitoso 🎉"); 
        navigate("/login");
      } else {
        alert(data.mensaje || "Error al registrar");
      }

    } catch (error) {
      console.error("DETALLE DEL ERROR:", error);
      alert("No se pudo conectar con el servidor. Verifica tu conexión a internet.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh"
      sx={{ background: "linear-gradient(135deg,#f8f9fa,#ffffff)" }}
    >
      <Card sx={{
        width: 380, p: 2, borderRadius: 3,
        backgroundColor: "#ffffff", color: "#333",
        boxShadow: "0 0 25px rgba(0,102,204,0.3)" // Tema azul/blanco
      }}>
        <CardContent>

          <Box display="flex" justifyContent="center" mb={1}>
            <CheckroomIcon sx={{ fontSize: 40, color: "#0066cc" }} />
          </Box>

          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Crear cuenta
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>

            <TextField
              fullWidth label="Usuario" margin="normal"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#0066cc" }} />
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#333" }, 
                label: { color: "#666" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc" },
                  "&:hover fieldset": { borderColor: "#0066cc" },
                }
              }}
            />

            <TextField
              fullWidth label="Correo" margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email !== "" && !validarEmail(email)}
              helperText={email !== "" && !validarEmail(email) ? "Correo inválido" : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#0066cc" }} />
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#333" }, 
                label: { color: "#666" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc" },
                  "&:hover fieldset": { borderColor: "#0066cc" },
                }
              }}
            />

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Contraseña"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Mínimo 8 caracteres, 1 mayúscula y 1 carácter especial (*, !, @, #, $, %, ^, &, *)"
              error={password !== "" && !validarPassword(password)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#0066cc" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ color: "#333" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#333" }, 
                label: { color: "#666" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc" },
                  "&:hover fieldset": { borderColor: "#0066cc" },
                }
              }}
            />

            <Button type="submit" fullWidth variant="contained"
              disabled={!formularioValido}
              sx={{ 
                mt: 2, 
                bgcolor: "#0066cc", 
                fontWeight: "bold",
                "&:hover": { bgcolor: "#0056b3" } 
              }}
            >
              Registrarse
            </Button>

            <Typography textAlign="center" mt={2} fontSize="0.9rem">
              ¿Ya tienes cuenta?{" "}
              <span
                style={{ color: "#0066cc", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Inicia sesión
              </span>
            </Typography>
            <Typography textAlign="center" mt={1} fontSize="0.8rem" color="#666">
              Al registrarte, aceptas nuestros{" "}
              <span style={{ fontWeight: "bold", color: "#0066cc" }}>términos y condiciones</span>
              {" "} y{" "}
              <span style={{ fontWeight: "bold", color: "#0066cc" }}>política de privacidad</span>
            </Typography>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;