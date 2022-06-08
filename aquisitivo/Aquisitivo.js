const Sequelize = require('sequelize');
const connection = require('../database/database');

const Aquisitivo = connection.define('aquisitivo', {
    filial: {
        type: Sequelize.NUMBER,
    },
    matricula: {
        type: Sequelize.NUMBER,
    },
    nome: {
        type: Sequelize.STRING,
    },
    codcc: {
        type: Sequelize.NUMBER,
    },
    nomecc: {
        type: Sequelize.STRING,
    },
    codcargo: {
        type: Sequelize.NUMBER,
    },
    nomecargo: {
        type: Sequelize.STRING,
    },
    inicioper: {
        type: Sequelize.DATE,
    },
    fimper: {
        type: Sequelize.DATE,
    },
    ini1fer: {
        type: Sequelize.DATE,
    },
    dias1fer: {
        type: Sequelize.NUMBER,
    },
    abono1fer: {
        type: Sequelize.NUMBER,
    },
    ini2fer: {
        type: Sequelize.DATE,
    },
    dias2fer: {
        type: Sequelize.NUMBER,
    },
    abono2fer: {
        type: Sequelize.NUMBER,
    },
    ini3fer: {
        type: Sequelize.DATE,
    },
    dias3fer: {
        type: Sequelize.NUMBER,
    },
    abono3fer: {
        type: Sequelize.NUMBER,
    }
});