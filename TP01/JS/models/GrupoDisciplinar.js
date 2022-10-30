const { Model, DataTypes } = require('sequelize')

class GrupoDisciplinar extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Nome deve conter no máximo 45 caractéres")                 
                    },
                }
            },   
        }, {
            sequelize: connection,
            tableName: 'grupo_disciplinar',
        })
    }
}

module.exports = GrupoDisciplinar