'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('curso', [
      {
        sigla: 'EISC',
        nome: 'Eng Informatica e Sistemas Computacionais',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'PSI',
        nome: 'Psicologia',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'OCV',
        nome: 'Ortóptica e Ciência de Visão',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'GHT',
        nome: 'Gestão de Hotelaria e Turismo',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'LRE',
        nome: 'Linguas e Relações Empresariais',
        conferegrau: 'Licenciatura',
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('curso', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
