// configureSSID.js
import validateSSID from './validateSSID';

const configureSSID = (serialNumber, ssid) => {
  if (!validateSSID(serialNumber, ssid)) {
    throw new Error('Invalid serialNumber or ssid');
  }
  return `${serialNumber},SSID,${ssid},\\r\\n`;
};

export default configureSSID;
