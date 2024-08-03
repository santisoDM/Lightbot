// validateLoadPage.js

// Función para validar los parámetros de loadPage
const validateLoadPage = (serialNumber, pageNumber) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
  
    // Verificar que pageNumber sea un número entero positivo
    const isValidPageNumber = Number.isInteger(pageNumber) && pageNumber > 0;
  
    return isSerialNumberValid && isValidPageNumber;
  };
  
  export default validateLoadPage;
  