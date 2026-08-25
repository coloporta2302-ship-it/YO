import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Backend funcionando" });
});

app.use("/api/auth", authRoutes);

const startServer = async () => {
  if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
    throw new Error("Faltan MONGODB_URI o JWT_SECRET en el archivo .env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB conectado");

  app.listen(PORT, () => {
    console.log(`Backend ejecutándose en http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("No se pudo iniciar el servidor:", error.message);
  process.exit(1);
});
