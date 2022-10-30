const { Model, DataTypes } = require('sequelize')

class Docente extends Model {
    static init(connection) {
        super.init({
            sigla: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 6) throw new Error("Sigla deve conter no máximo 6 caractéres")
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
            nome_completo: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 80) throw new Error("Nome completo deve conter no máximo 80 caractéres")                 
                    },
                }
            },
            ocupacao: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Ocupação deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            grau: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Grau deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            tipo_contrato: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Tipo de Contrato deve conter no máximo 45 caractéres")                 
                    },
                }
            },
        }, {
            sequelize: connection,
            tableName: 'docente',
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' })
        this.belongsTo(models.GrupoDisciplinar, { foreignKey: 'area', as: 'grupo_disciplinar' })
        this.belongsToMany(models.Disciplina, { foreignKey: 'id_docente', through: 'dsd', as: 'disciplina' })
    }
}

module.exports = Docente