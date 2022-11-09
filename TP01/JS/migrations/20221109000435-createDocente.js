'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('docente', {
      sigla: {
        type: Sequelize.DataTypes.STRING(6),
        allowNull: false,
      },
      nome: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false,
      },
      nome_completo: {
        type: Sequelize.DataTypes.STRING(80),
      },
      ocupacao: {
        type: Sequelize.DataTypes.STRING(45),
      },
      grau: {
        type: Sequelize.DataTypes.STRING(45),
      },
      tipo_contrato: {
        type: Sequelize.DataTypes.STRING(45),
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
