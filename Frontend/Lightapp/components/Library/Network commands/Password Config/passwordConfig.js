// configurePassword.js
import validatePassword from './validatePassword.js';

const configurePassword = (serialNumber, password) => {
  if (!validatePassword(serialNumber, password)) {
    throw new Error('Invalid serialNumber or password');
  }
  return `${serialNumber},PASS,${password},\\r\\n`;
};

export default configurePassword;
