import React, { useState } from 'react';
import appContext from './AppContext';

function AppState(props) {
  const initialData = {
    loader: '',
    data: [],
    header: 'initial Header',
    error: {
      status: false,
      message: '',
    },
  };

  const [appStateData, setAppState] = useState(initialData);
  const updateAppState = (data) => {
    console.log('<--params to update-->', data);
    setAppState({ ...appStateData, ...data });
  };
  return (
    <appContext.Provider value={{ appStateData, updateAppState }}>
      {props.children}
    </appContext.Provider>

  );
}

export default AppState;
