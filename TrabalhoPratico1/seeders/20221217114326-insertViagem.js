'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('viagem', [
      {
        imo: '1',
        porto_partida: 'São Vicente',
        porto_destino: 'Santo Antão',
        hora_partida: new Date(),
        hora_chegada: new Date(
          new Date().getTime() + 2 * 60 * 60 * 1000,
        ),
      },
      {
        imo: '2',
        porto_partida: 'São Vicente',
        porto_destino: 'São Nicolau',
        hora_partida: new Date(),
        hora_chegada: new Date(
          new Date().getTime() + 2 * 60 * 60 * 1000,
        ),
      },
      {
        imo: '1',
        porto_partida: 'Santo Antão',
        porto_destino: 'São Vicente',
        hora_partida: new Date(
          new Date().getTime() + 4 * 60 * 60 * 1000,
        ),
        hora_chegada: new Date(
          new Date().getTime() + 6 * 60 * 60 * 1000,
        ),
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
    await queryInterface.bulkDelete('viagem', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
