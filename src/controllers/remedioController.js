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

export async function baixaRemedio(req, res) {
  try {
    
  } catch (error) {
    
  }
}

//export async function updateRemedio()