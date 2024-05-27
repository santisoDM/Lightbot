// incrementDecrementPositions.spec.js

import incrementDecrementPositions from '../Library/Scene and positions commands/Increment-Decrement Positions/incrementDecrementPositions';
import validateIncrementDecrementPositions from '../Library/Scene and positions commands/Increment-Decrement Positions/validateIncrementDecrementPositions';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Scene and positions commands/Increment-Decrement Positions/validateIncrementDecrementPositions');
jest.mock('../Library/sendData');

describe('incrementDecrementPositions', () => {
  test('Debe devolver el string esperado para parámetros válidos', () => {
    validateIncrementDecrementPositions.mockReturnValueOnce(true);
    const result = incrementDecrementPositions('1234567890', 1, 30, 5, 1, 20, 10, 0, 50, 8);
    expect(result).toBe('1234567890,INCDEC,1,30,5,1,20,10,0,50,8,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,INCDEC,1,30,5,1,20,10,0,50,8,\\r\\n');
  });

  test('Debe lanzar un error para parámetros inválidos', () => {
    validateIncrementDecrementPositions.mockReturnValueOnce(false);
    expect(() => incrementDecrementPositions('12345', 1, 30, 5, 1, 20, 10, 0, 50, 8)).toThrow('Invalid parameters for incrementDecrementPositions');
  });
});
