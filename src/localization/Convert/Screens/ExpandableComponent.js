import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
} from 'react-native';

function ExpandableComponent({ item, onClickFunction }) {
  // console.log('expandable compnent item',item)
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpandable) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpandable]);

  return (
    <View
      style={{
        backgroundColor: 'red',
      }}
    >
      <TouchableOpacity style={styles.item} onPress={onClickFunction}>
        <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}
      >
        {item.subCategory.map((item, key) => (
          <TouchableOpacity key={key} style={styles.content}>
            <Text style={styles.text}>
              {key}
              ,
              {item.val}
            </Text>
            <View style={styles.seperator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  seperator: {
    height: 0.5,
    backgroundColor: 'black',
    width: '100%',
  },
});

export default ExpandableComponent;
