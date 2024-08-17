import * as React from 'react';
import { useState } from 'react';
import navContext from './NavigationContext';

function NavState(props) {
  const initialState = {
    name: 'santosh',
    office: 'Headerlabs',
  };
  const [state, setState] = useState(initialState);
  const update = () => {
    setTimeout(() => {
      setState({
        ...initialState,
        name: 'ravi',
        office: 'bookyourpet',
      });
    }, 2000);
  };

  return (
    <navContext.Provider
      value={{
        state,
        update,
      }}
    >
      {props.children}
    </navContext.Provider>
  );
}

export default NavState;
