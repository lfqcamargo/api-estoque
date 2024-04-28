class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService
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

    async criaRegistro(req, res) {
        const dadosCriacao = req.body
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosCriacao)
            return res.status(200).json(novoRegistroCriado)
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

    async atualizaRegistro(req, res) {
        const { id } = req.params
        const dadosAtualizar = req.body
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizar, Number(id)) 
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
        const { id } = req.params
        try {
            await this.entidadeService.excluiRegistro(Number(id))
            return res.status(200).json({messagem: `ID: ${id} foi deletado`})
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

}

module.exports = Controller