'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        user_email: 'ana.silva@gmail.com',
        user_nom: 'Ana Silva',
        user_sen: 'senha123',
        user_cod: 1,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'jose.santos@gmail.com',
        user_nom: 'José Santos',
        user_sen: 'senha123',
        user_cod: 2,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'maria.oliveira@gmail.com',
        user_nom: 'Maria Oliveira',
        user_sen: 'senha123',
        user_cod: 3,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'carlos.souza@gmail.com',
        user_nom: 'Carlos Souza',
        user_sen: 'senha123',
        user_cod: 4,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'luciana.martins@gmail.com',
        user_nom: 'Luciana Martins',
        user_sen: 'senha123',
        user_cod: 5,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'rodrigo.fernandes@gmail.com',
        user_nom: 'Rodrigo Fernandes',
        user_sen: 'senha123',
        user_cod: 6,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'camila.goncalves@gmail.com',
        user_nom: 'Camila Gonçalves',
        user_sen: 'senha123',
        user_cod: 7,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'marcos.ramos@gmail.com',
        user_nom: 'Marcos Ramos',
        user_sen: 'senha123',
        user_cod: 8,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'sabrina.costa@gmail.com',
        user_nom: 'Sabrina Costa',
        user_sen: 'senha123',
        user_cod: 9,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      },
      {
        user_email: 'felipe.machado@gmail.com',
        user_nom: 'Felipe Machado',
        user_sen: 'senha123',
        user_cod: 10,
        user_dat_cria: new Date(),
        user_dat_atua: new Date(),
        user_dat_ultimo: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
