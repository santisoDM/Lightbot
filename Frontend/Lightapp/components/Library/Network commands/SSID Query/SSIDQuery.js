// querySSID.js
// import { enviarComando } from '../../sendData';
import validateSerialNumber from './querySSIDValidator';

const querySSID = (serialNumber) => {
  console.log(serialNumber)
  let paquete;
  if (!validateSerialNumber(serialNumber)) {
    throw new Error('Invalid serialNumber');
  }
  paquete = `${serialNumber},SSID?,\r\n`
  //  // enviarComando(paquete)
  console.log(paquete)
  return `${serialNumber},SSID?,\r\n`;
};

export default querySSID;
