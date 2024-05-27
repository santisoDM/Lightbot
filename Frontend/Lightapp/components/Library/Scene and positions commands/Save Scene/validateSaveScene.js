// validateSaveScene.js

// Función para validar los parámetros de saveScene
const validateSaveScene = (serialNumber, sceneNumber, startPage, endPage) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
  
    // Verificar que sceneNumber, startPage y endPage sean números enteros positivos
    const isValidNumber = (value) => Number.isInteger(value) && value > 0;
  
    return isSerialNumberValid && isValidNumber(sceneNumber) && isValidNumber(startPage) && isValidNumber(endPage);
  };
  
  export default validateSaveScene;
  