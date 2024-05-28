const validateSerialNumber = require ("../Network commands/SSID Query/querySSIDValidator")
const validateSSID = require ("./SSID Config/validateSSID")
const validateResetWifi = require ("./Reset Wifi/validateResetWifi")
const validatePassword = require ("./Password Config/validatePassword")
const validateTurnBluetoothOff = require ("./Bluetooth Off/BluetoothOffValidator")
//const { enviarComando } = require ("../sendData")
const centralController = async (serial, command, information) => {
  try {
    if (!command || typeof command != "string")
      return "Well, the command isn't the right type";
    else if (typeof information == 'number')
      return "The extra information should be or an string, or an object with strings with key value pairs that explains de exact meaning of the information.";

    switch (command) {
      case "SSID?": {
        if (!validateSerialNumber(serial)) {
          throw new Error("Invalid serialNumber");
        }
        return `${serial},${command},\r\n`;
      }
      case "SSID": {
        if (!validateSSID(serial, information?.ssid)) {
          console.log(information)
          throw new Error("Invalid serialNumber or ssid");
        }
        return `${serial},${command},${information.ssid},\\r\\n`;
      }
      case "WIFIRESET": {
        if (!validateResetWifi(serial)) {
          throw new Error("Invalid parameters for resetWifi");
        }
        return `${serial},${command},\\r\\n`;
      }
      case "PASS": {
        if (!validatePassword(serial, information?.password)) {
          throw new Error("Invalid serialNumber or password");
        }
        return `${serial},${command},${information.password},\\r\\n`;
      }
      case "PASS?": {
        let paquete;
        if (!validateSerialNumber(serial)) {
          throw new Error("Invalid serialNumber");
        }
        paquete = `${serial},${command},\r\n`;
        return `${serial},${command},\r\n`;
      }
      // default: {
      //   console.log('we are here, and the command is: ' + command)
      //   if(!validateTurnBluetoothOff(serial)) throw new Error('Invalid serialNumber');
      //   return `${serial},${command}, \r\n`
      // }
      default: {
       
        return `${serial},${command},${information}\r\n`
      }
    }
  } catch (err) {
    throw new Error(err?.message);
  }
};

module.exports= centralController;