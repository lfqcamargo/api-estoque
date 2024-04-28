'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const posicoes = [];
    const dataAtual = new Date();

    for (let i = 1; i <= 10; i++) {
      posicoes.push({
        poes_dsc: `Posição ${i}`,
        poes_dat_cria: dataAtual,
        poes_dat_atua: dataAtual,
        user_id: 2, 
        poes_obs: null 
      });
    }

    await queryInterface.bulkInsert('poes', posicoes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('poes', null, {});
  }
};
