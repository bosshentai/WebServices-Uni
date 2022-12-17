const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
  static init(connection) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Nome ja existe',
        },
      },
      tipo: {
        type: DataTypes.ENUM({
          values: ['AUTORIDADE', 'AGENTE'],
        }),
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'Token ja existe',
        },
      },
    },{
      sequelize: connection,
      tableName: 'cliente'
    })
  }
}


module.exports = Cliente
