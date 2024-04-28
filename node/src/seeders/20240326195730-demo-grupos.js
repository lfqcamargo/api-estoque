'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grup', [
      { grup_dsc: "Alicate", user_id: 1, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Parafuso", user_id: 1, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Porca", user_id: 2, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Arruela", user_id: 2, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Martelo", user_id: 3, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Parafusadeira", user_id: 3, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Lixa", user_id: 4, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Lixadeira", user_id: 4, grup_dat_cria: new Date(), grup_dat_atua: new Date() },
      { grup_dsc: "Furadeira", user_id: 5, grup_dat_cria: new Date(), grup_dat_atua: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grup', null, {});
  }
};