const Sequelize = require('sequelize');
const connection = require('../database/database');
const Aquisitivo = require('../aquisitivo/Aquisitivo');

const Solicitacao = connection.define('solicitacoes', {
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: true
    }, dataFim: {
        type:  Sequelize.DATE,
        allowNull: TRUE
    }, diasFerias: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, diasAbono: {
        type: Sequelize.DATE,
    }, status: {
        type: Sequelize.BOOLEAN,
    }
})

Aquisitivo.hasMany(Solicitacao); //Uma Categorias tem muitos artigos
Solicitacao.belongsTo(Aquisitivo); //Um Artigo pertence a uma categoria

module.exports = Solicitacao;