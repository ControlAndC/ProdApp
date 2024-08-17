import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

function FilterView({
  setFilters, setSort, chosenFilters, chosenSort, filterData, sortBy,
}) {
  return (
    <View
      style={{
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 6,
      }}
    >
      <Text
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'lightblue',
        }}
      >
        {' '}
        Choose filters
        {' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {filterData.map((item) => (
          <TouchableOpacity
            onPress={() => {
              const array = chosenFilters;
              array.includes(item) ? array.splice(array.indexOf(item), 1) : array.push(item);

              console.log([...array]);
              setFilters([...array]);
            }}
            key={Math.random(1000)}
            style={{
              padding: 5,
              margin: 7,
              backgroundColor: chosenFilters.includes(item) ? 'green' : 'lightgray',
              borderRadius: 8,
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'lightblue',
          marginTop: 50,
        }}
      >
        {' '}
        Order By
        {' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {sortBy.map((item) => (
          <TouchableOpacity
            onPress={() => {
              const array = chosenSort;
              array.includes(item) ? array.splice(array.indexOf(item), 1) : array.push(item);
              setSort([...array]);
            }}
            key={Math.random(1000)}
            style={{
              flexDirection: 'row',
              margin: 10,
              padding: 5,
              margin: 7,
              borderRadius: 8,
              backgroundColor: chosenSort.includes(item) ? 'green' : 'lightgray',
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          padding: 5,
          backgroundColor: 'lightpink',
          borderRadius: 8,
        }}
      >
        <Text style={{}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default FilterView;
