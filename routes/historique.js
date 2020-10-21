const express = require('express');
const router = express.Router();
const Historique = require('../models/historique');

router.get('/' , async (req,res) => {
    try{
        const historique = await Historique.find();
        res.json(historique);
    }catch(err){
        res.json({ message: err });
    }
});

router.get('/:historiqueId' , async (req , res) => {
    try{
        const historique = await Historique.findById(req.params.historiqueId);
        res.json(historique);
    }catch(err){
        res.json({ message: err })
    }
});

router.post('/' , async (req,res) => {
    const historique = new Historique({
        num_programme: req.body.num_programme,
        donnees: req.body.donnees,
        resultat: req.body.resultat,
        date: req.body.date,
        source_chatbot: req.body.source_chatbot
    });

    try{
        const savedhistorique = await historique.save();
        res.json(savedhistorique);

    }catch(err){
        res.json({ message: err });
    }
    
});

router.delete('/:historiqueId' , async (req , res) => {
    try{
        /*const historique = await Historique.findById(req.params.historiqueId);
        const deletedhistorique = historique.delete();*/
        const deletedhistorique = await Historique.remove({ _id: req.params.historiqueId } );
        res.json(deletedhistorique);
    }catch(err){
        res.json({ message:err });
    }
});

router.patch('/:historiqueId' , async (req , res) => {
    try{
        /*const historique = await Historique.findById(req.params.historiqueId);
        const editedhistorique = historique.patch({ $set:
            {num_programme: req.body.num_programme}
        })*/
        const editedhistorique = await Historique.updateOne({
            _id: req.params.historiqueId }, { $set: { num_programme:  req.body.num_programme } });
        res.json(editedhistorique);
    }catch(err){
        res.json({ message: err });
    }
});

module.exports = router;