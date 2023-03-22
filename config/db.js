import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

async function connect() {
  try {
    const dbUri = process.env.DB_CONN_STR;

    await mongoose.connect(dbUri);
    console.log("Conectou ao banco de dados");
  } catch (error) {
    console.log("Erro ao conectar com banco de dados", error);

    process.exit(1);
  }
}

export default connect;
