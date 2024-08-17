import React, {
  PureComponent, useEffect, useState, Component,
} from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ShoppingActionAddToCart } from '../Redux/ActionCreator/ShoppingCartActionCreator';
import { UserActionUpdate } from '../Redux/ActionCreator/UserProfileActionCreator';

function ButtonWithText(props) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          UserActionUpdate({
            userName: 'Trishu',
          }),
        );

        dispatch(
          ShoppingActionAddToCart({
            itemName: 'cookingOil2',
            itemId: '004',
            ItemType: 'oil 5',
          }),
        );
      }}
      style={{
        backgroundColor: 'red',
        with: 300,
        height: 100,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        Button with text component, Press me
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonWithText;
