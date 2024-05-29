// src/context/MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MinibotProvider = ({ children }) => {
  const [state, setState] = useState({ 
    serialNumber: '1234567890',
    command: "prueba",
    data: null,
   });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MinibotProvider;
