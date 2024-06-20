// validatePassword.js
const validatePassword = (serialNumber, password) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
    // Verificar que password sea una cadena no vacía
    const isPasswordValid = typeof password === 'string' && password.trim().length > 0;
    return isSerialNumberValid && isPasswordValid;
  };
  
  export default validatePassword;
  