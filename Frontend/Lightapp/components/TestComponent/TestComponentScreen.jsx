
import { View, Text } from 'react-native';
import TestComponent from './TestComponent';
import React, { useContext } from 'react';
import MyContext from '@/app/Context/MyContext';

const TestComponentScreen = () => {
    const { state, setState } = useContext(MyContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Testing Command Buttons</Text>
      <TestComponent state={state} />
    </View>
  );
};

export default TestComponentScreen;
