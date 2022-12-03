'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('dsd', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_docente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'docente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'edicao_disciplina', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      funcao: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dsd')
  }
};