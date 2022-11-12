'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('departamento',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nome:{
        type: Sequelize.STRING(45),
        defaultValue: null,
      }
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('departamento')

  }
};
