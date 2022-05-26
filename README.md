# petshop-api
Criação de API para estudos e prática.

Fiz a API já integrando com um banco relacional (postgres) e o intuito é criar uma tabela com o nome e telefone dos clientes 
e uma outra tabela com o cadastro de cada animal que o petshop cuida, utilizando o nome do pet, raça do animal e vinculando com o ID do proprietário. 

Os endpoints são de criação de cadastro, atualização, exclusão e consulta de pets e clients. 
Já foram feitas algumas validações também, para não excluir proprietários que tem pets vinculados, não atualizar ou cadastrar sem as informações necessárias, 
além de tratamento de erros, e também os Logs.

Eu utilizei nessa API: Express, Cors, Winston e o Sequelize.
