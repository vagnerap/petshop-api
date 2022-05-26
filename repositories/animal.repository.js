import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

async function criarAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function atualizarAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId
      }
    })
  } catch (err) {
    throw err;
  }
}

async function excluirAnimal(id) {
  try {
    await Animal.destroy( {
      where: {
        animalId: id
      }
    });
  } catch (err) {
    throw err;
  }
}

async function consultarAnimais() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function consultarAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function consultarAnimalPeloProprietario(proprietarioId) {
  try {
    return await Animal.findAll({
      where: { proprietarioId: proprietarioId },
      include: [ { model: Proprietario } ] 
    });
  } catch (err) {
    throw err;
  }
}

export default {
  criarAnimal,
  atualizarAnimal,
  excluirAnimal,
  consultarAnimais,
  consultarAnimal,
  consultarAnimalPeloProprietario
}