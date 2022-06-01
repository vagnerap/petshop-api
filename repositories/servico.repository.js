import Animal from "../models/animal.model.js";
import Servico from "../models/servico.model.js";

async function criarServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function consultarServicos() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function consultarServiçosPeloProprietario(proprietarioId) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietarioId
          }
        }
      ]
    });
  } catch (err) {
    throw err;
  }
}

export default { 
  criarServico, 
  consultarServicos, 
  consultarServiçosPeloProprietario 
}