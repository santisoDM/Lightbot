// setDelay.js

import { enviarComando } from '../../sendData';
import validateSetDelay from './validateSetDelay';

// Función para cambiar la pausa de cada página una vez ejecutada la escena
const setDelay = (serialNumber, delay) => {
  let paquete;
  if (!validateSetDelay(serialNumber, delay)) {
    throw new Error('Invalid parameters for setDelay');
  }
  paquete = `${serialNumber},SETdelay,${delay},\\r\\n`;
  enviarComando(paquete);
  return paquete;
};

export default setDelay;
