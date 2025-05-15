const express = require('express');
const router = express.Router();
const Butaca = require('../models/Butaca');

router.post('/guardar', async (req, res) => {
    const { butacas } = req.body;
    if (!butacas || !Array.isArray(butacas)) {
        return res.status(400).json({ mensaje: '🤐Butacas invalidas'});
    }
    const nueva = new Butaca({ butacas });
    await nueva.save();
    res.json({ mensaje: 'Butacas guardadas correctamente 🐬'});
});

router.get('/', async (req, res) => {
    const registros = await Butaca.find();
    res.json(registros);
});

module.exports = router;
