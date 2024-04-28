'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enes', {
      enes_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      enes_dat_cria: { type: Sequelize.DATE, allowNull: false },
      enes_dat_atua: { type: Sequelize.DATE, allowNull: false },
      user_id: { type: Sequelize.INTEGER, allowNull: true,  references: { model: 'user', key: 'user_id' } },
      loes_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'loes', key: 'loes_id' } },
      sles_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'sles', key: 'sles_id' } },
      coes_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'coes', key: 'coes_id' } },
      pres_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'pres', key: 'pres_id' } },
      poes_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'poes', key: 'poes_id' } },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enes');
  }
};
