'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('conversations',{
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
          },
          title: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
          image_url: {
            type: DataTypes.STRING,
            allowNull: true
          },
          created_by: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          createdAt: {
              type: DataTypes.DATE,
              allowNull: false,
              field: 'created_at'
          },
          updatedAt: {
              type: DataTypes.DATE,
              allowNull: false,
              field: 'updated_at'
          }
     } )
     await queryInterface.addConstraint(
        'conversations', //nombre de la tabla
        {
          fields: ['id'],//columnas que tendran esta restriccion
          type: 'unique', //restriccion para que los valores sean unicos
          name: 'unique_conversation_id' //nombre para guardar el cambio
        }
      )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('conversations');
  }
};
