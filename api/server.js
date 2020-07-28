const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const favorecidosRoute = require('./favorecidos.route');
const tipoeventosRoute = require('./tipoeventos.route');
const fonterecursosRoute = require('./fonterecursos.route');
const naturezadespesasRoute = require('./naturezadespesas.route');
const progtrabalhosRoute = require('./progtrabalhos.route');
const tipoempenhosRoute = require('./tipoempenhos.route');
const grupodespesasRoute = require('./grupodespesas.route');
const tipolicitacoesRoute = require('./tipolicitacoes.route');
const unidgestorasRoute = require('./unidgestoras.route');
const unidorcamentariasRoute = require('./unidorcamentarias.route');

const nadsRoute = require('./nads.route');
const tipocreditosRoute = require('./tipocreditos.route.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected Banco Teste') },
  err => { console.log('Can not connect to the database'+ err)}
);

config.DB

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/favorecidos', favorecidosRoute);
app.use('/tipoeventos', tipoeventosRoute);
app.use('/tipocreditos', tipocreditosRoute);
app.use('/tipocreditos', tipocreditosRoute);
app.use('/fonterecursos', fonterecursosRoute);
app.use('/naturezadespesas', naturezadespesasRoute);
app.use('/progtrabalhos', progtrabalhosRoute);
app.use('/tipoempenhos', tipoempenhosRoute);
app.use('/grupodespesas', grupodespesasRoute);

app.use('/tipolicitacoes',tipolicitacoesRoute);
app.use('/unidgestoras',unidgestorasRoute);
app.use('/unidorcamentarias',unidorcamentariasRoute);

app.use('/nads', nadsRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});