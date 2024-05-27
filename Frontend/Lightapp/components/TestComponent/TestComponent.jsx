import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
// Imports Network Commands
import querySSID from '../Library/Network commands/SSID Query/SSIDQuery';
import turnBluetoothOff from '../Library/Network commands/Bluetooth Off/BluetoothOff'
import turnBluetoothOn from '../Library/Network commands/Bluetooth On/BluetoothOn'
import queryMyIP from '../Library/Network commands/My Ip Query/myIpQuery'
import configurePassword from '../Library/Network commands/Password Config/passwordConfig'
import queryPassword from '../Library/Network commands/Password Query/passwordQuery'
import resetWifi from '../Library/Network commands/Reset Wifi/ResetWifi'
import configureSSID from '../Library/Network commands/SSID Config/configureSSID'
import incrementDecrementPositions from '../Library/Scene and positions commands/Increment-Decrement Positions/incrementDecrementPositions'
import loadPage from '../Library/Scene and positions commands/Load Page/loadPage'
import savePage from '../Library/Scene and positions commands/Save Page/savePage'
import saveScene from '../Library/Scene and positions commands/Save Scene/saveScene'
import loadScene from '../Library/Scene and positions commands/Load Scene/loadScene'
import stopScene from '../Library/Scene and positions commands/Stop Scene/stopScene'
import setSpeed from '../Library/Scene and positions commands/Set Speed/setSpeed'
import setDelay from '../Library/Scene and positions commands/Set Delay/setDelay'
import runPositions from '../Library/Scene and positions commands/Run Positions/runPositions'



const TestComponent = ({state}) => {
    let serialNumber = state.serialNumber
    console.log(serialNumber)
  const commands = [
    { label: 'SSID', command: 'SSID' },
    { label: 'PASS', command: 'PASS' },
    { label: 'SSID?', command: 'SSID?' },
    { label: 'PASS?', command: 'PASS?' },
    { label: 'BLEON', command: 'BLEON' },
    { label: 'BLEOFF', command: 'BLEOFF' },
    { label: 'RESETWIFI', command: 'RESETWIFI' },
    { label: 'MYIP', command: 'MYIP' },
    { label: 'RUNPOS', command: 'RUNPOS' },
    { label: 'INCDECPOS', command: 'INCDEC' },
    { label: 'SAVEPAGE', command: 'SAVEPAGE' },
    { label: 'LOADPAGE', command: 'LOADPAGE' },
    { label: 'SAVESCENE', command: 'SAVESCENE' },
    { label: 'LOADSCENE', command: 'LOADSCENE' },
    { label: 'STOPSCENE', command: 'STOPSCENE' },
    { label: 'SETSPEED', command: 'SETSPEED' },
    { label: 'SETDELAY', command: 'SETDELAY' },
  ];

  const handlePress = (command) => { 
        switch (command) {
            case 'SSID':
              configureSSID(serialNumber,"Nombre de la red")
                break;
            case 'PASS':
                configurePassword(serialNumber, '123456')
                break;
            case 'SSID?':
                querySSID(serialNumber)
                break;
            case 'PASS?':
                queryPassword(serialNumber)
                break;
            case 'BLEON':
                turnBluetoothOn(serialNumber)
                break;
            case 'BLEOFF':
                turnBluetoothOff(serialNumber)
                break;
            case 'RESETWIFI':
              resetWifi(serialNumber)
                break;
            case 'MYIP':
            queryMyIP(serialNumber)
                break;
            case 'RUNPOS':
                runPositions(serialNumber, 1800, 1, 900, 1, 2, 1000, 10, 0,0);
                break;
                case 'INCDEC':
                    incrementDecrementPositions(serialNumber, 1, 30, 5, 1, 20, 10, 0, 50, 8);
                    break;
            case 'SAVEPAGE':
                savePage(serialNumber,1,10)
                break;
            case 'LOADPAGE':
                loadPage(serialNumber, 1)
                break;
            case 'SAVESCENE':
                saveScene(serialNumber, 1, 1,3)
                break;
            case 'LOADSCENE':
                loadScene(serialNumber, 1,1)
                break;
            case 'STOPSCENE':
                stopScene(serialNumber)
                break;
            case 'SETSPEED':
               setSpeed(serialNumber, 1)
                break;
            case 'SETDELAY':
                setDelay(serialNumber, 10)
                break;
            default:
                console.log('Comando no reconocido');
        
    }
        
    console.log(`Command pressed: ${command}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {commands.map((cmd, index) => (
          <View style={styles.buttonContainer} key={index}>
            <Button title={cmd.label} onPress={() => handlePress(cmd.command)} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    paddingLeft:100,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    width: '30%',
    margin: 5,
  },
});

export default TestComponent;
