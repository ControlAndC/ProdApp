import React, { createContext, useState } from 'react';

export const ParkContext = createContext();

function ParkContextData(props) {
  const [data, setData] = useState({
    name: 'santosh',
    themeColor: 'yellow',
  });

  return (
    <ParkContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {props.children}
    </ParkContext.Provider>
  );
}
export default ParkContextData;
