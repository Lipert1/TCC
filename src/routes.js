import { Router } from "express";
import { createRemedio, getRemedios } from "./controllers/remedioController.js";

const router = Router()

export default router
    .get('/test', (req, res) => {
        res.status(200).send('API Working ✅')
    })
    .get('/remedio', getRemedios)
    .post('/remedio', createRemedio)