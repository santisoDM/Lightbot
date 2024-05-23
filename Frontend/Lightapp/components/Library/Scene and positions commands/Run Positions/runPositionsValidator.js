// validateRunPositions.js

// Función para validar los parámetros de runPositions
const validateRunPositions = (serialNumber, panPosition, panSpeed, tiltPosition, tiltSpeed, lampBrightness, lampSpeed, strobe, delay) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
  
    // Verificar que los valores de posición y velocidad sean números válidos
    const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);
  
    // Verificar que todos los valores son válidos
    const isValid = isSerialNumberValid && isValidNumber(panPosition) && isValidNumber(panSpeed) &&
      isValidNumber(tiltPosition) && isValidNumber(tiltSpeed) && isValidNumber(lampBrightness) &&
      isValidNumber(lampSpeed) && isValidNumber(strobe) && isValidNumber(delay);
  
    return isValid;
  };
  
  export default validateRunPositions;
  