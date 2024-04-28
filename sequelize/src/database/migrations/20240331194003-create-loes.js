'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loes', {
      loes_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      loes_dsc: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      loes_dat_cria: {
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
      loes_dat_atua: {
        type: Sequelize.DATE,
        allowNull: false
      },
      loes_obs: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('loes');
  }
};
