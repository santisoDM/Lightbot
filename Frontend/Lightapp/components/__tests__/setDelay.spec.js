// setDelay.spec.js

import setDelay from '../Library/Scene and positions commands/Set Delay/setDelay';
import validateSetDelay from '../Library/Scene and positions commands/Set Delay/validateSetDelay';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Set Delay/validateSetDelay');
jest.mock('../Library/sendData');

describe('setDelay', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateSetDelay.mockReturnValueOnce(true);
    const result = setDelay('1234567890', 500);
    expect(result).toBe('1234567890,SETdelay,500,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,SETdelay,500,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateSetDelay.mockReturnValueOnce(false);
    expect(() => setDelay('12345', 500)).toThrow('Invalid parameters for setDelay');
  });
});
