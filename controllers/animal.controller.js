import AnimalService from "../services/animal.service.js";

async function criarAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error("Nome, tipo e proprietário do animal são obrigatórios!");
    };

    res.send(await AnimalService.criarAnimal(animal));
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function atualizarAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.animalId || !animal.nome || !animal.tipo) {
      throw new Error("ID, nome, tipo e proprietário do animal são obrigatórios!");
    };

    res.send(await AnimalService.atualizarAnimal(animal));
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function excluirAnimal(req, res, next) {
  try {
    await AnimalService.excluirAnimal(req.params.id);
    res.end();
    logger.info("DELETE /animal");
  } catch (err) {
    next(err);
  }
}

async function consultarAnimais(req, res, next) {
  try {
    res.send(await AnimalService.consultarAnimais(req.query.proprietarioId));
    logger.info("GET /animais")
  } catch (err) {
    next(err);
  }
}

async function consultarAnimal(req, res, next) {
  try {
    res.send(await AnimalService.consultarAnimal(req.params.id));
    logger.info("GET /animal")
  } catch (err) {
    next(err);
  }
}

export default {
  criarAnimal,
  atualizarAnimal,
  excluirAnimal,
  consultarAnimais,
  consultarAnimal
}