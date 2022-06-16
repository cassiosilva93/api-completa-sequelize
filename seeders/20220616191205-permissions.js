'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Permissions', [
        {
          name: 'admin',
          description: 'tem as permissões de ler, criar, deletar e atualizar informações no banco de dados'
        },
        {
          name: 'common',
          description: 'tem as permissões de ler informações no banco de dados'
        },
        {
          name: 'backoffice',
          description: 'tem as permissões de ler e atualizar informações no banco de dados'
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
