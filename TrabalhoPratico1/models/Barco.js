const { Model, DataTypes } = require('sequelize')

class Barco extends Model {
  static init(connection) {
    super.init(
      {
        // imo:{
        //   type: DataTypes.INTEGER,
        //   allowNull: false
        // },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: connection,
        tableName: 'barco',
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente',
      as: 'cliente',
    })
  }
}

module.exports = Barco
