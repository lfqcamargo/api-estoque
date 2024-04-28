const Controller = require('../Controller.js')
const GrupoServices = require('../../services/materiais/GrupoServices.js')

const grupoServices = new GrupoServices();

class GrupoController extends Controller {
    constructor() {
        super(grupoServices);
    }

    async pegaMateriais(req, res) {
        const { grup_id } = req.params
        try {
            const listaMateriais = await grupoServices.pegaMateriaisPorGrupo(Number(grup_id))
            return res.status(200).json(listaMateriais)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro ao buscar materiais do grupo" })
        }
        
    }
}

module.exports = GrupoController;