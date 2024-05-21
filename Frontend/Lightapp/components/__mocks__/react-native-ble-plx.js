// __mocks__/react-native-ble-plx.js
export const BleManager = jest.fn(() => ({
    writeCharacteristicWithResponseForDevice: jest.fn(),
    // Otros métodos simulados que necesites...
  }));
  