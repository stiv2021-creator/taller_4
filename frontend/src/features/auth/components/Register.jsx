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
        alert(data.mensaje || "¡Registro exitoso! Ya puedes iniciar sesión.");
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
      sx={{ background: "linear-gradient(135deg,#0d0d0d,#1a1a1a)" }}
    >
      <Card sx={{
        width: 380, p: 2, borderRadius: 3,
        backgroundColor: "#111", color: "#fff",
        boxShadow: "0 0 25px rgba(255,46,46,0.3)" // Mantenemos tu estilo exacto
      }}>
        <CardContent>

          <Box display="flex" justifyContent="center" mb={1}>
            <CheckroomIcon sx={{ fontSize: 40, color: "#ff2e2e" }} />
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
                    <PersonIcon sx={{ color: "#ff2e2e" }} />
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#fff" }, 
                label: { color: "#aaa" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#ff2e2e" },
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
                    <EmailIcon sx={{ color: "#ff2e2e" }} />
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#fff" }, 
                label: { color: "#aaa" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#ff2e2e" },
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#ff2e2e" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ color: "#fff" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ 
                input: { color: "#fff" }, 
                label: { color: "#aaa" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#333" },
                  "&:hover fieldset": { borderColor: "#ff2e2e" },
                }
              }}
            />

            <Button type="submit" fullWidth variant="contained"
              disabled={!formularioValido}
              sx={{ 
                mt: 2, 
                bgcolor: "#ff2e2e", 
                fontWeight: "bold",
                "&:hover": { bgcolor: "#cc0000" } 
              }}
            >
              Registrarse
            </Button>

            <Typography textAlign="center" mt={2} fontSize="0.9rem">
              ¿Ya tienes cuenta?{" "}
              <span
                style={{ color: "#ff2e2e", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Inicia sesión
              </span>
            </Typography>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;