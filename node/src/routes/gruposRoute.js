const { Router } = require('express')
const GrupoController = require('../controllers/GrupoController.js')

const grupoController = new GrupoController()

const router = Router();
router.get('/grupos', (req, res) => grupoController.pegaTodos(req, res))
router.get('/grupos/:id', (req, res) => grupoController.pegaUmPorID(req, res))
router.post('/grupos', (req, res) => grupoController.criaRegistro(req, res))
router.put('/grupos/:id', (req, res) => grupoController.atualizaRegistro(req, res))
router.delete('/grupos/:id', (req, res) => grupoController.excluiRegistro(req, res))


module.exports = router;