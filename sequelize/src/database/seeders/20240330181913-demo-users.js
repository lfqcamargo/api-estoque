'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        user_nom: "Ana Beatriz Souza",
        user_cpf: "12345678901",
        user_dsc_email: "ana.beatriz@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-03-31T14:20:00.000Z"),
        user_dat_atua: new Date("2024-03-31T14:20:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
      },
      {
        user_nom: "Roberto Silva",
        user_cpf: "23456789012",
        user_dsc_email: "roberto.silva@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-01T11:15:00.000Z"),
        user_dat_atua: new Date("2024-04-01T11:15:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
      },
      {
        user_nom: "Mariana Costa",
        user_cpf: "34567890123",
        user_dsc_email: "mariana.costa@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-02T09:00:00.000Z"),
        user_dat_atua: new Date("2024-04-02T09:00:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
      },
      {
        user_nom: "Carlos Eduardo Pereira",
        user_cpf: "45678901234",
        user_dsc_email: "carlos.eduardo@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-03T08:30:00.000Z"),
        user_dat_atua: new Date("2024-04-03T08:30:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
      },
      {
        user_nom: "Juliana Martins",
        user_cpf: "56789012345",
        user_dsc_email: "juliana.martins@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-04T10:15:00.000Z"),
        user_dat_atua: new Date("2024-04-04T10:15:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    },
    {
        user_nom: "Fernando Gomes",
        user_cpf: "67890123456",
        user_dsc_email: "fernando.gomes@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-05T11:20:00.000Z"),
        user_dat_atua: new Date("2024-04-05T11:20:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    },
    {
        user_nom: "Lívia Ribeiro",
        user_cpf: "78901234567",
        user_dsc_email: "livia.ribeiro@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-06T12:25:00.000Z"),
        user_dat_atua: new Date("2024-04-06T12:25:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    },
    {
        user_nom: "Pedro Alcântara",
        user_cpf: "89012345678",
        user_dsc_email: "pedro.alcantara@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-07T13:30:00.000Z"),
        user_dat_atua: new Date("2024-04-07T13:30:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    },
    {
        user_nom: "Camila Porto",
        user_cpf: "90123456789",
        user_dsc_email: "camila.porto@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-08T14:35:00.000Z"),
        user_dat_atua: new Date("2024-04-08T14:35:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    },
    {
        user_nom: "Gabriel Teixeira",
        user_cpf: "01234567890",
        user_dsc_email: "gabriel.teixeira@example.com",
        user_has_senha: "senhaSegura123",
        user_dat_cria: new Date("2024-04-09T15:40:00.000Z"),
        user_dat_atua: new Date("2024-04-09T15:40:00.000Z"),
        user_ind_ativo: 1,
        user_dat_login: null
    }    
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
