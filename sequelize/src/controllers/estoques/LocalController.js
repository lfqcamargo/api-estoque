const Controller = require('../Controller.js')
const LocalServices = require('../../services/estoques/LocalServices.js')

const localServices = new LocalServices();

class LocalController extends Controller {
    constructor() {
        super(localServices);
    }
}

module.exports = LocalController;