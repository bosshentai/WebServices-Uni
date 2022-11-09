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
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      dia_semana:{
        type: Sequelize.DataTypes.STRING(45)
      },
      hora: {
        type: Sequelize.DataTypes.DATE,
      },
      local: {
        type: Sequelize.DataTypes.STRING(45),
      },
      duracao: {
        type: Sequelize.DataTypes.STRING(45),
      },
      tipo: {
        type: Sequelize.DataTypes.STRING(45),
      },
      semestre: {
        type: Sequelize.DataTypes.INTEGER,
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
