const { Model, DataTypes } = require("sequelize");


class Departamento extends Model{
  static init(connection){
    super.init({
      nome:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
      sequelize: connection,
      tableName: 'departamento',
    })
  }
}

module.exports = Departamento