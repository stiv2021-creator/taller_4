import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// conectar a mongo
connectDB();

// rutas
app.use("/api/auth", authRoutes);

// servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001 🚀");
});