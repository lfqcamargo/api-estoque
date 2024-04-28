'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const sublocaisNomes = ["Armazém 1", "Armazém 2", "Armazém 3", "Armazém 4"];
    const dataAtual = new Date();

    const sublocais = sublocaisNomes.map(nome => ({
      sles_dsc: nome,
      sles_dat_cria: dataAtual,
      sles_dat_atua: dataAtual,
      user_id: 3, 
      sles_obs: null
    }));

    await queryInterface.bulkInsert('sles', sublocais, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sles', null, {});
  }
};
