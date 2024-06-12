import { useEffect, useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device, State } from "react-native-ble-plx";
import * as ExpoDevice from "expo-device";

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  connectToDevice: (device: Device) => Promise<void>;
  disconnectFromDevice: () => void;
  connectedDevice: Device | null;
  allDevices: Device[];
}

function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);

  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Bluetooth Scan Permission",
        message: "Bluetooth Low Energy requires Bluetooth Scan permission",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Bluetooth Connect Permission",
        message: "Bluetooth Low Energy requires Bluetooth Connect permission",
        buttonPositive: "OK",
      }
    );
    const fineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location permission",
        buttonPositive: "OK",
      }
    );

    return (
      bluetoothScanPermission === PermissionsAndroid.RESULTS.GRANTED &&
      bluetoothConnectPermission === PermissionsAndroid.RESULTS.GRANTED &&
      fineLocationPermission === PermissionsAndroid.RESULTS.GRANTED
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Bluetooth Low Energy requires Location permission",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return await requestAndroid31Permissions();
      }
    } else {
      return true;
    }
  };

  const scanForPeripherals = async () => {
    const isPermissionGranted = await requestPermissions();
    if (!isPermissionGranted) {
      console.log("Permisos de Bluetooth no concedidos");
      return;
    }

    bleManager.onStateChange((state) => {
      if (state === State.PoweredOn) {
        bleManager.startDeviceScan(null, null, (error, device) => {
        
          if (error) {
            console.log('Error durante el escaneo:', error.errorCode, error.message);
            return;
          }

          if (device) {
            console.log("Esto es el serviceUUIDsr", device.serviceUUIDs);
            bleManager.stopDeviceScan();
            setAllDevices((prevState: Device[]) => {
              if (!isDuplicatedDevice(prevState, device)) {
                return [...prevState, device];
              }
              return prevState;
            });

           
          }
        });
      } else {
        console.log('El estado del BLE no está encendido:', state);
      }
    }, true);
 
  };

  const isDuplicatedDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1;

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
    } catch (e) {
      console.log("FALLÓ LA CONEXIÓN", e);
    }
  };

  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
    }
  };

  useEffect(() => {
    return () => {
      bleManager.destroy();
    };
  }, []);

  return {
    scanForPeripherals,
    requestPermissions,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
  };
}

export default useBLE;
