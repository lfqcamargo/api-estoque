'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coes', {
      coes_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      coes_dsc: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      coes_dat_cria: {
        type: Sequelize.DATE,
        allowNull: false
      },
      coes_dat_atua: {
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
      coes_obs: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coes');
  }
};
