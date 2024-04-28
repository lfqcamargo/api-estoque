const Controller = require('../Controller.js')
const PosicaoServices = require('../../services/estoques/PosicaoServices.js')

const posicaoServices = new PosicaoServices();

class PosicaoController extends Controller {
    constructor() {
        super(posicaoServices);
    }
}

module.exports = PosicaoController;