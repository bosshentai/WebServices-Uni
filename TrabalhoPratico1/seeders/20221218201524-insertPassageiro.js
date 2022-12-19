'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('passageiro', [
      {
        id_viagem: '1',
        quantidade_passageiro: '300',
      },
      {
        id_viagem: '2',
        quantidade_passageiro: '15',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('passageiro', null, {})
  },
}
