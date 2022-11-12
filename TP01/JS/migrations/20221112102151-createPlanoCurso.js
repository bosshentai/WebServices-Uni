'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plano_curso', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'curso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_disci:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'disciplina',key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ano:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      semestre:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      activo:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      data_status:{
        type: Sequelize.DATE,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plano_curso')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
