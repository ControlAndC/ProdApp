import { TouchableOpacity, Text } from 'react-native';
import React, { Component, useContext } from 'react';
import navContext from '../AppContext/NavigationContext';

export default Home5 = function (props) {
  console.log('Home5', props);
  const data = useContext(navContext);

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Home6');
      }}
      style={{
        backgroundColor: 'pink',
        height: 400,
      }}
    >
      <Text>{data.state.office}</Text>
    </TouchableOpacity>
  );
};
