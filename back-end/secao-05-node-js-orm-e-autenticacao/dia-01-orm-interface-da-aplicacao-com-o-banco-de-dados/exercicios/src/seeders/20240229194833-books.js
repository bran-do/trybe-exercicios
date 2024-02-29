'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',
    [
      {
        title: 'O Som e a Fúria',
        author: 'William Faulkner',
        pageQuantity: 376,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O amor nos tempos do cólera',
        author: 'Gabriel García Márquez',
        pageQuantity: 432,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {})
  }
};
