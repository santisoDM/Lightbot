// setSpeed.js

import { enviarComando } from '../../sendData';
import validateSetSpeed from './validateSetSpeed';

// Función para cambiar la velocidad de ejecución de la escena
const setSpeed = (serialNumber, speed) => {
  let paquete;
  if (!validateSetSpeed(serialNumber, speed)) {
    throw new Error('Invalid parameters for setSpeed');
  }
  paquete = `${serialNumber},SETspeed,${speed},\\r\\n`;
   // enviarComando(paquete);
   console.log(paquete)
  return paquete;
};

export default setSpeed;
