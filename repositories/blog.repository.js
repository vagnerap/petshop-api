import { connect } from "./mongo.db.js";
import PostBlogSchema from "../schemas/post.schema.js";

async function cadastrarPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Posts", PostBlogSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function consultarPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Posts", PostBlogSchema);
    const query = Post.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function consultarPost(id) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Posts", PostBlogSchema);
    const query = Post.findOne({ _id: id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function atualizarPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Posts", PostBlogSchema);
    await Post.findOneAndUpdate({ _id: post.id }, post);
  } catch (err) {
    throw err;
  }
}

async function cadastrarComentario(comentario, id) {
  try {
    const post = await consultarPost(id);
    post.comentarios.push(comentario);
    await atualizarPost(post);
  } catch (err) {
    throw err;
  }
}

export default {
  cadastrarPost,
  consultarPosts,
  cadastrarComentario
}