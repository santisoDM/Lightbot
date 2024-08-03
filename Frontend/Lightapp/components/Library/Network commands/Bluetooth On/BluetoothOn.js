// turnBluetoothOn.js
import { enviarComando } from '../../sendData';
import validateTurnBluetoothOn from './BluetoothOnValidator';

const turnBluetoothOn = (serialNumber) => {
  if (!validateTurnBluetoothOn(serialNumber)) {
    throw new Error('Invalid parameters for turnBluetoothOn');
  }
  paquete = `${serialNumber},BLEON,\r\n`
   // enviarComando(paquete)
   console.log(paquete)
  return `${serialNumber},BLEON,\\r\\n`;
};

export default turnBluetoothOn;
