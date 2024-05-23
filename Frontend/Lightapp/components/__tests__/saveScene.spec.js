// saveScene.spec.js

import saveScene from '../Library/Scene and positions commands/Save Scene/saveScene';
import validateSaveScene from '../Library/Scene and positions commands/Save Scene/validateSaveScene';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Save Scene/validateSaveScene');
jest.mock('../Library/sendData');

describe('saveScene', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateSaveScene.mockReturnValueOnce(true);
    const result = saveScene('1234567890', 1, 5, 10);
    expect(result).toBe('1234567890,SAVEscene,1,5,10,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,SAVEscene,1,5,10,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateSaveScene.mockReturnValueOnce(false);
    expect(() => saveScene('12345', 1, 5, 10)).toThrow('Invalid parameters for saveScene');
  });
});
