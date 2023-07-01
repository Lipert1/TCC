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

export async function getRemedios(res) {
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

export async function baixaRemedio(req, res) {
  try {
    const query = {'_id': req.body.id};

    const newRemedio = await RemedioModel.updateOne(query, { 
      status: "USED",
      paciente: req.body.paciente
    })

    return res.status(200).json(newRemedio)
  } catch (error) {
    return res.status(400).json()
  }
}

//TODO: export async function verifyRemediosVencidos()
// fazer isso na api ou em um lambda separado