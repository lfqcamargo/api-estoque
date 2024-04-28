'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mate', [

      { mate_dsc: "Alicate de Corte", grup_id: 1, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Alicate de Bico", grup_id: 1, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Alicate de Pressão", grup_id: 1, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Alicate Universal", grup_id: 1, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafuso 5x30", grup_id: 2, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafuso 6x40", grup_id: 2, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafuso 8x50", grup_id: 2, user_id: 1, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Porca 5mm", grup_id: 3, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Porca 6mm", grup_id: 3, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Porca 8mm", grup_id: 3, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Arruela lisa 5mm", grup_id: 4, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Arruela lisa 6mm", grup_id: 4, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Arruela de pressão 5mm", grup_id: 4, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Arruela de pressão 6mm", grup_id: 4, user_id: 2, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Martelo de Carpinteiro", grup_id: 5, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Martelo de Borracha", grup_id: 5, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Martelo Perfurador", grup_id: 5, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafusadeira à Bateria", grup_id: 6, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafusadeira com Fio", grup_id: 6, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Parafusadeira de Impacto", grup_id: 6, user_id: 3, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixa para Madeira", grup_id: 7, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixa para Metal", grup_id: 7, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixa d'Água", grup_id: 7, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixadeira Orbital", grup_id: 8, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixadeira de Cinta", grup_id: 8, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Lixadeira Angular", grup_id: 8, user_id: 4, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Furadeira sem Impacto", grup_id: 9, user_id: 5, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Furadeira com Impacto", grup_id: 9, user_id: 5, mate_dat_cria: new Date(), mate_dat_atua: new Date() },
      { mate_dsc: "Furadeira/Parafusadeira Combo", grup_id: 9, user_id: 5, mate_dat_cria: new Date(), mate_dat_atua: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mate', null, {});
  }
};
