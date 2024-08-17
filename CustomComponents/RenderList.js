import {
  TouchableOpacity, Text, FlatList, View,
} from 'react-native';
import React, {
  Component, useContext, useEffect, useState, useRef,
} from 'react';

function RenderList(props) {
  const { item, index } = props;
  console.log('in render list', props);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Home2', {
            data: item,
            index,
          });
        }}
        style={{
          margin: 20,
          padding: 20,
          backgroundColor: 'white',
        }}
      >
        <Text>{item.name}</Text>
        <Text>{item.id}</Text>
        <Text>{item.type}</Text>
        <Text>{item.expiration}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // setheader(!header)
        }}
      >
        <Text />
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(RenderList);
