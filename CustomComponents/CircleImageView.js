import React from 'react';
import { Image, View } from 'react-native';

export function CircleImage(props) {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        margin: 2,
        borderWidth: 2,
        borderColor: 'white',
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          backgroundColor: 'red',
        }}
        source={
          props.uri
            ? {
              uri: props.uri,
            }
            : {
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }
        }
      />
    </View>
  );
}

export function CircleImage2(props) {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        margin: 2,
        borderWidth: 2,
        borderColor: 'white',
      }}
    >
      <Image
        style={{
          height: 150,
          width: 150,
        }}
        source={
          props.uri
            ? {
              uri: props.uri,
            }
            : require('../PassportPic.jpg')
        }
      />
      {/* <Image
                    style={{height:150,width:150}}
                    source={require('../PassportPic.jpg')}
                    >

                    </Image> */}
    </View>
  );
}
