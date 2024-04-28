const dataSource = require('../database/models')

class Services {
    constructor (nomeDoModel) {
        this.model = nomeDoModel
    }

    toString() {
        return String(this.model)
    }

    adicionaDataCriacao(dados) {
        const dataAtual = new Date()
        const nomeTabela = this.toString().toLowerCase()
        const nomeCriacao = `${nomeTabela}_dat_cria`
        const nomeAtualizacao = `${nomeTabela}_dat_atua`
        const dadosAtualizados = {
            ...dados,
            [nomeCriacao]: dataAtual,
            [nomeAtualizacao]: dataAtual
        }
        return dadosAtualizados
    }

    async pegaTodosRegistros(where={}) {
        return dataSource[this.model].findAll({ ...where })
    }

    async pegaRegistrosPorEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll()
    }

    async pegaUmRegistroPorID(id) {
        return dataSource[this.model].findByPk(id)
    }

    async pegaUmRegistro(where) {
        return dataSource[this.model].findOne({ where: {...where} })
    }

    async criaRegistro(dadosRegistro) {
        const dadosAtualizados = this.adicionaDataCriacao(dadosRegistro)
        return dataSource[this.model].create(dadosAtualizados)
    }

    async atualizaRegistro(dadosAtualizar, where) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizar, {
            where: { ...where }
        })
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false
        } else {
            return true
        }
    }

    async excluiRegistro(where) {       
        console.log(where) 
        return dataSource[this.model].destroy({
            where: { ...where }
        })
    }

}

module.exports = Services