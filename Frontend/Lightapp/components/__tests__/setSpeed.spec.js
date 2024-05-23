// setSpeed.spec.js

import setSpeed from '../Library/Scene and positions commands/Set Speed/setSpeed';
import validateSetSpeed from '../Library/Scene and positions commands/Set Speed/validateSetSpeed';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Set Speed/validateSetSpeed');
jest.mock('../Library/sendData');

describe('setSpeed', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateSetSpeed.mockReturnValueOnce(true);
    const result = setSpeed('1234567890', 5);
    expect(result).toBe('1234567890,SETspeed,5,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,SETspeed,5,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateSetSpeed.mockReturnValueOnce(false);
    expect(() => setSpeed('12345', 5)).toThrow('Invalid parameters for setSpeed');
  });
});
