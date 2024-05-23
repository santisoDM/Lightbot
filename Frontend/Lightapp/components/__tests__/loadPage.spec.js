// loadPage.spec.js

import loadPage from '../Library/Scene and positions commands/Load Page/loadPage';
import validateLoadPage from '../Library/Scene and positions commands/Load Page/validateLoadPage';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Load Page/validateLoadPage');
jest.mock('../Library/sendData');

describe('loadPage', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateLoadPage.mockReturnValueOnce(true);
    const result = loadPage('1234567890', 5);
    expect(result).toBe('1234567890,LOADpage,5,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,LOADpage,5,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateLoadPage.mockReturnValueOnce(false);
    expect(() => loadPage('12345', 5)).toThrow('Invalid parameters for loadPage');
  });
});
