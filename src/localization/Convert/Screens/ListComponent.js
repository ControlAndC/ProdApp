import React, { Component } from 'react';
import {
  FlatList, View, Text, Image,
} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item: { name } }) {
    console.log('called render');
    return (
      <View
        style={{
          height: 50,
        }}
      >
        <Text>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        style={{
          backgroundColor: 'red',
        }}
        data={this.props.data}
        renderItem={this.renderItem}
      />
    );
  }
}

export default List;
