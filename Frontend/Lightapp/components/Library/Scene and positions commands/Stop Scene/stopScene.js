// stopScene.js

import { enviarComando } from '../../sendData';
import validateStopScene from './validateStopScene';

// Función para detener la ejecución de una escena cargada
const stopScene = (serialNumber) => {
  let paquete;
  if (!validateStopScene(serialNumber)) {
    throw new Error('Invalid parameters for stopScene');
  }
  paquete = `${serialNumber},STOP,\\r\\n`;
   // enviarComando(paquete);
   console.log(paquete)
  return paquete;
};

export default stopScene;
