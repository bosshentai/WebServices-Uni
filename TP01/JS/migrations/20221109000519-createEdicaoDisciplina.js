'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('edicao_disciplina', {
      edicao:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,

      },
      estado:{
        type: Sequelize.DataTypes.STRING,

      },
      ano_lectivo:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      periodo:{
        type: Sequelize.DataTypes.STRING,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('edicao_disciplina')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
