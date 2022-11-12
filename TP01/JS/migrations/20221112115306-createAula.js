'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aula', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'edicao_disciplina',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_horario:{
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {model: 'horario', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      tipo:{
        type: Sequelize.STRING(45),
        defaultValue: null,
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
    await queryInterface.dropTable('aula')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
