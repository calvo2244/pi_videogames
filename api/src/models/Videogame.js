const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // (id,Nombre,Descripcion,Plataformas,Imagen,Fecha_de_lanzamiento,Rating)
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plataformas: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    // imagen: {
    //   type: DataTypes.STRING,
    //   // allowNull: false,
    // },
    // fecha_de_lanzamiento: {
    //   type: DataTypes.DATEONLY,
    //   // allowNull: false,
    // },
    // rating: {
    //   type: DataTypes.INTEGER,
    //   // allowNull: false,
    // }


  },
    {
      timestamps: false
    });
    console.log("creado videogames en la BD");

};

