const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // (id,name,description,platforms,image,released,rating,genres)
  sequelize.define('videogame', {
    id: {
      // type: DataTypes.INTEGER,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.JSON,
      // allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      defaultValue: "true"
    }

  },
    {
      timestamps: false
    });

};

