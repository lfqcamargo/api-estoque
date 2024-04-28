'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const prateleiras = [];
    const dataAtual = new Date();

    for (let i = 1; i <= 10; i++) {
      prateleiras.push({
        pres_dsc: `Prateleira ${i}`,
        pres_dat_cria: dataAtual,
        pres_dat_atua: dataAtual,
        user_id: 7, 
        pres_obs: null 
      });
    }

    await queryInterface.bulkInsert('pres', prateleiras, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pres', null, {});
  }
};
