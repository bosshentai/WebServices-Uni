'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'aula',
      [
        {
          numero: 1,
          data: new Date(2022, 11, 15),          
          id_horario: 1,
          tipo: 'Ṕrática',
        },
        {
          numero: 2,
          data: new Date(2022, 11, 17),          
          id_horario: 2,
          tipo: 'Teorica',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('aula', null, {});
     
  },
};