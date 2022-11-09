'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sumario', {
      conteudo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      biblio: {
        type: Sequelize.DataTypes.STRING(45),
      },
      presenca: {
        type: Sequelize.DataTypes.INTEGER,
      },
      estado:{
        type: Sequelize.DataTypes.STRING(45)
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
  await queryInterface.dropTable('sumario')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
