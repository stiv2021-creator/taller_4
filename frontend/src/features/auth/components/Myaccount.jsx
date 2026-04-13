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

  const validarEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const validarPassword = (p) => /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(p);

  const formularioValido = email !== "" && password !== "" && validarEmail(email) && validarPassword(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formularioValido) return;

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Inicio de sesión exitoso 🔥");
        
        // 1. Guardamos el usuario
        localStorage.setItem("user", JSON.stringify(data.usuario || data));

        // 2. Avisamos al Header del cambio de sesión
        window.dispatchEvent(new Event("storage"));

        // 3. ✅ REDIRECCIÓN CORREGIDA PARA HASHROUTER
        // Usamos ruta relativa sin el "/" al inicio para que se mantenga tras el #
        navigate("../Article", { replace: true }); 
        
      } else {
        alert(data.mensaje || "Error en el login");
      }
    } catch (error) {
      console.error("ERROR LOGIN:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ background: "linear-gradient(135deg,#0d0d0d,#1a1a1a)" }}>
      <Card sx={{ width: 380, p: 2, borderRadius: 3, backgroundColor: "#111", color: "#fff", boxShadow: "0 0 25px rgba(255,46,46,0.3)" }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={1}><CheckroomIcon sx={{ fontSize: 40, color: "#ff2e2e" }} /></Box>
          <Typography variant="h5" textAlign="center" fontWeight="bold">Gorras Store</Typography>
          <Typography variant="body2" textAlign="center" mb={3} color="gray">Inicia sesión para comprar</Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Correo" margin="normal" value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ startAdornment: (<InputAdornment position="start"><EmailIcon sx={{ color: "#ff2e2e" }} /></InputAdornment>) }}
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
              fullWidth label="Contraseña" type={showPassword ? "text" : "password"} margin="normal" value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (<InputAdornment position="start"><LockIcon sx={{ color: "#ff2e2e" }} /></InputAdornment>),
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
            <Button type="submit" variant="contained" fullWidth disabled={!formularioValido} sx={{ mt: 2, bgcolor: "#ff2e2e", fontWeight: "bold", "&:hover": { bgcolor: "#cc0000" } }}>
              Acceder
            </Button>
            <Typography textAlign="center" mt={2} fontSize="0.9rem">
              ¿No tienes cuenta? <span style={{ color: "#ff2e2e", cursor: "pointer" }} onClick={() => navigate("../Register")}>Regístrate</span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
  
};

export default Myaccount;