'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'edicao_disciplina', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      dia_semana: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      },
      hora: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      local:{
        type: Sequelize.STRING(45),
        defaultValue: null
      },
      duracao:{
        type:Sequelize.STRING(45),
        defaultValue: null
      },

    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('horario');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
