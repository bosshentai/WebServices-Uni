const { Model, DataTypes } = require('sequelize')

class Aula extends Model {
    static init(connection) {
        super.init({
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            dia_semana: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Dia da semana deve conter no máximo 45 caractéres")
                    },
                }
            },
            hora: { 
                type: DataTypes.DATE,
            },
            local: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Local deve conter no máximo 45 caractéres")
                    },
                }
            },
            duracao: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Duração deve conter no máximo 45 caractéres")
                    },
                }
            },
            data: {
                type: DataTypes.DATE,
            },
            tipo: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Local deve conter no máximo 45 caractéres")
                    },
                }
            },
            id_horario: {
                type: DataTypes.INTEGER,
                defaultValue: null
            }
        }, {
            sequelize: connection,
            tableName: 'aula',
        })
    }

    static associate(models){
        // this.belongsTo(models.EdicaoDisciplina, { foreignKey: 'id_disciplina', as: 'edicao_disciplina' })
        this.belongsTo(models.Horario, { foreignKey: 'id_horario', as: 'horario' })
    }
}

module.exports = Aula