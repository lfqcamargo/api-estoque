const { Router } = require('express')
const GrupoController = require('../../controllers/materiais/GrupoController.js')

const grupoController = new GrupoController

const router = Router()
router.post('/grupos', (req, res) => grupoController.criaRegistro(req, res))
router.get('/grupos', (req, res) => grupoController.pegaTodos(req, res))
router.get('/grupos/:id', (req, res) => grupoController.pegaUmPorID(req, res))
router.get('/grupos/:grup_id/materiais', (req, res) => grupoController.pegaMateriais(req, res))
// router.get('/grupos/:grup_id/materiais/:mate_id', (req, res) => grupoController.pegaUm(req, res))
router.put('/grupos/:grup_id', (req, res) => grupoController.atualizaRegistro(req, res))
router.delete('/grupos/:grup_id', (req, res) => grupoController.excluiRegistro(req, res))


module.exports = router