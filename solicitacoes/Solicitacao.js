const Sequelize = require('sequelize');
const connection = require('../database/database');
const Aquisitivo = require('../aquisitivo/Aquisitivo');

const Solicitacao = connection.define('solicitacoes', {
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: true
    }, dataFim: {
        type:  Sequelize.DATE,
        allowNull: true
    }, diasFerias: {
        type: Sequelize.INTEGER,
        allowNull: true
    }, diasAbono: {
        type: Sequelize.DATE,
        allowNull: true,
    }, status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})


//Solicitacao.sync({force: true});
Aquisitivo.hasMany(Solicitacao); //Um periodo aquisitivo tem muitas solicitacoes


Solicitacao.belongsTo(Aquisitivo); //Uma solicitacao pertence a um periodo



module.exports = Solicitacao;