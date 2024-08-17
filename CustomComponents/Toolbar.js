import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Toolbar({ data }) {
  console.log('called toolbar');

  return (
    <View
      style={{
        height: 30,
        width: '100%',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            alignSelf: 'flex-end',
            fontSize: 14,
            padding: 10,
          }}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Toolbar;
