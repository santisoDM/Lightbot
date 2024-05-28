// resetWifi.js
import { enviarComando } from '../../sendData.js';
import validateResetWifi from './validateResetWifi.js';

const resetWifi = (serialNumber) => {
  if (!validateResetWifi(serialNumber)) {
    throw new Error('Invalid parameters for resetWifi');
  }  
  paquete = `${serialNumber},WIFIRESET,\r\n`
   // enviarComando(paquete)
   console.log(paquete)
  return `${serialNumber},WIFIRESET,\\r\\n`;
};

export default resetWifi;
