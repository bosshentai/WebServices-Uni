'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aula', {
      numero: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dia_semana: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        // validate:{
        //   maxLength: val =>{
        //     if(val.length)
        //   }
        // }
      },
      hora: {
        type: Sequelize.DataTypes.DATE,
        // allowNull: false,
      },
      local: {
        type: Sequelize.DataTypes.STRING,
        // allowNull: false,
      },
      duracao: {
        type: Sequelize.DataTypes.STRING,
        // allowNull: false,
      },
      data:{
        type: Sequelize.DataTypes.DATE,
      },
      tipo:{
        type:Sequelize.DataTypes.STRING
      },
      id_horario:{
        type: Sequelize.DataTypes.INTEGER,
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
    await queryInterface.dropTable('aula')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
