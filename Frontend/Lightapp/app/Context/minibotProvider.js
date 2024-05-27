// src/context/MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MinibotProvider = ({ children }) => {
  const [state, setState] = useState({ 
    serialNumber: '3056105880'
   });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MinibotProvider;
