import React, { useState } from 'react';
import UserContext from './UserContext';

function UserContextState(props) {
  const var1 = {
    name: 'santosh',
    office: 'Headerlabs',
  };

  const [state, setState] = useState(var1);

  const updateState = (data) => {
    setTimeout(() => {
      setState(data);
    }, 2000);
  };
  return (
    <UserContext.Provider
      value={{
        state,
        updateState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextState;
