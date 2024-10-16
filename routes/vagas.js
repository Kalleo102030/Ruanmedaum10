import express from 'express';
import { 
  criarVaga, listarVagas, listarVagaPorId, atualizarVaga, apagarVaga, listarVagasPorCargo, listarVagasPorCidade } from '../controllers/vagas.js'

const router = express.Router();


router.get('/', listarVagas); 
router.get('/vagas/:id', listarVagaPorId); 
router.post('/vagas', criarVaga); 
router.put('/vagas/:id', atualizarVaga); 
router.delete('/vagas/:id', apagarVaga); 
router.get('/cargo/:cargo', listarVagasPorCargo); 
router.get('/localizacao/:cidade', listarVagasPorCidade); 


export default router;
