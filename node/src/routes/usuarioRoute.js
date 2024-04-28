const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController.js')

const usuarioController = new UsuarioController()

const router = Router();
router.get('/usuarios', (req, res) => usuarioController.pegaTodos(req, res))
router.get('/usuarios/:id', (req, res) => usuarioController.pegaUmPorID(req, res))
router.post('/usuarios', (req, res) => usuarioController.criaRegistro(req, res))
router.put('/usuarios/:id', (req, res) => usuarioController.atualizaRegistro(req, res))
router.delete('/usuarios/:id', (req, res) => usuarioController.excluiRegistro(req, res))


module.exports = router;