import { DataTypes } from 'sequelize';
import conexao from '../database.js';

const Vaga = conexao.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: 'vagas',
    timestamps: false
});

export default Vaga;
