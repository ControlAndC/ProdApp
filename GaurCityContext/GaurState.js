import React, { useState } from 'react';
import gaurContext from './GaurContext';

function GaurContextState(props) {
  const initialState = {
    id: '001',
    name: 'santosh',
    cityAvenue: 'fourth',
  };
  const [state, setState] = useState(initialState);
  const update = (params) => {
    setState({
      ...state,
      ...params,
    });
  };

  return (
    <gaurContext.Provider
      value={{
        state,
        update,
      }}
    >
      {props.children}
    </gaurContext.Provider>
  );
}

export default GaurContextState;
