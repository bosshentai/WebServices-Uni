'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'docente',
      [
        {
          sigla: 'PAS',
          nome: 'Paulo Silva',
          nome_completo: 'Paulo Silva',
          grau: 'Mestrado',
          id_user: 1,
          area: 1,
        },
        {
          sigla: 'EVI',
          nome: 'Emanuel Vieira',
          nome_completo: 'Emanuel Vieira',
          grau: 'Mestrado',
          id_user: 2,
          area: 1,
        },
        {
          sigla: 'FES',
          nome: 'Frederico Soares',
          nome_completo:  'Frederico Soares',
          grau: 'Mestrado',
          id_user: 3,
          area: 1,
        },
        {
          sigla: 'ZEG',
          nome: 'Zenaida Gomes',
          nome_completo: 'Zenaida Gomes',
          grau: 'Mestrado',
          id_user: 4,
          area: 1,
        },
        {
          sigla: 'CEP',
          nome: 'Celeste da Paz',
          nome_completo: 'Celeste da Paz',
          grau: 'Mestrado',
          id_user: 5,
          area: 1,
        },
        {
          sigla: 'ELS',
          nome: 'Elisangela Santos',
          nome_completo: 'Elisangela Santos',
          grau: 'Mestrado',
          id_user: 6,
          area: 1,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('docente', null, {});
  }
};
