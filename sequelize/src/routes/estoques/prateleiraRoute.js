const { Router } = require('express')
const PrateleiraController = require('../../controllers/estoques/PrateleiraController.js')

const prateleiraController = new PrateleiraController()

const router = Router()
router.post('/prateleiras', (req, res) => prateleiraController.criaRegistro(req, res))
router.get('/prateleiras', (req, res) => prateleiraController.pegaTodos(req, res))
router.get('/prateleiras/:id', (req, res) => prateleiraController.pegaUmPorID(req, res))
router.put('/prateleiras/:pres_id', (req, res) => prateleiraController.atualizaRegistro(req, res))
router.delete('/prateleiras/:pres_id', (req, res) => prateleiraController.excluiRegistro(req, res))

module.exports = router