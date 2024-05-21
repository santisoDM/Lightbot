// validateTurnBluetoothOn.js
const validateTurnBluetoothOn = (serialNumber) => {
  // Verificar que serialNumber sea un número positivo de 10 dígitos
  const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
  return isSerialNumberValid;
};

export default validateTurnBluetoothOn;
