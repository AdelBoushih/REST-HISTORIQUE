const express = require('express');
const app = express();

app.get('/' , (req,res) => {
    res.send('We\'re home !');
});

const historiqueRouter = require('./routes/historique');
app.use('/historique' , historiqueRouter);

app.listen('3000');
