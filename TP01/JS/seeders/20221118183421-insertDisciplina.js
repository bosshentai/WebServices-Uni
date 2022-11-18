'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'disciplina',
      [
        {
          codigo: 'INF001',
          nome: 'Introdução Investigação Científica',
          sinopse: 'Introdução Investigação Científica',
        },
        {
          codigo: 'INF002',
          nome: 'Físcia',
          sinopse: 'Físcia',
        },
        {
          codigo: 'INF003',
          nome: 'Introdução a Programação',
          sinopse: 'Introdução a Programação',
        },
        {
          codigo: 'INF004',
          nome: 'Algebra Linear e Geometria Analitica',
          sinopse: 'Algebra Linear e Geometria Analitica',
        },
        {
          codigo: 'INF005',
          nome: 'Logica e Sistemas Digitais',
          sinopse: 'Logica e Sistemas Digitais',
        },
        {
          codigo: 'INF006',
          nome: 'Web Services',
          sinopse: 'Web Services',
        },

      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('disciplina', null, {});
  }
};
