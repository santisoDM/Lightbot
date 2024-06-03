// validateStopScene.js

// Función para validar los parámetros de stopScene
const validateStopScene = (serialNumber) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
    return isSerialNumberValid;
  };
  
  export default validateStopScene;
  