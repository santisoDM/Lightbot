import { View, Text } from 'react-native';
import TestComponent from './TestComponent';
import React, { useContext, useState, useRef, useEffect } from 'react';
import MyContext from '@/app/Context/MyContext';
import axios from 'axios';
import { URLCOMMUNICATION } from '@/constants/constants';

const TestComponentScreen = () => {
  const { state, setState } = useContext(MyContext);

  // Creamos un nuevo estado para manejar el envío de datos
  const [dataToSend, setDataToSend] = useState(null);

  const getSerialNumber = () => {
    axios.post(URLCOMMUNICATION, state)
      .then(response => {   
        const message = response.data.message;
        const parts = message.split(',');

        if (parts.length >= 3) {
          const newSerialNumber = parts[0];
          const newCommand = parts[1];
          const newData = parts.slice(2, -1).join(',');

          // Actualizamos el estado con los nuevos valores
          setState(prevState => ({
            ...prevState,
            serial: newSerialNumber,
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

  const getMinibotData = (data, message) => {
    console.log(data);
    const parts = data.split(',');
  
    if (parts.length >= 3) {
      const newSerialNumber = parts[0];
      const newCommand = parts[1];
      const newData = parts.slice(2, -1).join(',');

      // Actualizamos el estado con los nuevos valores
      setState(prevState => ({
        ...prevState,
        serial: newSerialNumber,
        command: newCommand,
        data: newData,
        message: message,
      }));

      // Actualizamos dataToSend para disparar el useEffect
      setDataToSend({
        serial: newSerialNumber,
        command: newCommand,
        data: newData,
      });
    } else {
      console.error('Formato de mensaje inesperado');
    }
  };

  useEffect(() => {
    if (dataToSend) {
      axios.post(URLCOMMUNICATION, dataToSend)
        .then(response => {
          setState(prevState => ({
            ...prevState,
            message: response.data.message,
          }));
          console.log(state);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [dataToSend]); // Este efecto se dispara cada vez que 'dataToSend' cambia


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Testing Command Buttons</Text>
      <TestComponent state={state} setState={setState} getSerialNumber={getSerialNumber} getMinibotData={getMinibotData} />
    </View>
  );
};

export default TestComponentScreen;
