import mongoose from "mongoose";
import ComentarioSchema from "./comentario.schema.js";

const PostBlogSchema = new mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
    comentarios: [ComentarioSchema]
  }, { collection: "posts" }
);

export default PostBlogSchema;