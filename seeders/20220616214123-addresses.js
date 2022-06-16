'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Addresses', [
      {
        street: 'Rua castro',
        number: 73,
        district: 'Guaraituba',
        city: 'Curitiba'
      },
      {
        street: 'Rua Manaus',
        number: 22,
        district: 'Paloma',
        city: 'Curitiba'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
