'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_nom: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      user_dsc_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      user_has_senha: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      user_dat_cria: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_dat_atua: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_ind_ativo: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      user_dat_login: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
