import { connectDB } from "../config/db.js";
import { ObjectId } from "mongodb";

export const crearUsuario = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("testcollection");

    const result = await collection.insertOne(req.body);
    res.status(201).json({
      message: "Usuario insertado correctamente",
      insertedId: result.insertedId,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error al insertar usuario",
      error: err.message,
    });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("testcollection");

    const result = await collection.find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener usuarios",
      error: err.message,
    });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("testcollection");
    const { id } = req.params;

    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      return res
        .status(400)
        .json({ message: "ID inválido. Debe ser un número." });
    }

    const result = await collection.findOne({
      id: idNum,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener usuario",
      error: err.message,
    });
  }
};
