'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('edicao_disciplina',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      edicao:{
        type: Sequelize.STRING(45),
        allowNull: false,

      },
      estado:{
        type: Sequelize.STRING(45),
        defaultValue: null
      },
      ano_lectivo:{
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      periodo:{
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      id_disciplina:{
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {model: 'disciplina', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
