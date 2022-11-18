'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING(45),
        defaultValue: null,
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
    await queryInterface.dropTable('user')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
