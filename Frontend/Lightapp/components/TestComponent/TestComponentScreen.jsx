import React from 'react';
import { View, Text } from 'react-native';
import TestComponent from './TestComponent';
// Asegúrate de ajustar la ruta si está en una carpeta diferente

const TestComponentScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Testing Command Buttons</Text>
      <TestComponent />
    </View>
  );
};

export default TestComponentScreen;
