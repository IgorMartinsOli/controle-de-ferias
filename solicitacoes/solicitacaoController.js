const express = require('express');
const router = express.Router();
const Solicitacao = require('./solicitacao');
const Aquisitivo = require('../aquisitivo/Aquisitivo');

router.get('/admin/solicitacoes', (req, res) => {
    Solicitacao.findAll(
        {include:[{model:Aquisitivo, required: true}], where: {status: false}}
    ).then(solicitacoes => {
        res.render('admin/solicitacoes/index', {solicitacoes: solicitacoes});
    })
});

module.exports = router;