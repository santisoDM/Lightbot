// loadScene.spec.js

import loadScene from '../Library/Scene and positions commands/Load Scene/loadScene';
import validateLoadScene from '../Library/Scene and positions commands/Load Scene/validateLoadScene';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Load Scene/validateLoadScene');
jest.mock('../Library/sendData');

describe('loadScene', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateLoadScene.mockReturnValueOnce(true);
    const result = loadScene('1234567890', 1, 0);
    expect(result).toBe('1234567890,LOADscene,1,0,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,LOADscene,1,0,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateLoadScene.mockReturnValueOnce(false);
    expect(() => loadScene('12345', 1, 0)).toThrow('Invalid parameters for loadScene');
  });
});
