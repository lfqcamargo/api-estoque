const Controller = require('../Controller.js')
const EnderecamentoServices = require('../../services/estoques/EnderecamentoServices.js')

const enderecamentoServices = new EnderecamentoServices();

class EnderecamentoController extends Controller {
    constructor() {
        super(enderecamentoServices);
    }

    async pegaEnderecamentos(req, res) {
        const { local, sublocal, corredor, prateleira, posicao } = req.query;
        const where = {};

        if (local) where.loes_id = Number(local);
        if (sublocal) where.sles_id = Number(sublocal);
        if (corredor) where.coes_id = Number(corredor);
        if (prateleira) where.pres_id = Number(prateleira);
        if (posicao) where.poes_id = Number(posicao);

        try {
            const listaEnderecos = await enderecamentoServices.pegaTodosRegistros({ where });
            return res.status(200).json(listaEnderecos);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = EnderecamentoController;