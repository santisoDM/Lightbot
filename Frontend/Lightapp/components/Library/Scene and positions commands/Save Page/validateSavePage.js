// validateSavePage.js

// Función para validar los parámetros de savePage
const validateSavePage = (serialNumber, pageNumber, delay) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
  
    // Verificar que pageNumber sea un número entero positivo
    const isValidPageNumber = Number.isInteger(pageNumber) && pageNumber > 0;
  
    // Verificar que delay sea un número entero positivo
    const isValidDelay = Number.isInteger(delay) && delay > 0;
  
    return isSerialNumberValid && isValidPageNumber && isValidDelay;
  };
  
  export default validateSavePage;
  