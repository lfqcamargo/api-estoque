const Controller = require('../Controller.js')
const PrateleiraServices = require('../../services/estoques/PrateleiraServices.js')

const prateleiraServices = new PrateleiraServices();

class PrateleiraController extends Controller {
    constructor() {
        super(prateleiraServices);
    }
}

module.exports = PrateleiraController;