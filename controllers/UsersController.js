const { Users, Permissions, Addresses } = require('../models')
const path = require('path')

const UsersController = {
  index: async (req, res) => {
    try {
      const users = await Users.findAll({
        include: [
          {
            model: Permissions,
            as: 'permissions',
            // no [] de attributes, podemos passar o nome da coluna que queremos retornar na consulta
            // sem o through mostra as informações da tabela pivô
            through: { attributes: [] } 
          }
        ] // [] de relacionamentos
      })
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
  create: async (req, res) => {
    try {
      let avatarPath
      const { name, email, password, permissions, address } = req.body

      if (!req.file) avatarPath = path.join(__dirname, '..', 'temp', 'default.png')
      else avatarPath = req.file.path
      
      if (!address) throw new Error('É necessário informações o endereço')

      const newAddress = await Addresses.create({
        street: address.street,
        number: address.number,
        district: address.district,
        city: address.city,
      })

      const user = await Users.create({
        name,
        email,
        password,
        address_id: newAddress.dataValues.id,
        avatar_path: avatarPath
      })

      await Addresses.update(
        { user_id: user.dataValues.id },
        { where: { id: newAddress.dataValues.id } }  
      )

      if (permissions && permissions.length > 0) user.setPermissions(permissions)
      else user.setPermissions([2])

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },
}

module.exports = UsersController