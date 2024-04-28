const Services = require('../Services.js')

class GrupoServices extends Services {
    constructor() {
        super('Grup'); 
    }

    async pegaMateriaisPorGrupo(id) {
        const grupo = await super.pegaUmRegistroPorID(id)
        const listaMateriais = await grupo.getMateriaisGrupo()
        return listaMateriais
    }

}

module.exports = GrupoServices;