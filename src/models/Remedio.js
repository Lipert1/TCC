import { model, Schema } from "mongoose";

const remedioSchema = new Schema(
  {
    nome: String,
    dataVencimento: String,
    status: String,
    lab: String,
    estoque: String,
    dataInclusao: String,
    receita: Boolean,
    paciente: String
  },
  {
    timestamps: true,
  }
);

export const RemedioModel = model("Remedio", remedioSchema);