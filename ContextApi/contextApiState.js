import React, { useState } from 'react';
import ContentApiCreateContext from './contentApiCreateContext';

const contextApiState = (props) => {
  const initailState = [
    {
      id: 1,
      name: 'shampoo',
      category: 'skin',
    },
  ];
  const [appData, setAppData] = useState(initailState);
  const updateAppData = (data) => {
    setAppData(data);
  };
  return (
    <ContentApiCreateContext.Provider
      value={{
        appData,
        updateAppData,
      }}
    >
      {props.children}
    </ContentApiCreateContext.Provider>
  );
};
export default contextApiState;
