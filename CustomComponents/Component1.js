import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

function NewComponent() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
      }}
    >
      <Image
        style={{
          height: 150,
          width: 100,
        }}
        source={require('../PassportPic.jpg')}
      />
    </TouchableOpacity>
  );
}

export default NewComponent;
