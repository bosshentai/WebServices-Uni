const {Model, DataTypes} = require("sequelize")


class Autoridade extends Model {
  static init(connection){
    super.init({
      name:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      token:{
        type:DataTypes.STRING,
        allowNull:false,
      }
    },
    {
      sequelize:connection,
      tableName: "autoridade"
    })
  }
}

module.exports = Autoridade
