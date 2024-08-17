import React, { createContext } from 'react';

const userContext = createContext();
console.log('userContext from var', userContext);
console.log('userContext directly from createContext', createContext);

export default userContext;
