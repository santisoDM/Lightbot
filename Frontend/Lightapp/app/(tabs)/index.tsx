import React from 'react';
import TestComponentScreen from '../../components/TestComponent/TestComponentScreen'
import MinibotProvider from '../Context/minibotProvider'

const App = () => {
  return (
    <MinibotProvider> 
      <TestComponentScreen />
    </MinibotProvider>
  );
};

export default App;
