const Controller = require('./Controller.js')
const GrupoServices = require('../services/GrupoServices.js')

const grupoServices = new GrupoServices()

class GrupoController extends Controller{
    constructor () {
        super(grupoServices)
    }
}

module.exports = GrupoController