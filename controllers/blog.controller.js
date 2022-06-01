import BlogService from "../services/blog.service.js";

async function cadastrarPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Título e Conteúdo são obrigatórios!");
    }

    await BlogService.cadastrarPost(post);
    res.end();
    logger.info(`POST /post - ${ JSON.stringify(post) }`);
  } catch (err) {
    next(err);
  }
}

async function consultarPosts(req, res, next) {
  try {
    res.send(await BlogService.consultarPosts());
    logger.info("GET /get");
  } catch (err) {
    next(err);
  }
}

async function cadastrarComentario(req, res, next) {
  try {
    let params = req.body;
    /*
    if (!params.nome || !params.conteudo) {
      throw new Error("Nome e conteudo são obrigatórios.");
    }*/
    await BlogService.cadastrarComentario(params.comentarios, params.id);
    logger.info(`POST /comentario`);
    res.end();
  } catch (err) {
    next(err);
  }
}

export default {
  cadastrarPost,
  consultarPosts,
  cadastrarComentario
}