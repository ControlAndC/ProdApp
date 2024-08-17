import { TouchableOpacity, Text } from 'react-native';
import React, { Component, useContext, useEffect } from 'react';
import navContext from '../AppContext/NavigationContext';

export default Home6 = function (props) {
  console.log('Home6', props);
  const data = useContext(navContext);

  useEffect(() => {
    data.update();
  }, []);
  return (
    <View
      onPress={() => {
        props.navigation.navigate('Home1');
      }}
      style={{
        backgroundColor: 'pink',
        height: 400,
      }}
    >
      <Text>{data.state.office}</Text>
    </View>
  );
};
