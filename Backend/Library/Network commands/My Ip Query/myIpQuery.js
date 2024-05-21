// queryMyIP.js
import validateQueryMyIP from './validateQueryMyIP';

const queryMyIP = (serialNumber) => {
  validateQueryMyIP(serialNumber);
  return `${serialNumber},MYIP?,\\r\\n`;
};

export default queryMyIP;
