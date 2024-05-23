const { Router } = require('express');
const prueba = require("../udpStuff/udpDePrueba");
const updHan = Router();

updHan.get('/proof', async (req, res) => {
    try {
        const response = await prueba();
        response ? res.status(200).json({ message: response }) : res.status(400).json({ message: 'Nel mano' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = updHan;
