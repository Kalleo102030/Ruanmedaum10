import express from 'express';
import vagasRouter from './routes/vagas.js';
import conexao from './database.js';

const app = express();

const startServer = async () => {
    try { 
        await conexao.sync();
        console.log('Banco de dados sincronizado com sucesso');
    } catch (err) {
        console.error('Erro ao sincronizar o banco de dados:', err);
    } 

    app.use(express.json());
    app.use(vagasRouter);

    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
};

startServer();
