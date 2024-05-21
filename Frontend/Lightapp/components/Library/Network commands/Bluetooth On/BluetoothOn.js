// turnBluetoothOn.js
import validateTurnBluetoothOn from './validateTurnBluetoothOn';

const turnBluetoothOn = (serialNumber) => {
  if (!validateTurnBluetoothOn(serialNumber)) {
    throw new Error('Invalid parameters for turnBluetoothOn');
  }
  return `${serialNumber},BLEON,\\r\\n`;
};

export default turnBluetoothOn;
