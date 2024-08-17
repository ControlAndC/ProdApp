import React, { useEffect } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

function RenderRow({ item, value, index }) {
  console.log('RenderRow called....');
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'green', margin: 20 }}
      onPress={() => {
        //    props.value('santosh')
        value(item.firstName);
      }}
    >
      <Text>
        {item.firstName}
      </Text>

      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: 'https://reactnative.dev/img/big_logo.png' }}
      />
    </TouchableOpacity>
  );
}

export default React.memo(RenderRow);
