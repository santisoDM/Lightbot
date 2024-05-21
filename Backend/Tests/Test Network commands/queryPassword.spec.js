// queryPassword.spec.js
import queryPassword from '../../Library/Network commands/Password Query/passwordQuery';
import validateSerialNumber from '../../Library/Network commands/Password Query/passwordQueryValidator';
import { enviarComando } from '../../Library/sendData';
import { jest } from '@jest/globals';

jest.mock('../../Library/Network commands/Password Query/passwordQueryValidator');
jest.mock('../../Library/sendData');

describe('queryPassword', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateSerialNumber.mockReturnValueOnce(true);
    const result = queryPassword('1234567890');
    expect(result).toBe('1234567890,PASS?,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith(result);
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateSerialNumber.mockReturnValueOnce(false);
    expect(() => queryPassword('12345')).toThrow('Invalid serialNumber');
  });
});
