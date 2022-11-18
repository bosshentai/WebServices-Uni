'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('docente', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement:true,
        primaryKey: true,
      },
      sigla: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: {
          args: true,
          msg: 'A sigla ja existe',
        },
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      nome_completo: {
        type: Sequelize.STRING(80),
        defaultValue: null,
      },
      grau: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      },
      id_user: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        unique: {
          args: true,
          msg: 'Id de usuario ja existe na tabela docente',
        },
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      area:{
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {model: 'departamento',key:'id'},
        onupdate:'CASCADE',
        onDelete: 'SET NULL',
      },
      tipo_contrato:{
        type: Sequelize.STRING(25),
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
    return queryInterface.dropTable('docente')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
