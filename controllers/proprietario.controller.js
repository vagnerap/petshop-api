import ProprietarioService from "../services/proprietario.service.js";

async function criarProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error("Nome, telefone e proprietário do proprietario são obrigatórios!");
    };

    res.send(await ProprietarioService.criarProprietario(proprietario));
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

async function atualizarProprietario(req, res, next) {
  try {
    let proprietario = req.body;

    if (!proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone) {
      throw new Error("ID, nome e telefone do proprietario são obrigatórios!");
    };

    res.send(await ProprietarioService.atualizarProprietario(proprietario));
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

async function excluirProprietario(req, res, next) {
  try {
    await ProprietarioService.excluirProprietario(req.params.id);
    res.end();
    logger.info("DELETE /proprietario");
  } catch (err) {
    next(err);
  }
}

async function consultarProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.consultarProprietarios(req.query.proprietarioId));
    logger.info("GET /proprietarios")
  } catch (err) {
    next(err);
  }
}

async function consultarProprietario(req, res, next) {
  try {
    res.send(await ProprietarioService.consultarProprietario(req.params.id));
    logger.info("GET /proprietario")
  } catch (err) {
    next(err);
  }
}

export default {
  criarProprietario,
  atualizarProprietario,
  excluirProprietario,
  consultarProprietarios,
  consultarProprietario
}