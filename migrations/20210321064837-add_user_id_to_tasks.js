'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.addColumn('tasks', 'userId', {
            type: Sequelize.INTEGER,
            references: {
                model: {
                    tableName: 'Users'
                },
                key: 'id'
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.removeColumn('tasks', 'userId');
    }
};
