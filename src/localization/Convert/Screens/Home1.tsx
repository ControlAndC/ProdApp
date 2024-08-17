import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native';
import Items from './Items';
import Button from './Button';
import { NativeModules } from 'react-native';

const App = () => {
  const { HomeScreenModule } = NativeModules;

  const onPress = () => {
    if (HomeScreenModule) console.log('native modules', HomeScreenModule);
    console.log('hello',NativeModules.HomeScreen.openNewActivity);
    {
      NativeModules.HomeScreen.openNewActivity()
    }
  };

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const click = (item) => {
    setStatus(item);
    onPress();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [0]);

  const fix = useCallback((item) => {
    click(item);
  }, []);

  const getText = () => {
    return <Text style={{ color: 'white' }}>Hey Click Me</Text>;
  };
  return (
    <View style={styles.container}>
      {/* <Button click={() => setStatus(!status)} children={getText()} />
      <Text>{status + "1"}</Text> */}
      <FlatList
        data={data}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Items click={fix} item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
