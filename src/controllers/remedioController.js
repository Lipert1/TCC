import { RemedioModel } from "../models/Remedio.js";

export async function createRemedio(req, res) {
  try {
    const data = req.body
    const remedio = await RemedioModel.create(data)

    return res.status(201).json(remedio)
  } catch (error) {
    return res.status(500).json()
  }
}

export async function getRemedios(req, res) {
  try {
    const remedios = await RemedioModel.find()

    return res.status(200).json(remedios)
  } catch (error) {
    return res.status(400).json()
  }
}

export async function getRemedio(id, res) {
  try {
    const remedio = await RemedioModel.findById(id)

    return res.status(200).json(remedio)
  } catch (error) {
    return res.status(400).json()
  }
}

//TODO: 
export async function baixaRemedio(req, res) {
  try {
    // não apagar do banco, apenas modificar o status dele para USED 
    //e colocar o nome/id do paciente que foi destinado
    console.log(req)
    
  } catch (error) {
    
  }
}

//TODO: export async function updateRemedio()