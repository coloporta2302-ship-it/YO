import { Router } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/User.js";
import { authenticate, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(authenticate, requireAdmin);

// GET /api/admin/users - listar usuarios
router.get("/users", async (_req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al listar usuarios" });
  }
});

// PUT /api/admin/users/:id - editar usuario
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, password } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de usuario inválido" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (name !== undefined) user.name = String(name).trim();
    if (email !== undefined) user.email = String(email).toLowerCase().trim();
    if (role !== undefined) {
      if (!["user", "admin", "seller"].includes(role)) {
        return res.status(400).json({ message: "Rol inválido" });
      }
      user.role = role;
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
      }
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.json({ message: "Usuario actualizado", user: user.toJSON() });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }
    console.error(error);
    res.status(500).json({ message: "Error al editar el usuario" });
  }
});

// PATCH /api/admin/users/:id/ban - banear/desbanear usuario
router.patch("/users/:id/ban", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de usuario inválido" });
    }

    if (String(req.user._id) === id) {
      return res.status(400).json({ message: "No podés banearte a vos mismo" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.banned = !user.banned;
    await user.save();

    res.json({
      message: user.banned ? "Usuario baneado" : "Usuario desbaneado",
      user: user.toJSON(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al cambiar el estado del usuario" });
  }
});

// DELETE /api/admin/users/:id - eliminar usuario
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de usuario inválido" });
    }

    if (String(req.user._id) === id) {
      return res.status(400).json({ message: "No podés eliminarte a vos mismo" });
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
});

export default router;
