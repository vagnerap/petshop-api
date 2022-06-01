import express from "express";
import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.criarServico);
router.get("/", ServicoController.consultarServicos);

export default router;