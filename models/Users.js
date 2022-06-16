module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    address_id: { // não precisa colocar
      type: DataTypes.STRING(),
      allowNull: true
    },
    avatar_path: {
      type: DataTypes.STRING(),
      allowNull: true
    }
  }, { tablename: 'users' })

  Users.associate = (models) => {
    Users.belongsToMany(models.Permissions, {
      through: 'users_permissions', // diz qual é a tabela pivô do relacionamento
      as: 'permissions', // referencia no nosso usuário (apelido)
      foreignKey: 'user_id'
    })

    Users.belongsTo(models.Addresses, {
      constraint: true,
      foreignKey: 'address_id'
    })
  }

  return Users
}

