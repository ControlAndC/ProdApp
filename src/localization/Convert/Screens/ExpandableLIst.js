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
import ExpandableComponent from './ExpandableComponent';

const dummyData = [
  {
    isExpandable: false,
    category_name: 'item1',
    subCategory: [
      {
        id: 1,
        val: 'sub1',
      },
      {
        id: 2,
        val: 'sub1',
      },
      {
        id: 3,
        val: 'sub1',
      },
    ],
  },
  {
    isExpandable: false,
    category_name: 'item2',
    subCategory: [
      {
        id: 4,
        val: 'sub1',
      },
      {
        id: 5,
        val: 'sub1',
      },
      {
        id: 6,
        val: 'sub1',
      },
    ],
  },
  {
    isExpandable: false,
    category_name: 'item3',
    subCategory: [
      {
        id: 7,
        val: 'sub1',
      },
      {
        id: 8,
        val: 'sub1',
      },
      {
        id: 9,
        val: 'sub1',
      },
    ],
  },
  {
    isExpandable: false,
    category_name: 'item4',
    subCategory: [
      {
        id: 10,
        val: 'sub1',
      },
      {
        id: 11,
        val: 'sub1',
      },
      {
        id: 12,
        val: 'sub1',
      },
      {
        id: 13,
        val: 'sub1',
      },
      {
        id: 14,
        val: 'sub1',
      },
      {
        id: 15,
        val: 'sub1',
      },
      {
        id: 16,
        val: 'sub1',
      },
      {
        id: 17,
        val: 'sub1',
      },
      {
        id: 18,
        val: 'sub1',
      },
      {
        id: 19,
        val: 'sub1',
      },
      {
        id: 1222,
        val: 'sub1',
      },
      {
        id: 122,
        val: 'sub1',
      },
      {
        id: 101,
        val: 'sub1',
      },
      {
        id: 1154,
        val: 'sub1',
      },
      {
        id: 1265,
        val: 'sub1',
      },
      {
        id: 1034,
        val: 'sub1',
      },
      {
        id: 1134,
        val: 'sub1',
      },
      {
        id: 1264,
        val: 'sub1',
      },
    ],
  },
];
function ExpandableList() {
  const [multiSelect, setMultiSelect] = useState(false);
  const [listDataSource, setListDataSource] = useState(dummyData);

  function callApi(method) {
    return function (url) {
      console.log(`Api method is ${method} and url is ${url}`);
    };
  }

  const a = 'santosh';

  function closure() {
    const a = 'ravi';

    console.log('value of a in closure', a);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      array[index].isExpandable = !array[index].isExpandable;
    } else {
      array.map((value, placeIndex) => (placeIndex === index
        ? (array[placeIndex].isExpandable = !array[placeIndex].isExpandable)
        : (array[placeIndex].isExpandable = false)));
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            // callApi('Get')('https://www.getrecords')
            closure();
            console.log('value of a from other', a);
          }}
          style={{
            height: 30,
            backgroundColor: 'red',
          }}
        >
          <Text>Expandable list</Text>
        </TouchableOpacity>
        <ScrollView style={{}}>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              item={item}
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ExpandableList;

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
