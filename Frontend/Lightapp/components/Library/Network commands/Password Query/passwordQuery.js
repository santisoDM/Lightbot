// queryPassword.js
import { enviarComando } from '../../sendData';
import validateSerialNumber from './passwordQueryValidator';

const queryPassword = (serialNumber) => {
let paquete;
  if (!validateSerialNumber(serialNumber)) {
    throw new Error('Invalid serialNumber');
  }
  paquete = `${serialNumber},PASS?,\r\n`
  enviarComando(paquete)
 
  return `${serialNumber},PASS?,\r\n`;
};


export default queryPassword;
