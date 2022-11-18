const { Model, DataTypes } = require('sequelize')

class User extends Model {
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
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Este username já existe",
                },
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Nome deve conter no máximo 45 caractéres")                 
                    },
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Este email já está registado",
                },
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Email deve conter no máximo 45 caractéres")                 
                    },
                    isEmail: {
                        args: true,
                        msg: "Email inválido",
                    },
                    isUTA(value) {
                        let regexp = /^[A-Za-z0-9._%+-]+@uta.cv$/
                        if (!regexp.test(value)){
                            throw new Error("Email inválido")
                        }
                    }
                }
            },   
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 120) throw new Error("Password deve conter no máximo 120 caractéres")                 
                    },
                }
            },
            categoria: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Categoria deve conter no máximo 45 caractéres")                 
                    },
                }
            }
        }, {
            sequelize: connection,
            tableName: 'user',
            // modelName: 'user',
        })
    }
}

module.exports = User