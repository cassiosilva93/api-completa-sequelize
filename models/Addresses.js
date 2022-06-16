module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { tablename: 'addresses' })

  Addresses.associate = (models) => {
    Addresses.belongsTo(models.Users, {
      constraint: true,
      foreignKey: 'user_id'
    })
  }

  return Addresses
}

