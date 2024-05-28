// validatePassword.js
const validatePassword = (serialNumber, password) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{10}$/.test(serialNumber);
    // Verificar que password sea una cadena no vacía
    const isPasswordValid = typeof password === 'string' && password.trim().length > 0;
    return isSerialNumberValid && isPasswordValid;
  };
  
 module.exports= validatePassword;
  