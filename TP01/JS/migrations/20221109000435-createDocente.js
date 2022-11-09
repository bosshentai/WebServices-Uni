'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('docente', {
      sigla: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      nome_completo: {
        type: Sequelize.DataTypes.STRING,
      },
      ocupacao: {
        type: Sequelize.DataTypes.STRING,
      },
      grau: {
        type: Sequelize.DataTypes.STRING,
      },
      tipo_contrato: {
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
    await queryInterface.dropTable('docente');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
