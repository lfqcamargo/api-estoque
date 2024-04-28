const express = require('express')
const usuarios  = require('./usuarioRoute.js')
const grupos    = require('./gruposRoute.js')
const materiais = require('./materiaisRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        usuarios,
        grupos,
        materiais
    )
}