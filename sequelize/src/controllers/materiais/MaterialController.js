const Controller = require('../Controller.js')
const MaterialServices = require('../../services/materiais/MaterialServices.js')

const materialServices = new MaterialServices();

class MaterialController extends Controller {
    constructor() {
        super(materialServices);
    }
}

module.exports = MaterialController;