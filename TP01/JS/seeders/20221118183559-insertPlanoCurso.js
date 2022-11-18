'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'plano_curso',
      [
        {
          id_curso: 1,
          id_disci: 1,
          ano: 1,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
        {
          id_curso: 1,
          id_disci: 2,
          ano: 1,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
        {
          id_curso: 1,
          id_disci: 3,
          ano: 1,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
        {
          id_curso: 1,
          id_disci: 4,
          ano: 1,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
        {
          id_curso: 1,
          id_disci: 5,
          ano: 1,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
        {
          id_curso: 1,
          id_disci: 1,
          ano: 4,
          semestre: 1,
          activo: true,
          data_status: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('plano_curso', null, {});
  },
};