'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carga', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_viagem:{
        type:Sequelize.INTEGER,
        references: {model:'viagem',key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        unique: true,
      },
      quantidade_carga:{
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('carga')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
