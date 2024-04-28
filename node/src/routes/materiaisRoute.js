const { Router } = require('express')
const MaterialController = require('../controllers/MaterialController.js')

const materialController = new MaterialController()

const router = Router();
router.get('/materiais', (req, res) => materialController.pegaTodos(req, res))
router.get('/materiais/:id', (req, res) => materialController.pegaUmPorID(req, res))
router.post('/materiais', (req, res) => materialController.criaRegistro(req, res))
router.put('/materiais/:id', (req, res) => materialController.atualizaRegistro(req, res))
router.delete('/materiais/:id', (req, res) => materialController.excluiRegistro(req, res))


module.exports = router;