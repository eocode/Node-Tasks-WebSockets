'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tasks', [
            {
                id: 1,
                description: 'Task 1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                description: 'Task 2',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                description: 'Task 3',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tasks', null, {});
    }
};
