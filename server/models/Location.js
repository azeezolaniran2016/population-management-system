'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name:{ 
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Location name cannot be empty',
        }
      }
    },
    femalePopulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Female population cannot be empty',
        },
        isNumeric: {
          msg: 'Female population must be an integer',
        },
        min: {
          args: [0],
          msg: 'Minimum Female population cannot be less than 0'
        }
      },
    },
    malePopulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Male population cannot be empty',
        },
        isNumeric: {
          msg: 'Male population must be an integer',
        },
        min: {
          args: [0],
          msg: 'Minimum Male population cannot be less than 0'
        }
      },
    },
    parentID: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    Location.hasMany(models.Location, { as: 'subLocations', foreignKey: 'parentID', })
  };
  return Location;
};
