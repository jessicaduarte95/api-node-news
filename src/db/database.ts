import mongoose from "mongoose";
import config from "config";

interface DBConfig {
  url: string;
  dbname: string;
}

const dbConfig = config.get<DBConfig>("database");

export async function connectDB(): Promise<void> {
  try {
    const url = `mongodb://${dbConfig.url}/${dbConfig.dbname}`;
    console.log("CONN: ", `mongodb://...@${dbConfig.url}/${dbConfig.dbname}`);

    await mongoose.connect(url);

    console.log("Conexão com MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o MongoDB: ", error);
  }
}
