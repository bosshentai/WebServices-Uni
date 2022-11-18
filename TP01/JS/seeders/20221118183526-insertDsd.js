'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'dsd',
      [
        {
          id_docente: 1,
          id_disciplina: 6,
        },
        {
          id_docente: 2,
          id_disciplina: 2,
        },
        {
          id_docente: 2,
          id_disciplina: 1,
        },
        {
          id_docente: 5,
          id_disciplina: 3,
        },
        {
          id_docente: 4,
          id_disciplina: 4,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dsd', null, {});
  }
};
