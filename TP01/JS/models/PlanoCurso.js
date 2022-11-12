const { Model, DataTypes } = require('sequelize')

class PlanoCurso extends Model {
    static init(connection) {
        super.init({
            id_curso: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_disci: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            ano: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            semestre: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            activo: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            data_status: {
                type: DataTypes.DATE,
                defaultValue: null,
            },
        }, {
            sequelize: connection,
            tableName: 'plano_curso',
        })
    }
}

module.exports = PlanoCurso