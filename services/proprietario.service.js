import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function criarProprietario(proprietario){
  return await ProprietarioRepository.criarProprietario(proprietario);
}

async function atualizarProprietario(proprietario){
  return await ProprietarioRepository.atualizarProprietario(proprietario);
}

async function excluirProprietario(id){
  const animal = await AnimalRepository.consultarAnimalPeloProprietario(id);
  if (animal.length >= 1) {
    throw new Error("Não é possível excluir esse proprietário, pois ele possui animais cadastro conosco.");
  }
  return await ProprietarioRepository.excluirProprietario(id);
}

async function consultarProprietarios(){
  return await ProprietarioRepository.consultarProprietarios();
}

async function consultarProprietario(id){
  return await ProprietarioRepository.consultarProprietario(id);
}

export default {
  criarProprietario,
  atualizarProprietario,
  excluirProprietario,
  consultarProprietarios,
  consultarProprietario
}