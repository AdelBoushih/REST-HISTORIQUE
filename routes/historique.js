const express = require('express');

const router = express.Router();

router.get('/' , (req,res) => {
    res.send('We\'re on historique !');
});

module.exports = router;