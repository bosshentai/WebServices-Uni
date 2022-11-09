'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('disciplina',{
      codigo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nome:{
        type: DataTypes.STRING,
        DefaultValue: null
      },
      sinopse:{
        type: DataTypes.STRING,
        defaultValue: null
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
    await queryInterface.dropTable('disciplina')
    // await queryInterface.table
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
