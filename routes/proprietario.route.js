import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", ProprietarioController.criarProprietario);
router.put("/", ProprietarioController.atualizarProprietario);
router.delete("/:id", ProprietarioController.excluirProprietario);
router.get("/", ProprietarioController.consultarProprietarios);
router.get("/:id", ProprietarioController.consultarProprietario);

export default router;