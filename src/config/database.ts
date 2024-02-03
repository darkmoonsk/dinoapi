import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString =
      process.env.NODE_ENV === "test"
        ? process.env.TEST_DATABASE_URL
        : process.env.DATABASE_URL;

    console.log(connectionString);
    await mongoose.connect(connectionString ?? "", {
      // Opções adicionais podem ser colocadas aqui
      dbName: "dinoapi",
    });
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("Desconectado do MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao desconectar do MongoDB:", error);
  }
};

export { connectDB, disconnectDB };
