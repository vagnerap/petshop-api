import Proprietario from "../models/proprietario.model.js";

async function criarProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function atualizarProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietarioId
      }
    });
    return await consultarProprietarios(proprietario.proprietarioId);
  } catch (err) {
    throw err;
  }
}

async function excluirProprietario(id) {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId: id
      }
    })
  } catch (err) {
    throw err;
  }
}

async function consultarProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
}

async function consultarProprietario(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  criarProprietario,
  atualizarProprietario,
  excluirProprietario,
  consultarProprietario,
  consultarProprietarios
}