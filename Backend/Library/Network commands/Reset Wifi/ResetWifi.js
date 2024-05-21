// resetWifi.js
import validateResetWifi from './validateResetWifi.js';

const resetWifi = (serialNumber) => {
  if (!validateResetWifi(serialNumber)) {
    throw new Error('Invalid parameters for resetWifi');
  }
  return `${serialNumber},WIFIRESET,\\r\\n`;
};

export default resetWifi;
