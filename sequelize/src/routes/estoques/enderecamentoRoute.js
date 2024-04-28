const { Router } = require('express')
const EnderecamentoController = require('../../controllers/estoques/EnderecamentoController.js')

const enderecamentoController = new EnderecamentoController()

const router = Router()
router.post('/enderecamentos', (req, res) => enderecamentoController.criaRegistro(req, res))
router.get('/enderecamentos', (req, res) => enderecamentoController.pegaEnderecamentos(req, res))
router.get('/enderecamentos/:id', (req, res) => enderecamentoController.pegaUmPorID(req, res))
router.put('/enderecamentos/:enes_id', (req, res) => enderecamentoController.atualizaRegistro(req, res))
router.delete('/enderecamentos/:enes_id', (req, res) => enderecamentoController.excluiRegistro(req, res))

module.exports = router