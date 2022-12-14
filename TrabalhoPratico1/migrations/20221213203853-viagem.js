'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('viagem', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      porto_partido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      porto_destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hora_partida: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_chegada: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('viagem')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
