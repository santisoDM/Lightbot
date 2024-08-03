// queryMyIP.js
import { enviarComando } from '../../sendData';
import validateQueryMyIP from './MyIpQueryValidator';

const queryMyIP = (serialNumber) => {
  if (!validateQueryMyIP(serialNumber)) {
    throw new Error('Invalid parameters for queryMyIP');
  } 
  paquete = `${serialNumber},MYIP?,\r\n`
   // enviarComando(paquete)
   console.log(paquete)
  return `${serialNumber},MYIP?,\\r\\n`;
};

export default queryMyIP;
