const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');

const tablecodeRoute = require('./tableCode.route');
const favorecidosRoute = require('./favorecidos.route');
const nadsRoute = require('./nads.route');
const ndcsRoute = require('./ndcs.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected Banco Autorização') },
  err => { console.log('Can not connect to the database'+ err)}
);

config.DB

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/tablecode', tablecodeRoute);
app.use('/favorecidos', favorecidosRoute);
app.use('/nads', nadsRoute);
app.use('/ndcs', ndcsRoute);

var ip = require("ip");
app.listen(PORT, function(){
   console.log('Server is running on Port:',ip.address()+':'+PORT);
});
