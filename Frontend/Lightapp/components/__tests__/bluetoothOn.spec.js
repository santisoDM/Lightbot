// turnBluetoothOn.spec.js
import turnBluetoothOn from '../Library/Network commands/Bluetooth On/BluetoothOn';
import validateTurnBluetoothOn from '../Library/Network commands/Bluetooth On/BluetoothOnValidator';
import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Network commands/Bluetooth On/BluetoothOnValidator');
jest.mock('../Library/sendData');

describe('turnBluetoothOn', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateTurnBluetoothOn.mockReturnValueOnce(true);
    const result = turnBluetoothOn('1234567890');
    expect(result).toBe('1234567890,BLEON,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,BLEON,\r\n');
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateTurnBluetoothOn.mockReturnValueOnce(false);
    expect(() => turnBluetoothOn('12345')).toThrow('Invalid parameters for turnBluetoothOn');
  });
});
