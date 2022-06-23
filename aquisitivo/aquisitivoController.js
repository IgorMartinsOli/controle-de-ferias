const express = require('express');
const router = express.Router();
const Aquisitivo = require('./aquisitivo');
const moment = require("moment");

router.get('/', function(req, res) {
    Aquisitivo.findAll()
    .then(ferias => {
        res.render('index.ejs', {ferias: ferias, moment: moment});
    })
});

router.get('/admin/ferias/new', (req, res) => {
    res.render("admin/ferias/new");
}),

router.post("/aquisitivo/save", (req, res) => {
    let filial = req.body.filial;
    let matricula = req.body.matricula;
    let nome = req.body.nome;
    let codcc = req.body.codcc;
    let nomecc = req.body.nomecc;
    let codcargo = req.body.codcargo;
    let nomecargo = req.body.nomecargo;
    let inicioper = req.body.inicioper;
    let fimper = req.body.fimper;
    let ini1fer = req.body.ini1fer;
    let dias1fer = req.body.dias1fer;
    let abono1fer = req.body.abono1fer;
    let ini2fer = req.body.ini2fer;
    let dias2fer = req.body.dias2fer;
    let abono2fer = req.body.abono2fer;
    let ini3fer = req.body.ini3fer;
    let dias3fer = req.body.dias3fer;
    let abono3fer = req.body.abono3fer;
    let slug = req.body.slug;

    Aquisitivo.create({
        filial: filial,
        matricula: matricula,
        nome: nome,
        codcc: codcc,
        nomecc: nomecc,
        codcargo: codcargo,
        nomecargo: nomecargo,
        inicioper: inicioper,
        fimper: fimper,
        ini1fer: ini1fer,
        dias1fer: dias1fer,
        abono1fer: abono1fer,
        ini2fer: ini2fer,
        dias2fer: dias2fer,
        abono2fer: abono2fer,   
        ini3fer: ini3fer,
        dias3fer: dias3fer,
        abono3fer: abono3fer,
        slug: slug,
    }).then(() => {
        res.redirect("/");
    });
});

router.get('/ferias/edit/:id', (req, res) => {
    let id = req.params.id;
    Aquisitivo.findByPk(id).then(ferias => {
        if(ferias !== undefined){
                res.render('../views/admin/ferias/edit.ejs', {ferias: ferias, moment: moment});
        }else{
            res.redirect('/');
        }
    }).catch(error => {
        res.redirect('/');
    })
});

//TODO: implementar update
router.post('/ferias/update', (req, res) => {
    let ini1fer = req.body.ini1fer;
    let dias1fer = req.body.dias1fer;
    let abono1fer = req.body.abono1fer;
    let ini2fer = req.body.ini2fer;
    let dias2fer = req.body.dias2fer;
    let abono2fer = req.body.abono2fer;
    let ini3fer = req.body.ini3fer;
    let dias3fer = req.body.dias3fer;
    let abono3fer = req.body.abono3fer;

    Aquisitivo.update({
        ini1fer: ini1fer,
        dias1fer: dias1fer,
        abono1fer: abono1fer,
        ini2fer: ini2fer,
        dias2fer:dias2fer,
        abono2fer:abono2fer,
        ini3fer:ini3fer,
        dias3fer:dias3fer,
        abono3fer:abono3fer 
    },
        {where: {id: id}},
        ).then(() =>{
            res.redirect('/');
        }).catch(error => {
            console.log(error.message);
            res.redirect('/');
        })
})

router.get('/ferias/page/:num', (req, res) => {
    let page = req.params.num;
    var offset = 0;

    if(isNaN(page) || page == 1){
        offset = 0;
    }else {
        offset = (parseInt(page) -1 )*4;
    }

    Aquisitivo.findAndCountAll({
        limit: 4,
        offset: offset,
        order:[
            ['id', 'desc']
        ],
        limit: 4
    }).then(articles =>{
        var next;
        if(offset + 4 >= articles.count){
            next = false;
        }else{
            next = true;
        }

        let result = {
            page: parseInt(page),
            next: next,
            articles: articles
        }
        
        res.render('admin/articles/page', {result: result});
    })
})
module.exports = router;