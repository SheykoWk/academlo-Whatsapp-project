'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('messages', {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
            },
            sender_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            consersation_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'conversations',
                    key: 'id',
                },
            },
            message: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        });
        await queryInterface.addConstraint(
            'messages', //nombre de la tabla
            {
                fields: ['id'], //columnas que tendran esta restriccion
                type: 'unique', //restriccion para que los valores sean unicos
                name: 'unique_id_message', //nombre para guardar el cambio
            }
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('messages');
    },
};
