// validateSSID.js
const validateSSID = (serialNumber, ssid) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
    // Verificar que ssid sea una cadena no vacía
    const isSSIDValid = typeof ssid === 'string' && ssid.trim().length > 0;
    console.log(isSerialNumberValid, isSSIDValid)
    return isSerialNumberValid && isSSIDValid;
  };
  
  export default validateSSID;
  