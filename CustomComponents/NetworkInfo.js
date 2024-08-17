import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity, View, Animated, StatusBar, StyleSheet, Text,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

function NetworkInfo(props) {
  const [isOffline, setOfflineStatus] = useState(false);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      console.log('network', offline);
      setOfflineStatus(!!state.isConnected);
    });
    return () => removeNetInfoSubscription();
  }, []);

  function NoInternet() {
    return (
      <Animated.View style={[styles.container]}>
        <StatusBar backgroundColor="red" />
        <Text style={styles.text}>No Internet Connection</Text>
      </Animated.View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
      }}
    >
      {!isOffline ? NoInternet() : null}
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    padding: 5,
    paddingLeft: 10,
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
});

export default NetworkInfo;
