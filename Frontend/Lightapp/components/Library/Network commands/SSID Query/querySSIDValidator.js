// validator.js
const validateSerialNumber = (serialNumber) => {
    // Verificar que serialNumber sea un número positivo de 10 dígitos
    const isSerialNumberValid = /^\d{20}$/.test(serialNumber);
    return isSerialNumberValid;
  };
  
  export default validateSerialNumber;
  