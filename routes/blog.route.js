import express from "express";
import BlogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", BlogController.cadastrarPost);
router.get("/", BlogController.consultarPosts);
router.post("/comentario", BlogController.cadastrarComentario);

export default router;