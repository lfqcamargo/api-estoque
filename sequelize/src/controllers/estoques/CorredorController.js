const Controller = require('../Controller.js')
const CorredorServices = require('../../services/estoques/CorredorServices.js')

const corredorServices = new CorredorServices();

class CorredorController extends Controller {
    constructor() {
        super(corredorServices);
    }
}

module.exports = CorredorController;