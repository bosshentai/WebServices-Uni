const { Model, DataTypes } = require('sequelize')

class Dsd extends Model {
    static init(connection) {
        super.init({
            id_docente: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_disciplina: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            funcao: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Função deve conter no máximo 45 caractéres")                 
                    },
                }
            },
        }, {
            sequelize: connection,
            tableName: 'dsd',
        })
    }
}

module.exports = Dsd