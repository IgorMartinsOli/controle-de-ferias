const express = require('express');
const router = express.Router();
const Aquisitivo = require('./aquisitivo');
const moment = require("moment");

router.get('/', function(req, res) {
    Aquisitivo.findAll()
    .then(ferias => {
        res.render('index.ejs', {ferias: ferias});
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
                res.render('admin/articles/edit', {ferias: ferias});
        }else{
            res.redirect('/');
        }
    }).catch(error => {
        res.redirect('/');
    })
});

//TODO: implementar update
router.post('/articles/update', (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    var category = req.body.category;

    Article.update(
        {title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    },
        {where: {id: id}},
        ).then(() =>{
            res.redirect('/admin/articles')
        }).catch(error => {
            console.log(error.message);
            res.redirect('/')
        })
})

module.exports = router;