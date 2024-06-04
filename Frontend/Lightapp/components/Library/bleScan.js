import { PermissionsAndroid, Platform } from 'react-native';
import  BleManager  from 'react-native-ble-manager';

const requestPermissions = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        if (granted['android.permission.BLUETOOTH_SCAN'] !== PermissionsAndroid.RESULTS.GRANTED ||
            granted['android.permission.BLUETOOTH_CONNECT'] !== PermissionsAndroid.RESULTS.GRANTED ||
            granted['android.permission.ACCESS_FINE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED) {
            console.error('Bluetooth or Location permission denied');
            return false;
        }
    }
    return true;
}

export const attempting = async () => {
    const permissionsGranted = await requestPermissions();
    if (!permissionsGranted) return;

    try {
        if (!BleManager) {
            console.error('BleManager is not defined');
            return;
        }

        await BleManager.start({ showAlert: false });
        console.log('BleManager initialized!!!!!');

        BleManager.scan([], 20, true)
            .then(() => {
                console.log('Scanning started...');
                return new Promise((resolve) => setTimeout(resolve, 20000)); // Wait for 20 seconds
            })
            .then(async () => {
                // Get discovered peripherals
                const devices = await BleManager.getDiscoveredPeripherals([]);
                console.log('Discovered devices:', devices);
            })
            .catch((scanError) => {
                console.error('Error during scan:', scanError);
            });
    } catch (error) {
        console.error('Error in BleManager:', error.message);
    }
}
