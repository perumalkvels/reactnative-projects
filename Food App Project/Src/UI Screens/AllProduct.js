import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import BrandContainer from '../CommonComponents/brandContainer';
import ProductCard from '../CommonComponents/ProductCard';
import {FlatList} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import {useSelector} from 'react-redux';
// import {useRoute} from '@react-navigation/native';
// import {ScrollView} from 'react-native-gesture-handler';

const AllProductScreen = ({route}) => {
  const {BrandList,foodList,setCurPrdScreen} = route.params;
  const [searchBrand,setSearchBrand] = useState('')
  const [search,setSearch] = useState('')

  useFocusEffect(
    React.useCallback(() => {
      console.log('McDonald');
      setCurPrdScreen('AllProduct');
    }, []),
  );

  // const [kfcDetails, mcDonaldDetails, pizzaHut] = brand_data;

  // Getting The Specific foodBrand Details from params.food_data
  // const KFC = [...food_data.filter(item => item.foodBrand === 'KFC')];
  // const mcdonald = [...food_data.filter(item => item.foodBrand === 'mcdonald')];
  // const pizzahut = [...food_data.filter(item => item.foodBrand === 'pizzahut')];
  // console.log('McDonald ', McDonald.length);
  // console.log('PizzaHut ', PizzaHut.length);

  // const handleSearchChange = (search) => {
  //   setSearch(search)
  // }


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
                  <View style={allproduct.searchBarWrapper}>
                    <SearchBar
                      placeholder="Search"
                      style= {allproduct.searchbar}
                      containerStyle={allproduct.searchContainer}
                      searchIcon={allproduct.searchIcon}
                      inputContainerStyle={allproduct.inputContainerStyle}
                      placeholderTextColor={'black'}
                      inputStyle={{height:8, fontSize: 12}}
                      // platform={'default'}
                      lightTheme
                      round
                      cancelButtonTitle='Cancel'
                      clearButtonMode="always"
                      showCancel={true}
                      showLoading={false}
                      onFocus={()=> setSearchBrand(item.brandName)}
                      onBlur={()=> {setSearchBrand(''),setSearchBrand('')} }
                      onChangeText={setSearch}
                      value={searchBrand === item.brandName && search}
                    />
                  </View>

                  {/* FoodList Container  */}
                  <View style={allproduct.productContainer}>
                    <FlatList
                          data={searchBrand !== item.brandName ? 

                            [ ...foodList.filter(
                              brand => brand.foodBrand === item.brandName)
                            ] : [ ...foodList.filter(
                              food =>  {
                                if(food.foodBrand === item.brandName){
                                    return (food.foodType.toLowerCase()).includes(search.toLowerCase()) 
                                            || (food.foodTitle.toLowerCase()).includes(search.toLowerCase())
                                } 
                              })
                            ]
                          }
                          // [ ...foodList.filter( brand => brand.foodBrand === item.brandName)]
                          renderItem={({item}) => {
                            return ( <>
                                <View style={allproduct.productCard}>
                                  {/* <ProductCard item={item}  /> */}
                                  <ProductCard item={item}/>
                                   
                                {/* <ProductCard item={searchBrand !== item.brandName ?
                                      [ ...foodList.filter(
                                        brand => brand.foodBrand === item.brandName,
                                      ),
                                      ] : [ ...foodList.filter(
                                        food =>  {
                                          if(food.foodBrand === item.brandName){
                                              return (food.foodType.toLowerCase()).includes(search.toLowerCase()) 
                                                      || (food.foodTitle.toLowerCase()).includes(search.toLowerCase())
                                          } 
                                        }
                                      ),
                                      ]}
                                  /> */}
                                </View>
                            </>)
                          }}
                          keyExtractor={item => item.id}
                          horizontal={true}
                        />
                  </View>
             
                  {/* <BrandContainer
                    foodList={searchBrand !== item.brandName ?
                      [ ...foodList.filter(
                        brand => brand.foodBrand === item.brandName,
                      ),
                      ] : [ ...foodList.filter(
                        food =>  {
                          if(food.foodBrand === item.brandName){
                              return (food.foodType.toLowerCase()).includes(search.toLowerCase()) 
                                      || (food.foodTitle.toLowerCase()).includes(search.toLowerCase())
                          } 
                        }
                      ),
                      ]}
                  /> */}
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
    marginHorizontal: 4,
    paddingBottom: 35,
  },
  cardWrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  productCard: {
    // width: 160,
    height: 290,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 40,
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: 'white',
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
  // searchContainer: {
  //   backgroundColor: 'transparent',
  //   borderWidth: 0, //no effect
  //   shadowColor: 'transparent', //no effect
  //   // display: 'none',
  // },
  searchBarWrapper: {
    position: 'absolute',
    top: 10,
    left: '65%',
    right: 0,
    width: '40%',
    height: 45,
  },
  searchContainer: {
    width: '80%',
    height: '90%',
    backgroundColor: 'transparent',
    borderRadius: 13,
    // borderWidth: 2, //no effect
    // borderColor: 'gray',
    shadowColor: 'black', //no effect
    // borderBottomColor: 'transparent',
    // borderTopColor: 'transparent',
    padding: 0,
    margin: 0,
   },
  searchIcon :{
    position: 'relative',
    top : -3,
    left: 0,
    color: 'black',
    size: 20,
    margin:0,
  },
  searchbar: {
    position: 'relative',
    top : -5,
    left: -15,
    backgroundColor: 'transparent',
    borderWidth:0, 
    shadowColor: 'black',
  },
  inputContainerStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
    backgroundColor: 'transparent',
    // backgroundColor: 'red',
  },
});
