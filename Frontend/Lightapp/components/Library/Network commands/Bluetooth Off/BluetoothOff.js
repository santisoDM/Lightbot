// turnBluetoothOff.js
import validateTurnBluetoothOff from './validateTurnBluetoothOff';

const turnBluetoothOff = (serialNumber) => {
  if (!validateTurnBluetoothOff(serialNumber)) {
    throw new Error('Invalid parameters for turnBluetoothOff');
  }
  return `${serialNumber},BLEOFF,\\r\\n`;
};

export default turnBluetoothOff;
