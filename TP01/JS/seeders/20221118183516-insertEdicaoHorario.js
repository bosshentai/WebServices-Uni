'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'horario',
      [
        {
          id_disciplina: 6,
          dia_semana: 'terça-feira',
          hora: new Date(),
          local: 'Sala 7',
          duracao: 90,
        },
        {
          id_disciplina: 6,
          dia_semana: 'sexta-feira',
          hora: new Date(),
          local: 'Sala 7',
          duracao: 90,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('horario', null, {});
  }
};
