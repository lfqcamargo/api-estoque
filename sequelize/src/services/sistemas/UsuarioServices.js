const Services = require('../Services.js')

class UsuarioServices extends Services {
    constructor() {
        super('User'); 
    }

    async pegaUsuariosEscopoTodos() {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros')
        return listaPessoas
    }
}

module.exports = UsuarioServices;