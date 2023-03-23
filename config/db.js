import mongoose from "mongoose";
import dotenv from "dotenv";
import Logger from "./logger.js";

dotenv.config();

async function connect() {
  try {
    const dbUri = process.env.DB_CONN_STR;

    await mongoose.connect(dbUri);

    Logger.info("Conectou ao banco de dados");
  } catch (error) {
    Logger.error(`Não foi possível conectar ao banco de dados: ${error}`);

    process.exit(1);
  }
}

export default connect;
