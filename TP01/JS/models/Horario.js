const { Model, DataTypes } = require('sequelize')

class Horario extends Model {
    static init(connection) {
        super.init({
            id_docente: {
                type: DataTypes.STRING,
                allowNull: false
            },
            disciplina: {
                type: DataTypes.INTEGER,
                allowNull: false
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
            tipo: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Local deve conter no máximo 45 caractéres")
                    },
                }
            },
            semestre: {
                type: DataTypes.INTEGER
            },
        }, {
            sequelize: connection,
            tableName: 'horario',
        })
    }

    static associate(models){
        this.belongsTo(models.EdicaoDisciplina, { foreignKey: 'disciplina', as: 'edicao_disciplina' })
        this.belongsTo(models.Docente, { foreignKey: 'id_docente', as: 'docente' })
        this.belongsToMany(models.Curso, { foreignKey: 'id_horario', through: 'horario_curso', as: 'id_curso' })
    }
}

module.exports = Horario