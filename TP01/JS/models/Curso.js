const { Model, DataTypes } = require('sequelize')

class Curso extends Model {
    static init(connection) {
        super.init({
            sigla: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 12) throw new Error("Sigla deve conter no máximo 12 caractéres")
                    },
                }
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Nome deve conter no máximo 45 caractéres")
                    },
                }
            },
            conferegrau: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Grau deve conter no máximo 45 caractéres")
                    },
                }
            },   
        }, {
            sequelize: connection,
            tableName: 'curso',
            modelName: 'Curso'
        })
    }

    static associate(models){
        this.belongsToMany(models.Disciplina, { foreignKey: 'id_curso', through: 'plano_curso', as: 'disciplina' })
        this.belongsToMany(models.Horario, { foreignKey: 'id_curso', through: 'horario_curso', as: 'horario' })
    }
}

module.exports = Curso