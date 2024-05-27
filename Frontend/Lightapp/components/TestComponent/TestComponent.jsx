import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

const TestComponent = () => {
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
    { label: 'INCDECPOS', command: 'INCDECPOS' },
    { label: 'SAVEPAGE', command: 'SAVEPAGE' },
    { label: 'LOADPAGE', command: 'LOADPAGE' },
    { label: 'SAVESCENE', command: 'SAVESCENE' },
    { label: 'LOADSCENE', command: 'LOADSCENE' },
    { label: 'STOPSCENE', command: 'STOPSCENE' },
    { label: 'SETSPEED', command: 'SETSPEED' },
    { label: 'SETDELAY', command: 'SETDELAY' },
  ];

  const handlePress = (command) => {
    // Aquí iría la lógica para manejar el comando
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
