'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('curso', {
      sigla:{
        type: DataTypes.STRING,
        allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      conferegrau:{
        type: DataTypes.STRING,
        allowNull: false
      }
    })

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('curso')

  }
};
