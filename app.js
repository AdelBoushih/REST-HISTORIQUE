const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyparser.json());

app.get('/' , (req,res) => {
    res.send('We\'re home !');
});

const historiqueRouter = require('./routes/historique');
app.use('/historique' , historiqueRouter);

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true } , () => {
    console.log('We\' re connected.');
})

app.listen('3000');
