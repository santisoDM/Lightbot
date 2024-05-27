// savePage.spec.js

import savePage from '../Library/Scene and positions commands/Save Page/savePage';
import validateSavePage from '../Library/Scene and positions commands/Save Page/validateSavePage';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Save Page/validateSavePage');
jest.mock('../Library/sendData');

describe('savePage', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateSavePage.mockReturnValueOnce(true);
    const result = savePage('1234567890', 5, 100);
    expect(result).toBe('1234567890,SAVEpage,5,100\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,SAVEpage,5,100\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateSavePage.mockReturnValueOnce(false);
    expect(() => savePage('12345', 5, 100)).toThrow('Invalid parameters for savePage');
  });
});
