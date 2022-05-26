import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function criarAnimal(animal){
  
  return await AnimalRepository.criarAnimal(animal);
}

async function atualizarAnimal(animal){
  return await AnimalRepository.atualizarAnimal(animal);
}

async function excluirAnimal(id){
  return await AnimalRepository.excluirAnimal(id);
}

async function consultarAnimais(proprietarioId){
  if (proprietarioId){
    return await AnimalRepository.consultarAnimalPeloProprietario(proprietarioId);
  }
  return await AnimalRepository.consultarAnimais();
}

async function consultarAnimal(id){
  return await AnimalRepository.consultarAnimal(id);
}

export default {
  criarAnimal,
  atualizarAnimal,
  excluirAnimal,
  consultarAnimais,
  consultarAnimal
}