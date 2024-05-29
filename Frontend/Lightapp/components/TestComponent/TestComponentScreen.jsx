import { View, Text } from 'react-native';
import TestComponent from './TestComponent';
import React, { useContext, useState } from 'react';
import MyContext from '@/app/Context/MyContext';
import axios from 'axios';
import { URLCOMMUNICATION } from '@/constants/constants';

const TestComponentScreen = () => {
  const { state, setState } = useContext(MyContext);
  const [dataToSend, setDataToSend] = useState(null);
  const [dataObtained, setDataObtained] = useState('Aún no se ha iniciado ninguna comunicación');

  const getSerialNumber = () => {

    axios.post(URLCOMMUNICATION, state)
      .then(response => {
        console.log(response.data);

        const message = response.data.message;
        const parts = message.split(',');

        if (parts.length >= 3) {
          const newSerialNumber = parts[0];
          const newCommand = parts[1];
          const newData = parts.slice(2, -1).join(',');

          // Actualizamos el estado con los nuevos valores
          setState(prevState => ({
            ...prevState,
            serialNumber: newSerialNumber,
            command: newCommand,
            data: newData,
          }));
        } else {
          console.error('Formato de mensaje inesperado');
        }
      })
      .catch(error => {
        alert('Error', 'Hubo un error al crear el post');
      });
  };

  const getMinibotData = (data) => {
    console.log(data);
    console.log("Los datos son: " + data);

    if (data) { // Verificamos que data no sea null o undefined
      const parts = data.split(',');

      if (parts.length >= 3) {
        const newSerialNumber = parts[0];
        const newCommand = parts[1];
        const newData = parts.slice(2, -1).join(',');

        // Actualizamos el estado con los nuevos valores
        setState({
          serial: newSerialNumber,
          command: newCommand,
          data: newData,
        });
      } else {
        console.error('Formato de mensaje inesperado');
      }
    } else {
      console.error('Data es null o undefined');
    }

    console.log(dataToSend);
    axios.post(URLCOMMUNICATION, dataToSend)
      .then(response => {
        console.log(response.data);
        setDataObtained(response.data); // Actualizamos el estado con la respuesta obtenida
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Testing Command Buttons</Text>
      <TestComponent state={state} getSerialNumber={getSerialNumber} getMinibotData={getMinibotData} dataObtained={dataObtained} />
    </View>
  );
};

export default TestComponentScreen;
