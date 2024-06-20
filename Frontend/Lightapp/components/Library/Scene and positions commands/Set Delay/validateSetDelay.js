// validateSetDelay.js

// Función para validar los parámetros de setDelay
const validateSetDelay = (serialNumber, delay) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
  
    // Verificar que delay sea un número entero positivo
    const isValidDelay = Number.isInteger(delay) && delay >= 0;
  
    return isSerialNumberValid && isValidDelay;
  };
  
  export default validateSetDelay;
  