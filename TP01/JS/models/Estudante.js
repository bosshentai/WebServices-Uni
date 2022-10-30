const { Model, DataTypes } = require('sequelize')

class Estudante extends Model {
    static init(connection) {
        super.init({
            codigo: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true 
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
        }, {
            sequelize: connection,
            tableName: 'estudante',
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' })
    }
}

module.exports = Estudante