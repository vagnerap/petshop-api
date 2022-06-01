import ServicoService from "../services/servico.service.js";

async function criarServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animalId){
      throw new Error("Descrição, valor e ID do animal são obrigatórios.");
    }

    res.send(await ServicoService.criarServico(servico));
    logger.info(`POST /servico ${JSON.stringify(servico)}`)
  } catch (err) {
    next(err);
  }
}

async function consultarServicos(req, res, next) {
  try {
    res.send(await ServicoService.consultarServicos(req.query.proprietarioId));
    logger.info("GET /sales")
  } catch (err) {
    next(err);
  }
}

export default {
  criarServico,
  consultarServicos
}