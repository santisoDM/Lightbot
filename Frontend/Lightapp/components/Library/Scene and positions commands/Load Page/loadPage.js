// loadPage.js

import { enviarComando } from '../../sendData';
import validateLoadPage from './validateLoadPage';

// Función para cargar valores de posiciones, velocidad y strobe de los motores y lámparas desde la EEPROM
const loadPage = (serialNumber, pageNumber) => {
  let paquete;
  if (!validateLoadPage(serialNumber, pageNumber)) {
    throw new Error('Invalid parameters for loadPage');
  }
  paquete = `${serialNumber},LOADpage,${pageNumber},\\r\\n`;
  enviarComando(paquete);
  return paquete;
};

export default loadPage;
