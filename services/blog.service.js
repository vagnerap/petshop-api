import BlogRepository from "../repositories/blog.repository.js";

async function cadastrarPost(post) {
  await BlogRepository.cadastrarPost(post);
}

async function consultarPosts() {
  return await BlogRepository.consultarPosts();
}

async function cadastrarComentario(comentario, id) {
  await BlogRepository.cadastrarComentario(comentario, id);
}

export default {
  cadastrarPost,
  consultarPosts,
  cadastrarComentario
}