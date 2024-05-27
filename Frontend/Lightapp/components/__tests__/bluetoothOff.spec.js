// turnBluetoothOff.spec.js
import turnBluetoothOff from '../Library/Network commands/Bluetooth Off/BluetoothOff';
import validateTurnBluetoothOff from '../Library/Network commands/Bluetooth Off/BluetoothOffValidator';

import { enviarComando } from '../Library/sendData';

jest.mock('../Library/Network commands/Bluetooth Off/BluetoothOffValidator');
jest.mock('../Library/sendData');

describe('turnBluetoothOff', () => {
  test('Debe devolver el string esperado para un número de serie válido', () => {
    validateTurnBluetoothOff.mockReturnValueOnce(true);
    const result = turnBluetoothOff('1234567890');
    expect(result).toBe('1234567890,BLEOFF,\\r\\n');
    expect(enviarComando).toHaveBeenCalledWith('1234567890,BLEOFF,\r\n');
  });

  test('Debe lanzar un error para un número de serie inválido', () => {
    validateTurnBluetoothOff.mockReturnValueOnce(false);
    expect(() => turnBluetoothOff('12345')).toThrow('Invalid parameters for turnBluetoothOff');
  });
});
