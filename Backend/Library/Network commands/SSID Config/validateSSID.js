// validateSSID.js
const validateSSID = (serialNumber, ssid) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
    // Verificar que ssid sea una cadena no vacía
    const isSSIDValid = typeof ssid === 'string' && ssid.trim().length > 0;
    return isSerialNumberValid && isSSIDValid;
  };
  
  module.exports= validateSSID;
  