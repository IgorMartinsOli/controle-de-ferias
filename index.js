const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const aquisitivoController = require('./aquisitivo/aquisitivoController');
const Aquisitivo = require('./aquisitivo/Aquisitivo');
const solicitacaoController = require('./solicitacoes/solicitacaoController');
const Solicitacao = require('./solicitacoes/Solicitacao');
const loginController = require('./views/login/loginController');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
    })

app.use('/ferias', aquisitivoController);
app.use('/solicitacao', solicitacaoController);
app.use('/login', loginController);

/*app.get('/', (req, res) => {
    Articles.findAll()
    .then(ferias => {
        res.render('index', {ferias: ferias});
    })
})*/

app.listen(8008, () => {
    console.log('listening on 8008');
});