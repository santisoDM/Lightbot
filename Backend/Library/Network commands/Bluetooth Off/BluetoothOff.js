// turnBluetoothOff.js
import validateTurnBluetoothOff from './BluetoothOffValidator';

const turnBluetoothOff = (serialNumber) => {
  if (!validateTurnBluetoothOff(serialNumber)) {
    throw new Error('Invalid parameters for turnBluetoothOff');
  }
  return `${serialNumber},BLEOFF,\\r\\n`;
};

export default turnBluetoothOff;
