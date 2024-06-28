import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";

import Commands from "@/constants/Commands";

// Imports Network Commands
import querySSID from "../Library/Network commands/SSID Query/SSIDQuery";
import turnBluetoothOff from "../Library/Network commands/Bluetooth Off/BluetoothOff";
import turnBluetoothOn from "../Library/Network commands/Bluetooth On/BluetoothOn";
import queryMyIP from "../Library/Network commands/My Ip Query/myIpQuery";
import configurePassword from "../Library/Network commands/Password Config/passwordConfig";
import queryPassword from "../Library/Network commands/Password Query/passwordQuery";
import resetWifi from "../Library/Network commands/Reset Wifi/ResetWifi";
import configureSSID from "../Library/Network commands/SSID Config/configureSSID";
// Imports Scene and Positions Commands
import incrementDecrementPositions from "../Library/Scene and positions commands/Increment-Decrement Positions/incrementDecrementPositions";
import loadPage from "../Library/Scene and positions commands/Load Page/loadPage";
import savePage from "../Library/Scene and positions commands/Save Page/savePage";
import saveScene from "../Library/Scene and positions commands/Save Scene/saveScene";
import loadScene from "../Library/Scene and positions commands/Load Scene/loadScene";
import stopScene from "../Library/Scene and positions commands/Stop Scene/stopScene";
import setSpeed from "../Library/Scene and positions commands/Set Speed/setSpeed";
import setDelay from "../Library/Scene and positions commands/Set Delay/setDelay";
import runPositions from "../Library/Scene and positions commands/Run Positions/runPositions";
import useBle from "../Library/BleCom";

import Joystick from "@/components/Library/Joystick/joystickController";

const TestComponent = ({
  state,
  getMinibotData,
  getSerialNumber,
  dataObtained,
}) => {
  const [aviso, setAviso] = useState(null);
  //const [alerta, setAlerta] = useState(null);
  const [bleInfo, setBleInfo] = useState([]);
  const [inputs, setInputs] = useState({
    SSID: "WiFi_Fibertel_jru_2.4GHz",
    PASS: "xnr4mjdcxr",
    RUNPOS: {
      arg1: 1800,
      arg2: 1,
      arg3: 900,
      arg4: 1,
      arg5: 2,
      arg6: 1000,
      arg7: 10,
      arg8: 0,
      arg9: 0,
    },
    INCDEC: {
      arg1: 1,
      arg2: 30,
      arg3: 5,
      arg4: 1,
      arg5: 20,
      arg6: 10,
      arg7: 0,
      arg8: 50,
      arg9: 8,
    },
    SAVEPAGE: { page: 1, otherArg: 10 },
    LOADPAGE: 1,
    SAVESCENE: { scene: 1, arg1: 1, arg2: 3 },
    LOADSCENE: { scene: 1, arg1: 1 },
    SETSPEED: 1,
    SETDELAY: 10,
  });

  const [isJoystickVisible, setJoystickVisible] = useState(false);

  //Para lo de Ble
  const { scanForPeripherals, requestPermissions } = useBle();

  const scanDevicesXD = async () => {
    const isAllowed = await requestPermissions();

    if (isAllowed) {
      const answer = scanForPeripherals();
      answer
        ? setBleInfo([...answer])
        : setBleInfo("No hubo respuesta aparente");
    }
  };

  const scrollViewRef = useRef();

  const handleInputChange = (command, value, field) => {
    if (field) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [command]: {
          ...prevInputs[command],
          [field]: value,
        },
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [command]: value,
      }));
    }
  };

  const handlePress = (command) => {
    switch (command) {
      case "SSID":
        setAviso(configureSSID(state.serial, inputs.SSID));
        break;
      case "PASS":
        setAviso(configurePassword(state.serial, inputs.PASS));
        break;
      case "RUNPOS":
        setAviso(runPositions(state.serial, ...Object.values(inputs.RUNPOS)));
        break;
      case "INCDEC":
        setAviso(
          incrementDecrementPositions(
            state.serial,
            ...Object.values(inputs.INCDEC)
          )
        );
        break;
      case "SAVEPAGE":
        setAviso(
          savePage(state.serial, inputs.SAVEPAGE.page, inputs.SAVEPAGE.otherArg)
        );
        break;
      case "LOADPAGE":
        setAviso(loadPage(state.serial, inputs.LOADPAGE));
        break;
      case "SAVESCENE":
        setAviso(
          saveScene(
            state.serial,
            inputs.SAVESCENE.scene,
            inputs.SAVESCENE.arg1,
            inputs.SAVESCENE.arg2
          )
        );
        break;
      case "LOADSCENE":
        setAviso(
          loadScene(state.serial, inputs.LOADSCENE.scene, inputs.LOADSCENE.arg1)
        );
        break;
      case "SETSPEED":
        setAviso(setSpeed(state.serial, inputs.SETSPEED));
        break;
      case "SETDELAY":
        setAviso(setDelay(state.serial, inputs.SETDELAY));
        break;
      case "SSID?":
        setAviso(querySSID(state.serial));
        break;
      case "PASS?":
        setAviso(queryPassword(state.serial));
        break;
      case "BLEON":
        setAviso(turnBluetoothOn(state.serial));
        break;
      case "BLEOFF":
        setAviso(turnBluetoothOff(state.serial));
        break;
      case "RESETWIFI":
        setAviso(resetWifi(state.serial));
        break;
      case "MYIP":
        setAviso(queryMyIP(state.serial));
        break;
      case "STOPSCENE":
        setAviso(stopScene(state.serial));
        break;
      default:
        console.log("Comando no reconocido");
    }

    // Scroll to the "Comando enviado" section
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }, 100);
  };

  useEffect(() => {
    if (aviso) {
      console.log("esto es lo que se manda: " + aviso);
      getMinibotData(aviso);
    }
  }, [aviso]);

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
      <View style={styles.connectButtonContainer}>
        <Button title="Conectar con el dispositivo" onPress={getSerialNumber} />
        <Button title="Buscar dispositivo Ble" onPress={scanDevicesXD} />
      </View>
      <View>
        {typeof bleInfo[0] != "string" ? (
          bleInfo.map((devices) => (
            <View>
              <Text>
                Device Name:{" "}
                {devices?.name ? devices?.name : devices?.localName}
              </Text>
              <Text>Device ID: {devices?.id}</Text>
              <Text>Device Connected State: {devices?.isConnected}</Text>
              <Text>Device RSSI: {devices?.rssi}</Text>
            </View>
          ))
        ) : (
          <View>
            <Text>{bleInfo}</Text>
          </View>
        )}
      </View>
      <View style={styles.commandsContainer}>
        {Commands.map((cmd, index) => (
          <View style={styles.command} key={index}>
            <Button
              title={cmd.label}
              onPress={() => handlePress(cmd.command)}
            />
            {cmd.command === "SSID" && (
              <TextInput
                style={styles.input}
                placeholder="SSID"
                value={inputs.SSID}
                onChangeText={(text) => handleInputChange("SSID", text)}
              />
            )}
            {cmd.command === "PASS" && (
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={inputs.PASS}
                onChangeText={(text) => handleInputChange("PASS", text)}
              />
            )}
            {cmd.command === "RUNPOS" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="arg1"
                  value={inputs.RUNPOS.arg1.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg1")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg2"
                  value={inputs.RUNPOS.arg2.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg2")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg3"
                  value={inputs.RUNPOS.arg3.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg3")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg4"
                  value={inputs.RUNPOS.arg4.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg4")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg5"
                  value={inputs.RUNPOS.arg5.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg5")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg6"
                  value={inputs.RUNPOS.arg6.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg6")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg7"
                  value={inputs.RUNPOS.arg7.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg7")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg8"
                  value={inputs.RUNPOS.arg8.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg8")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg9"
                  value={inputs.RUNPOS.arg9.toString()}
                  onChangeText={(text) =>
                    handleInputChange("RUNPOS", Number(text), "arg9")
                  }
                />
              </View>
            )}
            {cmd.command === "INCDEC" && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="arg1"
                  value={inputs.INCDEC.arg1.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg1")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg2"
                  value={inputs.INCDEC.arg2.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg2")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg3"
                  value={inputs.INCDEC.arg3.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg3")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg4"
                  value={inputs.INCDEC.arg4.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg4")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg5"
                  value={inputs.INCDEC.arg5.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg5")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg6"
                  value={inputs.INCDEC.arg6.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg6")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg7"
                  value={inputs.INCDEC.arg7.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg7")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg8"
                  value={inputs.INCDEC.arg8.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg8")
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="arg9"
                  value={inputs.INCDEC.arg9.toString()}
                  onChangeText={(text) =>
                    handleInputChange("INCDEC", Number(text), "arg9")
                  }
                />
              </View>
            )}
            {(cmd.command === "RUNPOS" || cmd.command === "INCDEC") && (
              <View style={styles.joystickButtonContainer}>
                {isJoystickVisible ? (
                  <Button
                    title="Esconder Joystick"
                    onPress={() => setJoystickVisible(!isJoystickVisible)}
                  />
                ) : (
                  <Button
                    title="Mostrar Joystick"
                    onPress={() => setJoystickVisible(!isJoystickVisible)}
                  />
                )}
                {isJoystickVisible && (
                  <View style={styles.joystickContainer}>
                    <Joystick onMove={(event) => console.log(event)} />
                  </View>
                )}
              </View>
            )}
          </View>
        ))}
      </View>
      <View style={styles.avisoContainer}>
        {dataObtained && <Text style={styles.avisoText}>{dataObtained}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  connectButtonContainer: {
    marginBottom: 16,
  },
  commandsContainer: {
    marginBottom: 16,
  },
  command: {
    marginBottom: 16,
  },
  inputContainer: {
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  avisoContainer: {
    marginTop: 16,
  },
  avisoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  joystickButtonContainer: {
    marginTop: 8,
  },
  joystickContainer: {
    marginTop: 8,
    alignItems: "center",
  },
});

export default TestComponent;
