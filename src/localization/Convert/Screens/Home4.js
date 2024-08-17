import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Home4 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'santosh',
    };
    this.event = this.clickEvent.bind(this);
  }

  clickEvent() {
    // console.log(this)
    this.setState({
      name: 'ravi',
    });
  }

  componentDidUpdate() {
    console.log('did update called');
  }

  componentDidMount() {
    console.log('did mount called');
  }

  componentWillUnmount() {
    console.log('will unmount called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    console.log(this.state.name);
    return false;
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.event}
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}
      >
        <Text>
          Click me...
          {this.state.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Home4;
