// validateSetSpeed.js

// Función para validar los parámetros de setSpeed
const validateSetSpeed = (serialNumber, speed) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
  
    // Verificar que speed sea un número entero positivo
    const isValidSpeed = Number.isInteger(speed) && speed >= 0;
  
    return isSerialNumberValid && isValidSpeed;
  };
  
  export default validateSetSpeed;
  