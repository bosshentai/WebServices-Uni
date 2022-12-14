const {Model, DataTypes} = require('sequelize')


class Carga extends Model {
  static init(connection){
    super.init({
      quantidade_carga:{
        type: DataTypes.NUMBER,
        allowNull: false
      },
      id_viagem:{
        type: DataTypes.INTEGER,
        defaultValue: null,
      }
    },{
      sequelize: connection,
      tableName: "carga"
    })
  }

  static associate(models){
    this.belongsTo(models.Viagem,{foreignKey:"id_viagem", as:"viagem"})
  }
}

module.exports = Carga