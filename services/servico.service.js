import ServicoRepository from "../repositories/servico.repository.js";

async function criarServico(servico){
  return await ServicoRepository.criarServico(servico);
}

async function consultarServicos(proprietarioId){
  if (proprietarioId) {
    return await ServicoRepository.consultarServi├žosPeloProprietario(proprietarioId);
  }
  return await ServicoRepository.consultarServicos();
}

export default {
  criarServico,
  consultarServicos
}