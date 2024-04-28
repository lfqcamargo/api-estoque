const { Router } = require('express')
const LocalController = require('../../controllers/estoques/LocalController.js')

const localController = new LocalController()

const router = Router()
router.post('/locais', (req, res) => localController.criaRegistro(req, res))
router.get('/locais', (req, res) => localController.pegaTodos(req, res))
router.get('/locais/:id', (req, res) => localController.pegaUmPorID(req, res))
router.put('/locais/:loes_id', (req, res) => localController.atualizaRegistro(req, res))
router.delete('/locais/:loes_id', (req, res) => localController.excluiRegistro(req, res))

module.exports = router