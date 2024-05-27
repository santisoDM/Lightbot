// incrementDecrementPositions.js

import { enviarComando } from '../../sendData';
import validateIncrementDecrementPositions from './validateIncrementDecrementPositions';

// Función para incrementar o decrementar posiciones
const incrementDecrementPositions = (serialNumber, panAction, panValue, panSpeed, tiltAction, tiltValue, tiltSpeed, lampAction, lampValue, lampSpeed) => {
  let paquete;
  if (!validateIncrementDecrementPositions(serialNumber, panAction, panValue, panSpeed, tiltAction, tiltValue, tiltSpeed, lampAction, lampValue, lampSpeed)) {
    throw new Error('Invalid parameters for incrementDecrementPositions');
  }
  
  paquete = `${serialNumber},INCDEC,${panAction},${panValue},${panSpeed},${tiltAction},${tiltValue},${tiltSpeed},${lampAction},${lampValue},${lampSpeed},\\r\\n`;
   // enviarComando(paquete);
   console.log(paquete)
  return paquete;
};

export default incrementDecrementPositions;
