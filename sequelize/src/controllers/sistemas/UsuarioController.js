const Controller = require('../Controller.js')
const UsuarioServices = require('../../services/sistemas/UsuarioServices.js')

const usuarioServices = new UsuarioServices();

class UsuarioController extends Controller {
    constructor() {
        super(usuarioServices);
    }

    async pegaTodasOsUsuarios(req, res) {
        try {
            const listaTodosUsuarios = await usuarioServices.pegaUsuariosEscopoTodos()
            return res.status(200).json(listaTodosUsuarios)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message})
        }
    }
}

module.exports = UsuarioController;