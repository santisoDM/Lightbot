// queryMyIP.spec.js
import queryMyIP from '../Library/Network commands/My Ip Query/myIpQuery';
import validateQueryMyIP from '../Library/Network commands/My Ip Query/MyIpQueryValidator';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Network commands/My Ip Query/MyIpQueryValidator');
jest.mock('../Library/sendData');

describe('queryMyIP', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateQueryMyIP.mockReturnValueOnce(true);
    const result = queryMyIP('1234567890');
    expect(result).toBe('1234567890,MYIP?,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,MYIP?,\r\n');
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateQueryMyIP.mockReturnValueOnce(false);
    expect(() => queryMyIP('12345')).toThrow('Invalid parameters for queryMyIP');
  });
});
