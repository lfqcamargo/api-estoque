const { Router } = require('express')
const SubLocalController = require('../../controllers/estoques/SubLocalController.js')

const subLocalController = new SubLocalController()

const router = Router()
router.post('/sublocais', (req, res) => subLocalController.criaRegistro(req, res))
router.get('/sublocais', (req, res) => subLocalController.pegaTodos(req, res))
router.get('/sublocais/:id', (req, res) => subLocalController.pegaUmPorID(req, res))
router.put('/sublocais/:sles_id', (req, res) => subLocalController.atualizaRegistro(req, res))
router.delete('/sublocais/:sles_id', (req, res) => subLocalController.excluiRegistro(req, res))

module.exports = router