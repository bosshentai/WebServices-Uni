'use strict'

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horario', {
      id_docente: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      disciplina: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      hora: {
        type: Sequelize.DataTypes.DATE,
      },
      local: {
        type: Sequelize.DataTypes.STRING,
      },
      duracao: {
        type: Sequelize.DataTypes.STRING,
      },
      tipo: {
        type: Sequelize.DataTypes.STRING,
      },
      semestre: {
        type: Sequelize.DataTypes.STRING,
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('horario')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
