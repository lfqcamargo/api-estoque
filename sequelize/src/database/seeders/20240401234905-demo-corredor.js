'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const corredoresNomes = [
      "Corredor 1",
      "Corredor 2",
      "Corredor 3",
      "Corredor 4",
      "Corredor 5"
    ];
    const dataAtual = new Date();

    const corredores = corredoresNomes.map(nome => ({
      coes_dsc: nome,
      coes_dat_cria: dataAtual,
      coes_dat_atua: dataAtual,
      user_id: 5, 
      coes_obs: null 
    }));

    await queryInterface.bulkInsert('coes', corredores, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('coes', null, {});
  }
};
