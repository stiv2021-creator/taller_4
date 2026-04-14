import React, { useState } from "react";
import {
  Box, Card, CardContent, TextField, Button, Typography,
  InputAdornment, IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export const Myaccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // --- CONFIGURACIÓN DE URL DINÁMICA ---
  const API_URL = window.location.hostname === "localhost" 
    ? "http://localhost:3001" 
    : "https://taller-4-cc82.onrender.com";

  const validarEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const validarPassword = (p) => /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(p);

  const formularioValido = email !== "" && password !== "" && validarEmail(email) && validarPassword(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formularioValido) return;

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Inicio de sesión exitoso 🔥");
        
        localStorage.setItem("user", JSON.stringify(data.usuario || data));
        window.dispatchEvent(new Event("storage"));

        // Redirección absoluta para evitar problemas de rutas
        navigate("/Article", { replace: true }); 
        
      } else {
        // Mostramos el mensaje exacto que viene del backend
        alert(data.mensaje || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("ERROR LOGIN:", error);
      alert("Error de conexión. El servidor de Render puede estar despertando, intenta de nuevo en 20 segundos.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ background: "linear-gradient(135deg,#f8f9fa,#ffffff)" }}>
      <Card sx={{ 
        width: 380, 
        p: 2, 
        borderRadius: 3, 
        style: { backgroundColor: "#f8f9fa", color: "#333" }, 
        boxShadow: "0 0 25px rgba(0,102,204,0.3)" 
      }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={1}>
            <CheckroomIcon sx={{ fontSize: 40, color: "#0066cc" }} />
          </Box>
          <Typography variant="h5" textAlign="center" fontWeight="bold">Control de Gastos</Typography>
          <Typography variant="body2" textAlign="center" mb={3} color="gray">Inicia sesión para gestionar tus gastos</Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Correo" margin="normal" value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                  "&.Mui-focused fieldset": { borderColor: "#0066cc" }
                }
              }}
            />
            <TextField
              fullWidth label="Contraseña" type={showPassword ? "text" : "password"} margin="normal" value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                  "&.Mui-focused fieldset": { borderColor: "#0066cc" }
                }
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={!formularioValido} 
              sx={{ 
                mt: 2, 
                color: "#fff", 
                backgroundColor: "#0066cc", 
                fontWeight: "bold", 
                "&:hover": { backgroundColor: "#003399" },
                "&.Mui-disabled": { backgroundColor: "#cccccc", color: "#666" } 
              }}
            >
              Acceder
            </Button>
            <Typography textAlign="center" mt={2} fontSize="0.9rem">
              ¿No tienes cuenta?{" "}
              <span 
                style={{ color: "#0066cc", cursor: "pointer", fontWeight: "bold" }} 
                onClick={() => navigate("/Register")}
              >
                Regístrate
              </span>
            </Typography>
            <Typography textAlign="center" mt={1} fontSize="0.8rem" color="#666">
              Al iniciar sesión, aceptas nuestros{" "}
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

export default Myaccount;