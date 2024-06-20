// validateQueryMyIP.js
const validateQueryMyIP = (serialNumber) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
    if (!isSerialNumberValid) {
      throw new Error('Invalid serialNumber');
    }
    return true;
  };
  
  export default validateQueryMyIP;
  