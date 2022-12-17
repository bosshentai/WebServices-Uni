const { Model, DataTypes } = require('sequelize')

class Viagem extends Model {
  static init(connection) {
    super.init(
      {
        porto_partida: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        porto_destino: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hora_partida: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        hora_chegada: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize: connection,
        tableName: 'viagem',
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.Barco, {
      foreignKe: 'imo',
      as: 'barco',
    })
  }
}

module.exports = Viagem
