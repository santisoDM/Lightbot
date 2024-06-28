// turnBluetoothOff.js
import { enviarComando } from '../../sendData';
import validateTurnBluetoothOff from './BluetoothOffValidator';

const turnBluetoothOff = (serialNumber) => {
  let paquete;  
  if (!validateTurnBluetoothOff(serialNumber)) {
    throw new Error('Invalid parameters for turnBluetoothOff');
  }
  paquete = `${serialNumber},BLEOFF,\r\n`
  //  enviarComando(paquete)
  console.log(paquete)
  return `${serialNumber},BLEOFF,\\r\\n`;
};

export default turnBluetoothOff;
