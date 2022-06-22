const Sequelize = require('sequelize');
const connection = require('../database/database');

const Aquisitivo = connection.define('aquisitivo', {
    filial: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    codcc: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    nomecc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    codcargo: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    nomecargo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    inicioper: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    fimper: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    ini1fer: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    dias1fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    abono1fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ini2fer: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    dias2fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    abono2fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ini3fer: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    dias3fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    abono3fer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

//Aquisitivo.sync({force: true});

module.exports = Aquisitivo;