// validateIncrementDecrementPositions.js

// Función para validar los parámetros de incrementDecrementPositions
const validateIncrementDecrementPositions = (serialNumber, panAction, panValue, panSpeed, tiltAction, tiltValue, tiltSpeed, lampAction, lampValue, lampSpeed) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
  
    // Verificar que panAction, tiltAction y lampAction sean valores válidos
    const isValidAction = (action) => action === 0 || action === 1 || action === 2;
  
    // Verificar que los valores de posición y velocidad sean números válidos
    const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);
  
    // Verificar que todos los valores son válidos
    const isValid = isSerialNumberValid && isValidAction(panAction) && isValidAction(tiltAction) && isValidAction(lampAction) &&
      isValidNumber(panValue) && isValidNumber(panSpeed) && isValidNumber(tiltValue) && isValidNumber(tiltSpeed) &&
      isValidNumber(lampValue) && isValidNumber(lampSpeed);
  
    return isValid;
  };
  
  export default validateIncrementDecrementPositions;
  