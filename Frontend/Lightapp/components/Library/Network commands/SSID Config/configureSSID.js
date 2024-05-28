// configureSSID.js
import { enviarComando } from '../../sendData';
import validateSSID from './validateSSID';

const configureSSID = (serialNumber, ssid) => {

  let paquete
  if (!validateSSID(serialNumber, ssid)) {
    throw new Error('Invalid serialNumber or ssid');
  }
  paquete = `${serialNumber},SSID?,${ssid}\r\n`
   // enviarComando(paquete)
   console.log(paquete)
  return `${serialNumber},SSID,${ssid},\\r\\n`;
};

export default configureSSID;
