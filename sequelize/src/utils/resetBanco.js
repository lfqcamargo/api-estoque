const sequelize = require('../database/models');

sequelize.sync({ force: true }).then(() => {
    console.log("Todas as tabelas foram recriadas com sucesso.");
  }).catch(error => {
    console.error("Ocorreu um erro ao recriar as tabelas:", error);
  });
  