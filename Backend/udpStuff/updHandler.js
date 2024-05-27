const { Router } = require('express');
const prueba = require("../udpStuff/udpDePrueba");
const updHan = Router();

updHan.post('/communication', async (req, res) => {
    try {
        const {command} = req.body;
        if(!command || typeof command !== 'string') return "I'm so sorry, for the moment we cannot succeed with the request."
        const response = await prueba(command);
        response ? res.status(200).json({ message: response }) : res.status(400).json({ message: `Something went wrong: ${response}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = updHan;
