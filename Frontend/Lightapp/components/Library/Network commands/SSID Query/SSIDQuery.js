// querySSID.js
import validateSerialNumber from './validateSerialNumber';

const querySSID = (serialNumber) => {
  if (!validateSerialNumber(serialNumber)) {
    throw new Error('Invalid serialNumber');
  }
  return `${serialNumber},SSID?,\r\n`;
};

export default querySSID;
