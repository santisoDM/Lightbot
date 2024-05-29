import React,{useState} from 'react';
import { View, Button, StyleSheet, ScrollView, Text } from 'react-native';
// Imports Network Commands
import querySSID from '../Library/Network commands/SSID Query/SSIDQuery';
import turnBluetoothOff from '../Library/Network commands/Bluetooth Off/BluetoothOff'
import turnBluetoothOn from '../Library/Network commands/Bluetooth On/BluetoothOn'
import queryMyIP from '../Library/Network commands/My Ip Query/myIpQuery'
import configurePassword from '../Library/Network commands/Password Config/passwordConfig'
import queryPassword from '../Library/Network commands/Password Query/passwordQuery'
import resetWifi from '../Library/Network commands/Reset Wifi/ResetWifi'
import configureSSID from '../Library/Network commands/SSID Config/configureSSID'
// Imports Scene and Positions Commands
import incrementDecrementPositions from '../Library/Scene and positions commands/Increment-Decrement Positions/incrementDecrementPositions'
import loadPage from '../Library/Scene and positions commands/Load Page/loadPage'
import savePage from '../Library/Scene and positions commands/Save Page/savePage'
import saveScene from '../Library/Scene and positions commands/Save Scene/saveScene'
import loadScene from '../Library/Scene and positions commands/Load Scene/loadScene'
import stopScene from '../Library/Scene and positions commands/Stop Scene/stopScene'
import setSpeed from '../Library/Scene and positions commands/Set Speed/setSpeed'
import setDelay from '../Library/Scene and positions commands/Set Delay/setDelay'
import runPositions from '../Library/Scene and positions commands/Run Positions/runPositions'

const TestComponent = ({state, getSerialNumber, getMinibotData, dataObtained}) => {
  const [aviso, setAviso] = useState(null)
  let serialNumber = state.serialNumber
  
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
      setAviso(configureSSID(serialNumber, "Nombre de la red"))
      getMinibotData(aviso)
        break;
      case 'PASS':
        setAviso(configurePassword(serialNumber, '123456'))
        getMinibotData(aviso)
        break;
      case 'SSID?':
        setAviso(querySSID(serialNumber))
        getMinibotData(aviso) //da error
        break;
      case 'PASS?':
        setAviso(queryPassword(serialNumber))
        getMinibotData(aviso) //daerror
        break;
      case 'BLEON':
        setAviso(turnBluetoothOn(serialNumber))
        getMinibotData(aviso)
        break;
      case 'BLEOFF':
        setAviso(turnBluetoothOff(serialNumber))
        getMinibotData(aviso)
        break;
      // case 'RESETWIFI':
      //   setAviso(resetWifi(serialNumber))
      //   break;
      case 'MYIP':
        setAviso(queryMyIP(serialNumber))
        getMinibotData(aviso)
        break;
      case 'RUNPOS':
        setAviso(runPositions(serialNumber, 1800, 1, 900, 1, 2, 1000, 10, 0, 0))
                getMinibotData(aviso)
        break;
      case 'INCDEC':
        setAviso(incrementDecrementPositions(serialNumber, 1, 30, 5, 1, 20, 10, 0, 50, 8))
        getMinibotData(aviso)
        break;
      case 'SAVEPAGE':
        setAviso(savePage(serialNumber, 1, 10))
        getMinibotData(aviso)        
        break;
      case 'LOADPAGE':
        setAviso(loadPage(serialNumber, 1))
        getMinibotData(aviso)
        break;
      case 'SAVESCENE':
        setAviso(saveScene(serialNumber, 1, 1, 3))
        getMinibotData(aviso)
        break;
      case 'LOADSCENE':
        setAviso(loadScene(serialNumber, 1, 1))
        getMinibotData(aviso)
        break;
      case 'STOPSCENE':
        setAviso(stopScene(serialNumber))
        getMinibotData(aviso)
        break;
      case 'SETSPEED':
        setAviso(setSpeed(serialNumber, 1))
        getMinibotData(aviso)
        break;
      case 'SETDELAY':
        setAviso(setDelay(serialNumber, 10))
        getMinibotData(aviso)
        break;
      default:
        console.log('Comando no reconocido')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.connectButtonContainer}>
        <Button title='Conectar con el dispositivo' onPress={getSerialNumber}/>
      </View>
      <View style={styles.row}>
        {commands.map((cmd, index) => (
          <View style={styles.buttonContainer} key={index}>
            <Button title={cmd.label} onPress={() => (handlePress(cmd.command))} />
          </View>
        ))}
      </View>
      <View>
        <Text style={styles.text}>Comando enviado</Text>
        {
          !aviso 
          ?
          ''
          :
          <Text style={styles.text}>{aviso}</Text>
        }
<Text style={styles.text}>{dataObtained}</Text> 
<Text style={styles.text}>{serialNumber}</Text> 

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 100,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    width: '30%',
    margin: 5,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  connectButtonContainer: {
    marginTop: 20,
    marginRight: 50,
    padding: 10,   
    borderRadius: 5,
  },
})

export default TestComponent
