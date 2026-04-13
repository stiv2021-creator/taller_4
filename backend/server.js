import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; // Necesario para las rutas de archivos
import { fileURLToPath } from "url"; // Necesario para ES Modules
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Configuración para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// 1. RUTAS DE LA API
app.use("/api/auth", authRoutes);

// 2. SERVIR FRONTEND (Añade esto para que no salga 404)
// Apuntamos a la carpeta dist que genera Vite
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// 3. RUTA COMODÍN
// Cualquier ruta que no sea de la API, devuelve el index.html del frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// 4. PUERTO DINÁMICO (Fundamental para Render/Vercel)
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});