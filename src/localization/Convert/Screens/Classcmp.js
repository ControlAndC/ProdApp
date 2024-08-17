import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

class Classcmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_: 'santosh        xyz ',
      data: [1,2,3,4] ,
    };
  }

  render() {
    return <TouchableOpacity>




        
        <Text>Hello</Text>
    </TouchableOpacity>;
  }
}

export default Classcmp;
