require('dotenv').config();
const express = require('express');

const { dbConnection, conectarBaseDeDatos } = require('./db/config');
const app = express();


app.use(express.static('public'));

app.use(express.json());

app.use('/product', require('./routes/products'));
app.use('/price', require('./routes/price'));

app.listen(process.env.PORT , () => {
    conectarBaseDeDatos();
    console.log('corriendo en puerto:', process.env.PORT);
});