const {Model,DataTypes} = require("sequelize");

class Passageiro extends Model {
  static init(connection){
super.init({
  quantidade:{
    type: DataTypes.NUMBER,
    allowNull: false
  }
},{
  sequelize: connection,
  tableName: "passageiro"
})
  }

  static associate(models){
    this.belongsTo(models.Viagem,{foreignKey:"id_viagem", as:"viagem"})
  }
}

module.exports = Passageiro