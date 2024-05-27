// runPositions.spec.js

import runPositions from '../Library/Scene and positions commands/Run Positions/runPositions';
import validateRunPositions from '../Library/Scene and positions commands/Run Positions/runPositionsValidator';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Run Positions/runPositionsValidator');
jest.mock('../Library/sendData');

describe('runPositions', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateRunPositions.mockReturnValueOnce(true);
    const result = runPositions('1234567890', 90, 5, 45, 3, 80, 6, 1, 500);
    expect(result).toBe('1234567890,RUNPOS,90,5,45,3,80,6,1,500,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,RUNPOS,90,5,45,3,80,6,1,500,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateRunPositions.mockReturnValueOnce(false);
    expect(() => runPositions('12345', 90, 5, 45, 3, 80, 6, 1, 500)).toThrow('Invalid parameters for runPositions');
  });
});
