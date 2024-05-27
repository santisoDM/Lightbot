// querySSID.spec.js


import { enviarComando } from '../Library/sendData';
import querySSID from '../Library/Network commands/SSID Query/SSIDQuery';
import validateSerialNumber from '../Library/Network commands/SSID Query/querySSIDValidator'


jest.mock('../Library/Network commands/SSID Query/querySSIDValidator');
jest.mock('../Library/sendData');

describe('querySSID', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateSerialNumber.mockReturnValueOnce(true);
    const result = querySSID('1234567890');
    expect(result).toBe('1234567890,SSID?,\r\n');
    expect(enviarComando).toHaveBeenCalledWith(result);
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateSerialNumber.mockReturnValueOnce(false);
    expect(() => querySSID('12345')).toThrow('Invalid serialNumber');
  });
});
