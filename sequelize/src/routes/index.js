const express        = require('express')
const usuarios       = require('./sistemas/usuarioRoute.js')
const grupos         = require('./materiais/grupoRoute.js')
const materiais      = require('./materiais/materialRoute.js')
const locais         = require('./estoques/localRoute.js')
const subLocais      = require('./estoques/subLocalRoute.js')
const corredores     = require('./estoques/corredorRoute.js')
const prateleiras    = require('./estoques/prateleiraRoute.js')
const posicoes       = require('./estoques/posicaoRoute.js')
const enderecamentos = require('./estoques/enderecamentoRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        usuarios,
        grupos,
        materiais,
        locais,
        subLocais,
        corredores,
        prateleiras,
        posicoes,
        enderecamentos
    )
}