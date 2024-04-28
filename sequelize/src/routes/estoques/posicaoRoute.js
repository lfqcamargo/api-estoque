const { Router } = require('express')
const PosicaoController = require('../../controllers/estoques/PosicaoController.js')

const posicaoController = new PosicaoController()

const router = Router()
router.post('/posicoes', (req, res) => posicaoController.criaRegistro(req, res))
router.get('/posicoes', (req, res) => posicaoController.pegaTodos(req, res))
router.get('/posicoes/:id', (req, res) => posicaoController.pegaUmPorID(req, res))
router.put('/posicoes/:poes_id', (req, res) => posicaoController.atualizaRegistro(req, res))
router.delete('/posicoes/:poes_id', (req, res) => posicaoController.excluiRegistro(req, res))

module.exports = router