// saveScene.js

import { enviarComando } from '../../sendData';
import validateSaveScene from './validateSaveScene';

// Función para guardar escena en la EEPROM
const saveScene = (serialNumber, sceneNumber, startPage, endPage) => {
  let paquete;
  if (!validateSaveScene(serialNumber, sceneNumber, startPage, endPage)) {
    throw new Error('Invalid parameters for saveScene');
  }
  paquete = `${serialNumber},SAVEscene,${sceneNumber},${startPage},${endPage},\\r\\n`;
   // enviarComando(paquete);
   console.log(paquete)
  return paquete;
};

export default saveScene;
