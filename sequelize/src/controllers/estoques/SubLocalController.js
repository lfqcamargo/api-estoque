const Controller = require('../Controller.js')
const SubLocalServices = require('../../services/estoques/LocalServices.js')

const subLocalServices = new SubLocalServices();

class SubLocalController extends Controller {
    constructor() {
        super(subLocalServices);
    }
}

module.exports = SubLocalController;