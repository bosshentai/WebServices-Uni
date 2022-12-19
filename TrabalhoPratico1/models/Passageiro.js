const { Model, DataTypes } = require('sequelize')

class Passageiro extends Model {
  static init(connection) {
    super.init(
      {
        quantidade_passageiro: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isInt: {
              args: true,
              msg: 'quantidade Invalido',
            },
          },
        },
      },
      {
        sequelize: connection,
        tableName: 'passageiro',
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.Viagem, {
      foreignKey: 'id_viagem',
      as: 'viagem',
    })
  }
}

module.exports = Passageiro
