"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("project", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // isFeatured: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   defaultValue: "false",
      // },
      productImage: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      shortDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // description: {
      //   type: Sequelize.TEXT,
      //   allowNull: true,
      // },
      // productUrl: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      // tags: {
      //   type: Sequelize.ARRAY(Sequelize.STRING),
      // },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "CASCADE", // Optional, handle cascading deletes
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("project");
  },
};