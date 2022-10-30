const { Model, DataTypes } = require('sequelize')

class EdicaoDisciplina extends Model {
    static init(connection) {
        super.init({
            edicao: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Edição deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            estado: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Estado deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            ano_lectivo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Ano letivo deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            periodo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Periodo deve conter no máximo 45 caractéres")                 
                    },
                }
            },   
        }, {
            sequelize: connection,
            tableName: 'edicao_disciplina',
        })
    }

    static associate(models){
        this.belongsTo(models.Disciplina, { foreignKey: 'id_disciplina', as: 'disciplina' })
        this.belongsToMany(models.Docente, { foreignKey: 'id_disciplina', through: 'dsd', as: 'docente' })
    }
}

module.exports = EdicaoDisciplina