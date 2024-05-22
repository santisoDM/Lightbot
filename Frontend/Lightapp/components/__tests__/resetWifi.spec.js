// resetWifi.spec.js
import resetWifi from '../Library/Network commands/Reset Wifi/ResetWifi';
import validateResetWifi from '../Library/Network commands/Reset Wifi/validateResetWifi';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Network commands/Reset Wifi/validateResetWifi');
jest.mock('../Library/sendData');

describe('resetWifi', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateResetWifi.mockReturnValueOnce(true);
    const result = resetWifi('1234567890');
    expect(result).toBe('1234567890,WIFIRESET,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,WIFIRESET,\r\n');
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateResetWifi.mockReturnValueOnce(false);
    expect(() => resetWifi('12345')).toThrow('Invalid parameters for resetWifi');
  });
});
