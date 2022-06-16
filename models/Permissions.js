module.exports = (sequelize, DataTypes) => {
  const Permissions = sequelize.define('Permissions', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tablename: 'permissions' })

  Permissions.associate = (models) => {
    Permissions.belongsToMany(models.Users, {
      through: 'users_permissions', // diz qual é a tabela pivô do relacionamento
      as: 'users', // referencia no nosso usuário (apelido)
      foreignKey: 'permission_id'
    })
  }

  return Permissions
}

