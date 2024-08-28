const express = require('express');
const app = express();

app.use(express.json());

const praktikumControllerSoal2 = require('../controllers/praktikumControllerSoal2');
const convert = require('../routes/praktikumRoutesSoal2')

app.get('/celcius/:celcius', praktikumControllerSoal2.celcius);
app.get('/fahrenheit/:fahrenheit', praktikumControllerSoal2.fahrenheit);
app.get('/kelvin/:kelvin', praktikumControllerSoal2.kelvin);
app.get('/reamur/:reamur', praktikumControllerSoal2.reamur);


module.exports = app;