import Vaga from '../models/vagas.js';

export const listarVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as vagas' });
    }
};

export const listarVagaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const vaga = await Vaga.findByPk(id);
        if (vaga) {
            res.status(200).json(vaga);
        } else {
            res.status(404).json({ error: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a vaga' });
    }
};

export const criarVaga = async (req, res) => {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    try {
        const novaVaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).json(novaVaga);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a vaga' });
    }
};

export const atualizarVaga = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    try {
        const vaga = await Vaga.findByPk(id);
        if (vaga) {
            vaga.titulo = titulo;
            vaga.descricao = descricao;
            vaga.cargo = cargo;
            vaga.cidade = cidade;
            vaga.salario = salario;
            await vaga.save();
            res.status(200).json(vaga);
        } else {
            res.status(404).json({ error: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a vaga' });
    }
};

export const apagarVaga = async (req, res) => {
    const { id } = req.params;
    try {
        const vaga = await Vaga.findByPk(id);
        if (vaga) {
            await vaga.destroy();
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ error: 'Vaga não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao apagar a vaga' });
    }
};

export const listarVagasPorCargo = async (req, res) => {
    const { cargo } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cargo } });
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as vagas por cargo' });
    }
};

export const listarVagasPorCidade = async (req, res) => {
    const { cidade } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cidade } });
        res.status(200).json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as vagas por cidade' });
    }
};
