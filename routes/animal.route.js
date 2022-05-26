import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.criarAnimal);
router.put("/", AnimalController.atualizarAnimal);
router.delete("/:id", AnimalController.excluirAnimal);
router.get("/", AnimalController.consultarAnimais);
router.get("/:id", AnimalController.consultarAnimal);

export default router;