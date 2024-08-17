import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

function Filter({ filter, setFilter, value }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setFilter(!value);
      }}
      style={{
        backgroundColor: 'lightblue',
        height: 30,
        alignItems: 'flex-end',
      }}
    >
      <Image
        style={{
          height: 30,
          width: 30,
        }}
        source={filter}
      />
    </TouchableOpacity>
  );
}
export default Filter;
