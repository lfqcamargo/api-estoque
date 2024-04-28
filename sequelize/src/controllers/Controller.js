const converterIds = require('../utils/conversorDeStringHelper.js')

class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService
    }

    toString() {
        return this.entidadeService
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosRegistros()
            return res.status(200).json(listaDeRegistros)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async pegaUmPorID(req, res) {
        const { id } = req.params
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorID(Number(id))
            return res.status(200).json(umRegistro)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async pegaUm(req, res) {
        const { ...params } = req.params
        const where = converterIds(params)
        console.log(where)
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistro(where)
            return res.status(200).json(umRegistro)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async criaRegistro(req, res) {
        const dadosCriacao   = req.body
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosCriacao)
            return res.status(200).json(novoRegistroCriado)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async atualizaRegistro(req, res) {
        const { ...params } = req.params
        const dadosAtualizar = req.body

        const where = converterIds(params)
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizar, where) 
            if(foiAtualizado) {
                return res.status(200).json({messagem: "Atualizado Com Sucesso"})
            } else {
                return res.status(400).json({ mensagem: "Registro Não Foi Atualizado" })
            }            
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async excluiRegistro(req, res) {
        const { ...params } = req.params;
        const where = converterIds(params)
        try {
            await this.entidadeService.excluiRegistro(where)
            return res.status(200).json({messagem: `Registro foi deletado`})
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

}

module.exports = Controller