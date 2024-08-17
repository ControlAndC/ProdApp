import React, { Component, useContext, useEffect } from 'react';

import { Text, View } from 'react-native';

import UserContext from '../UserContext/UserContext';

function Home8(props) {
  const variable = useContext(UserContext);
  useEffect(() => {
    variable.updateState({
      name: 'santosh',
      office: 'Hello ji',
    });
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'red',
      }}
    >
      <Text>{variable.state.office}</Text>
    </View>
  );
}
export default Home8;
