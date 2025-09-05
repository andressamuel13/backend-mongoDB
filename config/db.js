import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = 'testdb';

export const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log("Conectado exitosamente a MongoDB");

    const db = client.db(dbName); // ✅ Obtén la base de datos
    return db;
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    return null;
  }
};
