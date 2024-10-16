import { Sequelize } from 'sequelize';

const conexao = new Sequelize('postgresql://kalleo_souza:9Hg7phhL5yiiyaVfMMO7CA@marine-horgi-2155.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');


const conectarDB = async () => {
    try {
        await conexao.authenticate();  
        console.log('Conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar', error);
    }
};


conectarDB();

export default conexao;
