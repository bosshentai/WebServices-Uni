'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          nome: 'Paulo Silva',
          username: 'pas@umindelo.edu.cv',
          email: 'pas@umindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },
        {
          nome: 'Emanuel Viera',
          username: 'evi@unimindelo.edu.cv',
          email: 'evi@unimindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },
        {
          nome: 'Frederico Soares',
          username: 'fes@unimindelo.edu.cv',
          email: 'fes@unimindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },
        {
          nome: 'Zenaida Gomes',
          username: 'zeg@unimindelo.edu.cv',
          email: 'zeg@unimindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },
        {
          nome: 'Celeste da Paz',
          username: 'cep@unimindelo.edu.cv',
          email: 'cep@unimindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },
        {
          nome: 'Elisanela Santos',
          username: 'els@unimindelo.edu.cv',
          email: 'els@unimindelo.edu.cv',
          password: 'lala123',
          categoria: 'docente',
        },

        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
