import { Router } from "express";
import { createRemedio, getRemedio, getRemedios, baixaRemedio } from "./controllers/remedioController.js";
import { body, validationResult } from "express-validator";

const router = Router();

export default router
  .get("/test", (req, res) => {
    res.status(200).send("API Working ✅");
  })

  .get("/getRemedios", getRemedios)

  .get("/getRemedio/:id", (req, res) => {
    const id = req.params.id

    if (!id) {
      return res.status(400).json({ errors: "Missing ID param !!" });
    }

    getRemedio(id, res);
  })

  .post(
    "/createRemedio",

    body("nome").isString().withMessage("O nome é obrigatório"),
    body("dataVencimento")
      .isString()
      .withMessage("A data de vencimento é obrigatória"),
    body("status").isString().withMessage("O status é obrigatório"),
    body("lab").isString().withMessage("O laboratório é obrigatório"),
    body("estoque").isString().withMessage("O estoque é obrigatório"),
    body("dataInclusao")
      .isString()
      .withMessage("A data de inclusão é obrigatória"),
    body("receita").isBoolean().withMessage("A receita é obrigatória"),

    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      createRemedio(req, res);
    }
  )

  .post(
    "/baixaRemedio",

    body("status").isString().withMessage("O status é obrigatório"),
    body("paciente").isString().withMessage("O paciente é obrigatório"),

    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      baixaRemedio(req, res);
    }
  )