//import { BleManager } from 'react-native-ble-plx';
const {BleManager} = require('react-native-ble-plx')
const manager = new BleManager();
// Supongamos que ya tienes el id del dispositivo y el id del servicio y característica que quieres usar
const deviceId = 'device-id';
const serviceUUID = 'service-uuid';
const characteristicUUID = 'characteristic-uuid';
function enviarComando(comando) {
    // Convertir los datos a cadena de texto
    const datosString = datos.join(',');
    // Crear el paquete de envío según el protocolo, agregando "\r\n" al final
    const paquete = comando;
    // Convertir el paquete a un ArrayBuffer
    const data = new TextEncoder().encode(paquete);
    // Escribir los datos en la característica
    manager.writeCharacteristicWithResponseForDevice(
        deviceId,
        serviceUUID,
        characteristicUUID,
        data
    ).then((characteristic) => {
        console.log('Comando enviado');
    }).catch((error) => {
        console.log('Error al enviar comando:', error);
    });
}
module.exports = enviarComando

