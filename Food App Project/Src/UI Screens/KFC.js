import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
} from 'react-native-card-view';
import {useRoute} from '@react-navigation/native';

import ProductCard from '../CommonComponents/ProductCard';
import {SearchBar} from 'react-native-elements';

export default function KFCScreen() {
  // Getting The Specific foodBrand Details from params.food_data
  const food_brand = [...food_data.filter(item => item.foodBrand === 'KFC')];

  const renderCard = ({item}) => {
    return (
      <>
        <Text style={card.title}>{item.foodTitle}</Text>
        <Card style={card.container}>
          <CardTitle>
            <Text style={card.title}>{item.foodTitle}</Text>
          </CardTitle>
          <CardContent>
            <Text style={card.title}>{item.foodTitle}</Text>
          </CardContent>
          {/* <CardAction>
              <TouchableOpacity onPress={()=>{}}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
            </CardAction> */}
        </Card>
        {/* </TouchableWithoutFeedback> */}
      </>
    );
  };
  return (
    <View style={productPage.pageWrapper}>
      <SearchBar
        placeholder="Type Here..."
        // onChangeText={e => setSearch(e.target.value)}
        // value={search}
      />
      {/* <FlatList
        style={productPage.productWrapper}
        data={food_brand}
        renderItem={renderCard}
      /> */}
      {/* <ProductCard food_data={food_brand} /> */}
      <Text style={card.title}>KFC</Text>
    </View>
  );
}

const productPage = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  productWrapper: {
    padding: 30,
    flexDirection: 'row',
    color: 'black',
  },
});

const card = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 20,
    height: 100,
    width: 100,
    alignContent: 'center',
    margin: 37,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
