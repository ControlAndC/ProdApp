import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {
  useState, useCallback, useEffect, useMemo, memo, useContext,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemView_ from './ItemView';
import { ParkContext } from '../Contexting/ParkContext';
import { planet } from '../PlanetStore/Actions';

function ProductView(props) {
  console.log('called product view');
  const { height, width } = Dimensions.get('window');
  const listItem = useSelector((state) => state.PLANET);
  const dispatch = useDispatch();

  console.log('list data-->>', listItem);
  const [data, setData] = useState([]);

  const result = useContext(ParkContext);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch('https://dummyjson.com/products');
      const res = await data.json();
      //   setData(res.products.map((item, index)=>{return {...item,isSelected:false}}));
      planet(dispatch);
    };
    getProducts();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: result.data.themeColor,
      }}
    >
      <FlatList
        // extraData={props.data}
        data={listItem}
        style={
          (style.container,
          props.style,
          {
            backgroundColor: 'brown',
          })
        }
        numColumns={2}
        renderItem={({ item }) => (
          <ItemView_
            item={item}
            setItems={props.setItems}
            setPrice={props.setPrice}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
}

const otherItem = [
  {
    id: 1,
    title: 'name 1',
    thumbnail: require('../Screens/assets/logonew__.png'),
    isSelected: false,
  },
  {
    id: 2,
    name: 'name 2',
    thumbnail: require('../PassportPic.jpg'),
    isSelected: false,
  },
];

export default ProductView;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'green',
  },
  container2: {
    flex: 1,
    padding: 24,
    backgroundColor: 'pink',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
