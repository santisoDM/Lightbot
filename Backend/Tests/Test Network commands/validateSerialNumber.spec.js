// validateSerialNumber.spec.js
import validateSerialNumber from '../../Library/Network commands/Password Query/passwordQueryValidator';

describe('validateSerialNumber', () => {
  test('Debe devolver true para un número de serie válido', () => {
    const result = validateSerialNumber('1234567890');
    expect(result).toBe(true);
  });

  test('Debe devolver false para un número de serie inválido', () => {
    const result = validateSerialNumber('12345');
    expect(result).toBe(false);
  });
});
