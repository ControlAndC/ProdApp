import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import { View, Text, TouchableOpacity } from 'react-native';

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      details: {},
      intervalId: 0,
      counter: 2,
    };
    this.letsStart = this.startCounter.bind(this);
  }


  startCounter() {
    console.log('test')
    const interval = setInterval(() => {
      if (this.state.counter == 1) clearInterval(this.state.intervalId);
      this.setState({
        counter: this.state.counter - 1,
      });
    }, 1000);
    this.setState({
      intervalId: interval,
    });
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('older state', this.state);
    console.log('new state', newState);
    return true;
  }

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.letsStart}
        style={{
          backgroundColor: 'blue',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Hello this is home 2 screen
          {' '}
          {this.state.counter}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Home2;
