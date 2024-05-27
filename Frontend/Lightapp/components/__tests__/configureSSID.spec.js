// configureSSID.spec.js
import configureSSID from '../Library/Network commands/SSID Config/configureSSID';
import validateSSID from '../Library/Network commands/SSID Config/validateSSID';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Network commands/SSID Config/validateSSID');
jest.mock('../Library/sendData');

describe('configureSSID', () => {
  test('Debe devolver el string esperado para un número de serie y SSID válidos', () => {
    validateSSID.mockReturnValueOnce(true);
    const result = configureSSID('1234567890', 'mySSID');
    expect(result).toBe('1234567890,SSID,mySSID,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,SSID?,mySSID\r\n');
  });

  test('Debe lanzar un error para un número de serie o SSID inválidos', () => {
    validateSSID.mockReturnValueOnce(false);
    expect(() => configureSSID('12345', 'mySSID')).toThrow('Invalid serialNumber or ssid');
    expect(() => configureSSID('1234567890', '')).toThrow('Invalid serialNumber or ssid');
  });
});
