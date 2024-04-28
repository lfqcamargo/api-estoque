const dataSource = require('../models')

class Services {
    constructor (nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosRegistros() {
        return dataSource[this.model].findAll()
    }

    async pegaUmRegistroPorID(id) {
        return dataSource[this.model].findByPk(id)
    }

    async criaRegistro(dadosRegistro) {
        return dataSource[this.model].create(dadosRegistro)
    }

    async atualizaRegistro(dadosAtualizar, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizar, {
            where: {id: id}
        })
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false
        } else {
            return true
        }
    }

    async excluiRegistro(id) {        
        return dataSource[this.model].destroy({
            where: {id: id}
        })
    }

}

module.exports = Services