const express = require('express');
const app = express();
const historiqueRouter = require('./routes/historique');

app.get('/' , (req,res) => {
    res.send('We\'re home !');
});

app.get('/historique' , historiqueRouter);

app.listen('3000');
