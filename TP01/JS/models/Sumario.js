const { Model, DataTypes } = require('sequelize')

class Sumario extends Model {
    static init(connection) {
        super.init({
            conteudo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            biblio: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Bibliografia deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            presenca: {
                type: DataTypes.INTEGER,
            },
            estado: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Estado da Aula deve conter no máximo 45 caractéres")                 
                    },
                }
            },
        }, {
            sequelize: connection,
            tableName: 'sumario',
        })
    }

    static associate(models){
        this.belongsTo(models.Aula, { foreignKey: 'id_aula', as: 'aula' })
    }
}

module.exports = Sumario