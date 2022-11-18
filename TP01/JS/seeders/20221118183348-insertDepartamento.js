'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'departamento',
      [
        {
          nome: "Engenharias",
        },
        {
          nome: 'Psicologia',
        },
        {
          nome: 'Gestão',
        },
        {
          nome: 'Ciências de Saúde',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('departamento', null, {});
     
  },
};