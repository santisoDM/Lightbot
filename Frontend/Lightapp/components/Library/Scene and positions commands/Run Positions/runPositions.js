// runPositions.js

import { enviarComando } from '../../sendData';
import validateRunPositions from './runPositionsValidator';

// Función para ejecutar todos los canales con posiciones especificadas
const runPositions = (serialNumber, panPosition, panSpeed, tiltPosition, tiltSpeed, lampBrightness, lampSpeed, strobe, delay) => {
  let paquete;
  if (!validateRunPositions(serialNumber, panPosition, panSpeed, tiltPosition, tiltSpeed, lampBrightness, lampSpeed, strobe, delay)) {
    throw new Error('Invalid parameters for runPositions');
  }
  paquete = `${serialNumber},RUNPOS,${panPosition},${panSpeed},${tiltPosition},${tiltSpeed},${lampBrightness},${lampSpeed},${strobe},${delay},\\r\\n`;
   // enviarComando(paquete);
   console.log(paquete)
  return paquete;
};

export default runPositions;
