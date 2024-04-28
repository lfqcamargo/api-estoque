const { Router } = require('express')
const CorredorController = require('../../controllers/estoques/CorredorController.js')

const corredorController = new CorredorController()

const router = Router()
router.post('/corredores', (req, res) => corredorController.criaRegistro(req, res))
router.get('/corredores', (req, res) => corredorController.pegaTodos(req, res))
router.get('/corredores/:id', (req, res) => corredorController.pegaUmPorID(req, res))
router.put('/corredores/:coes_id', (req, res) => corredorController.atualizaRegistro(req, res))
router.delete('/corredores/:coes_id', (req, res) => corredorController.excluiRegistro(req, res))

module.exports = router