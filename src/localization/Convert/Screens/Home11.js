import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ParkContext } from '../Contexting/ParkContext';

function Home11(props) {
  const result = useContext(ParkContext);
  console.log('context data', result);

  return (
    <TouchableOpacity
      onPress={() => {
        result.setData({
          name: 'anil',
          themeColor: 'black',
        });
      }}
    >
      <Text>
        Hello from component 11
        {result.data.name}
      </Text>
    </TouchableOpacity>
  );
}

export default Home11;
