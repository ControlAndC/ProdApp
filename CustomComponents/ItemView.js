import React, { useState } from 'react';
import {
  TouchableOpacity, Text, Image, View, Dimensions,
} from 'react-native';

import { useTranslation } from 'react-i18next';

function ItemView({
  item, setItems, setPrice, navigation,
}) {
  // console.log('render inside list',item)
  const { t, i18n } = useTranslation(); // i18n instance
  const { height, width } = Dimensions.get('window');
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        width: width / 2 - 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'lightgray',
        margin: 10,
      }}
    >
      {loading ? <Text>{`loading..... ${loading}`}</Text> : null}
      <Image
        source={{
          uri: item.thumbnail,
        }}
        onLoadStart={(data) => {
          setLoading(true);
        }}
        onLoadEnd={(data) => {
          setLoading(false);
        }}
        style={{
          height: 100,
          width: 100,
          alignSelf: 'center',
          borderWidth: 5,
          borderColor: 'white',
        }}
      />

      <Text
        style={{
          alignSelf: 'center',
          padding: 5,
          textAlign: 'center',
          fontFamily: 'PoorStory-Regular',
          fontSize: 25,
        }}
      >
        {' '}
        {t('screens.intro.text.introText')}
      </Text>
      <TouchableOpacity
        // onPress={() => {
        //     setPrice(item.price)
        //     setItems(item.title) }}
        onPress={() => {
          navigation.navigate('Home11');
        }}
        style={{
          backgroundColor: item.isSelected ? 'red' : 'gray',
          margin: 2,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            padding: 5,
            textAlign: 'center',
            color: 'white',
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(ItemView);
