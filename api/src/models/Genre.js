const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre',{
        id: {
            type: DataTypes.INTEGER,
            // type: DataTypes.UUID,
            // defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        timestamps: false
    });
    console.log("creado genre en la BD");
} 