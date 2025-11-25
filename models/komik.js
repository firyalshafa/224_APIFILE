const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        imageType: {
            type: DataTypes.STRING
        },
        imageName: {
            type: DataTypes.STRING
        },
        ImageData: {
            type: DataTypes.BLOB('long')
        }
    }, {
        tableName: "komikk"
    });

    return Komik;
};
