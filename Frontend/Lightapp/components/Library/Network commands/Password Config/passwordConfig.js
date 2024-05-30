// configurePassword.js
import { enviarComando } from '../../sendData';
import validatePassword from './validatePassword.js';

const configurePassword = (serialNumber, password) => {
  if (!validatePassword(serialNumber, password)) {
    throw new Error('Invalid serialNumber or password');
  }
  paquete = `${serialNumber},PASS,${password},\\r\\n`
   // enviarComando(paquete)
   console.log(paquete)
  return `${serialNumber},PASS,${password}\r\n,`;
};

export default configurePassword;
