'use strict'

const {sign} = require('jsonwebtoken')
const authConfig = require("../config/auth.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        name: 'Marvin Guarda-redes',
        tipo: 'AGENTE',
        token: 'asd123f',
        // token: sign({},authConfig.secret)
      },
      {
        name: "Leroy Silva",
        tipo: "AUTORIDADE",
        token: 'asd123asacz',

      },
      {
        name: "Iven Lopes",
        tipo: 'AGENTE',
        token: 'asczxceascdcdz',
      }
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
    await queryInterface.bulkDelete('cliente', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
