const { Router } = require("express");
const prueba = require("../udpStuff/udpDePrueba");
const updHan = Router();
const centralController = require('../Library/Network commands/centralController');

// Ruta GET para prueba
updHan.get("/", (req, res) => {
  res.send("Hello, world!");
});

updHan.post("/", async (req, res) => {
  try {
    const { command, serial, data } = req.body;
    let valResponse;
    console.log(req.body.data);
    if (!command || typeof command !== "string")
      return res.status(400).send("I'm so sorry, for the moment we cannot succeed with the request.");
    else if (!data) {
      valResponse = await centralController(serial, command);
    } else {
      valResponse = await centralController(serial, command, data);
    }
    console.log(valResponse);
    const response = await prueba(valResponse);
    response
      ? res.status(200).json({ message: response })
      : res.status(400).json({ message: `Something went wrong: ${response}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = updHan;
