# petshop-api
Criação de API para estudos e prática.

API criada para gerenciar os serviços de um petshop.

Utitilizamos um banco relacional (postgres) para receber os dados das tabelas de Proprietarios, Animais e os Serviços realizados.
Os endpoints: cria, atualiza, relaciona e exclui registros em todas as tabelas.

Há também uma collection para um banco não relacional (mongodb) onde damos abertura para criação de um blog sobre petshop's.
Os endpoints criam o post, e também comentários que podem ser relacionados a ele.

Essa API ainda está em desenvolvimento, o próximo passo é implementar um sistema de autenticação e por fim gerar uma documentação automática.

Eu utilizei nessa API: Express, Postgres, MongoDB, Cors, Winston, Mongoose e o Sequelize.
