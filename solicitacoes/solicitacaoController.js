const express = require('express');
const router = express.Router();
const Solicitacao = require('./solicitacao');
const Aquisitivo = require('../aquisitivo/Aquisitivo');

router.get('admin/solicitacoes', (req, res) => {
    Solicitacao.findAll().then(solicitacoes => {
        res.render('admin/solicitacoes/index', {solicitacoes: solicitacoes});
    })
});