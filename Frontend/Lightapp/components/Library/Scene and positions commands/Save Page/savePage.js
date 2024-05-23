// savePage.js

import { enviarComando } from '../../sendData';
import validateSavePage from './validateSavePage';

// Función para guardar el estado de todos los canales en una página específica
const savePage = (serialNumber, pageNumber, delay) => {
  let paquete;
  if (!validateSavePage(serialNumber, pageNumber, delay)) {
    throw new Error('Invalid parameters for savePage');
  }
  paquete = `${serialNumber},SAVEpage,${pageNumber},${delay}\\r\\n`;
  enviarComando(paquete);
  return paquete;
};

export default savePage;
