export const currencyModel = (sequelize, DataTypes) => {
    const Currency = sequelize.define("currency", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: false,
      }      
    });
    return Currency;
  };
  