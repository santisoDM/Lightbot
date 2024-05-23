// loadScene.js

import { enviarComando } from '../../sendData';
import validateLoadScene from './validateLoadScene';

// Función para cargar y ejecutar pages
const loadScene = (serialNumber, sceneNumber, playLoop) => {
  let paquete;
  if (!validateLoadScene(serialNumber, sceneNumber, playLoop)) {
    throw new Error('Invalid parameters for loadScene');
  }
  paquete = `${serialNumber},LOADscene,${sceneNumber},${playLoop},\\r\\n`;
  enviarComando(paquete);
  return paquete;
};

export default loadScene;
