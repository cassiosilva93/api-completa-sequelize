'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
          name: 'John Doe',
          email: 'john_doe@gmail.com',
          password: '123456'
        },
        {
          name: 'Cassio Oliveira',
          email: 'cassio@gmail.com',
          password: '123456'
        },
        {
          name: 'Ana Maria',
          email: 'ana@gmail.com',
          password: '123456'
        },
        {
          name: 'Joana Andrade',
          email: 'joana@gmail.com',
          password: '123456'
        },
        {
          name: 'Jose Vicente',
          email: 'jose@gmail.com',
          password: '123456'
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
