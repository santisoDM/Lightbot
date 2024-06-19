// validateLoadScene.js

// Función para validar los parámetros de loadScene
const validateLoadScene = (serialNumber, sceneNumber, playLoop) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
  
    // Verificar que sceneNumber sea un número entero positivo
    const isValidNumber = (value) => Number.isInteger(value) && value > 0;
  
    // Verificar que playLoop sea 0 (off) o 1 (on)
    const isValidPlayLoop = playLoop === 0 || playLoop === 1;
  
    return isSerialNumberValid && isValidNumber(sceneNumber) && isValidPlayLoop;
  };
  
  export default validateLoadScene;
  