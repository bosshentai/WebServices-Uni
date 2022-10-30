const { Model, DataTypes } = require('sequelize')

class Disciplina extends Model {
    static init(connection) {
        super.init({
            codigo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Este código já existe",
                },
                validate: {
                    maxLength: val => {
                        if (val.length > 6) throw new Error("Codigo deve conter no máximo 6 caractéres")                 
                    },
                    minLength: val => {
                        if (val.length < 2) throw new Error("Código deve conter no mínimo 2 caractéres")
                    },
                    stringCheck: val => {
                        if (typeof val != 'string') throw new Error("Tipo incorreto") 
                    },
                }
            },
            nome: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    maxLength: val => {
                        if (val.length > 100) throw new Error("Nome deve conter no máximo 100 caractéres")
                    },
                    stringCheck: val => {
                        if (typeof val != 'string') throw new Error("Tipo incorreto") 
                    },
                }
            },
            sinopse: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    maxLength: val => {
                        if (val.length > 120) throw new Error("Sinopse deve conter no máximo 120 caractéres")
                    },
                    stringCheck: val => {
                        if (typeof val != 'string') throw new Error("Tipo incorreto") 
                    },
                }
            },
        }, {
            sequelize: connection,
            tableName: 'disciplina',
        })
    }

    static associate(models){
        this.belongsToMany(models.Curso, { foreignKey: 'id_disci', through: 'plano_curso', as: 'curso' })
    }
}

module.exports = Disciplina