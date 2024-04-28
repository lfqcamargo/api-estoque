'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const loes = ["São Manuel", "Lençóis", "Bauru", "Jaú", "Barra Bonita", "Botucatu"].map(nome => ({
      loes_dsc: nome,
      loes_dat_cria: new Date(),
      loes_dat_atua: new Date(),
      user_id: 2
    }));

    await queryInterface.bulkInsert('loes', loes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('loes', null, {});
  }
};
