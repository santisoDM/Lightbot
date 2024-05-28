const { Router } = require("express");
const prueba = require("../udpStuff/udpDePrueba");
const updHan = Router();
const centralController = require('../Library/Network commands/centralController')
updHan.post("/communication", async (req, res) => {
  try {
    const { command, serial , info} = req.body;
    let valResponse;
    console.log(req.body.info)
    if (!command || typeof command !== "string")
      return "I'm so sorry, for the moment we cannot succeed with the request.";
    else if(!info){
valResponse= await centralController(serial,command);
    } else valResponse = await centralController(serial,command, info);
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
