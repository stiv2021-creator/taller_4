import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton
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
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, email, password })
      });

      const data = await res.json();

      alert(data.mensaje);

      if (res.ok) {
        navigate("/login");
      }

    } catch (error) {
      console.error(error);
      alert("Error al registrar");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh"
      sx={{ background: "linear-gradient(135deg,#0d0d0d,#1a1a1a)" }}
    >
      <Card sx={{
        width: 380, p: 2, borderRadius: 3,
        backgroundColor: "#111", color: "#fff"
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
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
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
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
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
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />

            <Button type="submit" fullWidth variant="contained"
              disabled={!formularioValido}
              sx={{ mt: 2, bgcolor: "#ff2e2e" }}
            >
              Registrarse
            </Button>

            <Typography textAlign="center" mt={2}>
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