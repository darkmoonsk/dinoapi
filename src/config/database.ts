import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "", {
      // Opções adicionais podem ser colocadas aqui
      dbName: "dinoapi"
    });
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export default connectToDatabase;
