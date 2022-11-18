const { Model, DataTypes } = require('sequelize')

class Horario extends Model {
    static init(connection) {
        super.init({            
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
                type: DataTypes.INTEGER,
                
            },            
        }, {
            sequelize: connection,
            tableName: 'horario',
        })
    }

    static associate(models){
        this.belongsTo(models.EdicaoDisciplina, { foreignKey: 'id_disciplina', as: 'id_disciplina' })        
    }
}

module.exports = Horario