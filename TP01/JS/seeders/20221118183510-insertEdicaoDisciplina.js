'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'edicao_disciplina',
      [
        {
          id_disciplina: 1,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Manhã',
        },
        {
          id_disciplina: 2,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Manhã',
        },
        {
          id_disciplina: 3,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Manhã',
        },
        {
          id_disciplina: 4,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Manhã',
        },
        {
          id_disciplina: 5,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Manhã',
        },
        {
          id_disciplina: 6,
          edicao: 1,
          estado: 'Em curso',
          ano_lectivo: '2022/2023',
          periodo: 'Fim Tarde',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('edicao_disciplina', null, {});
  }
};
