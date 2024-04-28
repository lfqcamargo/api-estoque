'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verificar a existência de usuários
    const user = await queryInterface.sequelize.query(
      'SELECT user_id FROM `user` LIMIT 1;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (user.length === 0) {
      console.log('Nenhum usuário cadastrado.');
      return;
    }

    // Assumindo que o user_id do primeiro usuário seja utilizado
    const userId = user[0].user_id;

    // Obtenção dos IDs para locais, sublocais, corredores, prateleiras e posições
    const locais = await queryInterface.sequelize.query(
      'SELECT loes_id FROM `loes`;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const sublocais = await queryInterface.sequelize.query(
      'SELECT sles_id FROM `sles`;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const corredores = await queryInterface.sequelize.query(
      'SELECT coes_id FROM `coes`;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const prateleiras = await queryInterface.sequelize.query(
      'SELECT pres_id FROM `pres`;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const posicoes = await queryInterface.sequelize.query(
      'SELECT poes_id FROM `poes`;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Preparar os dados para inserção
    const enesData = [];

    for (const local of locais) {
      for (const sublocal of sublocais) {
        for (const corredor of corredores) {
          for (const prateleira of prateleiras) {
            for (const posicao of posicoes) {
              enesData.push({
                loes_id: local.loes_id,
                sles_id: sublocal.sles_id,
                coes_id: corredor.coes_id,
                pres_id: prateleira.pres_id,
                poes_id: posicao.poes_id,
                user_id: userId,
                enes_dat_cria: new Date(),
                enes_dat_atua: new Date()
              });
            }
          }
        }
      }
    }

    // Inserir dados na tabela 'enes'
    await queryInterface.bulkInsert('enes', enesData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('enes', null, {});
  }
};
