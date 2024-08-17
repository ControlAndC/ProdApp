import React, { Provider, useState } from 'react';
import appContext from './CreateContext';

function ContextWrapper(props) {
  const [data, setData] = useState({ data: 'My test context' });
  function setData_(data) {
    setData(data);
  }

  return (
    <appContext.Provider value={{ data, setData_ }}>
      {props.children}
    </appContext.Provider>
  );
}

export default ContextWrapper;

// return(<navContext.Provider value={{state,update}}>
//     {props.children}
//     </navContext.Provider>
//   )
