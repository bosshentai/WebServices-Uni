'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dsd', {
      id_docente: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      id_disciplina: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      funcao: {
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
    await queryInterface.dropTable('dsd')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
