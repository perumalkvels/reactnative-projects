import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductCard from '../CommonComponents/ProductCard';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
// import {useRoute} from '@react-navigation/native';
// import {ScrollView} from 'react-native-gesture-handler';

const AllProductScreen = () => {
  const BrandList = useSelector(state => state.brandList.brandList);
  const foodList = useSelector(state => state.foodList.foodList);

  // const [kfcDetails, mcDonaldDetails, pizzaHut] = brand_data;

  // Getting The Specific foodBrand Details from params.food_data
  // const KFC = [...food_data.filter(item => item.foodBrand === 'KFC')];
  // const mcdonald = [...food_data.filter(item => item.foodBrand === 'mcdonald')];
  // const pizzahut = [...food_data.filter(item => item.foodBrand === 'pizzahut')];
  // console.log('McDonald ', McDonald.length);
  // console.log('PizzaHut ', PizzaHut.length);

  return (
    <>
      <ScrollView>
        <View style={allproduct.productContainer}>
          <FlatList
            data={BrandList}
            renderItem={({item}) => {
              return (
                <View style={allproduct.brandPartitions}>
                  <Text style={allproduct.brandName}>
                    {item.brandName.toUpperCase()}
                  </Text>
                  <Text style={allproduct.brandDesc}>
                    {item.title.toUpperCase()}
                  </Text>
                  <ProductCard
                    foodList={[
                      ...foodList.filter(
                        brand => brand.foodBrand === item.brandName,
                      ),
                    ]}
                  />
                </View>
              );
            }}
          />
        </View>
        {/* <View style={allproduct.productFooter}>
          <Text style={allproduct.footText}> Enjoy Your Food </Text>
        </View> */}
      </ScrollView>
    </>
  );
};

export default AllProductScreen;

const allproduct = StyleSheet.create({
  productContainer: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 55,
  },
  brandPartitions: {
    marginBottom: 10,
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  brandName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginVertical: 5,
    color: '#a61900',
  },
  brandDesc: {
    fontStyle: 'italic',
    fontSize: 13,
    marginLeft: 30,
    color: 'black',
  },
  productFooter: {
    padding: 10,
  },
  footText: {
    fontSize: 20,
    color: 'white',
  },
});
