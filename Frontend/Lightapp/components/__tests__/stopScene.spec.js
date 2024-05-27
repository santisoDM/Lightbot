// stopScene.spec.js

import stopScene from '../Library/Scene and positions commands/Stop Scene/stopScene';
import validateStopScene from '../Library/Scene and positions commands/Stop Scene/validateStopScene';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Stop Scene/validateStopScene');
jest.mock('../Library/sendData');

describe('stopScene', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateStopScene.mockReturnValueOnce(true);
    const result = stopScene('1234567890');
    expect(result).toBe('1234567890,STOP,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,STOP,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateStopScene.mockReturnValueOnce(false);
    expect(() => stopScene('12345')).toThrow('Invalid parameters for stopScene');
  });
});
