'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sles', {
      sles_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      sles_dsc: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      sles_dat_cria: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sles_dat_atua: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      sles_obs: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sles');
  }
};
