import React from 'react';
import {
  View, FlatList, Text, Image,
} from 'react-native';

const RecipesList = React.memo((props) => {
  const {
    data, setPage, page, totalPage, refresh, setRefresh, filterEnabled,
  } = props;

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        padding: 10,
      }}
    >
      <Image
        style={{
          height: 150,
          width: 150,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          numberOfLines={3}
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            width: 200,
          }}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            width: 200,
          }}
        >
          Prep time:
          {' '}
          {item.prepTimeMinutes}
        </Text>
        {/*  */}
        <Text style={{}}>Meal Type</Text>

        {item.mealType.map((item) => (
          <View
            key={Math.random(100)}
            style={{
              borderRadius: 6,
              backgroundColor: 'brown',
              margin: 2,
              width: 100,
            }}
          >
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
              }}
            >
              {item}
            </Text>
          </View>
        ))}

        <Text style={{}}>
          Calorie -
          {item.caloriesPerServing}
        </Text>

        <Text style={{}}>
          Rating -
          {item.caloriesPerServing}
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        refreshing={refresh}
        onRefresh={() => {
          setRefresh(true);
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (!filterEnabled) {
            setPage(page + 10);
          }
        }}
      />
    </View>
  );
});
export default RecipesList;
