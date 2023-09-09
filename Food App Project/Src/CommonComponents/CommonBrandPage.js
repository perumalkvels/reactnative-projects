import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Image, SearchBar, Text} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import ProductCard from '../CommonComponents/ProductCard';


export default function CommonBrandPage({brandName,brandData,foodData}) {
  console.log('kfc Length', foodData.length);
  const [searchBrand,setSearchBrand] = useState('')
  const [search,setSearch] = useState('')

  useEffect(() => {
    setSearch('');
    setSearchBrand('')
  }, [])
  
  return (
    <ScrollView>
      <View style={productPage.pageWrapper}>

        {/* Brand Container */}
        <View style={productPage.brandContainer}>
          <View style={productPage.brandImgWrapper} >
            <Image
              source={brandData.logoImg}
              style={productPage.brandImg}
            />
          </View>
          <View style={productPage.brandDetail}>
              <Text style={productPage.brandtitle}>{brandData.brandName}</Text>
              <Text style={productPage.brandHeader}>{brandData.title}</Text>
              <Text style={productPage.brandDesc}>{brandData.desc}</Text>
          </View>
        </View>
        <View style={productPage.searchBarWrapper}>
          <SearchBar
            style= {productPage.searchbar}
            containerStyle={productPage.searchContainer}
            inputContainerStyle={productPage.inputContainerStyle}
            searchIcon={productPage.searchIcon}
            placeholderTextColor={'gray'}
            inputStyle={{height:10, fontSize: 15}}
            placeholder="Search Your Favourt Here..."
            lightTheme
            round
            cancelButtonTitle='Cancel'
            clearButtonMode="always"
            showCancel={true}
            showLoading={false}
            onFocus={()=> {brandName && setSearchBrand(brandName)}}
            onBlur={()=> {setSearch('');setSearchBrand('')} }
            onChangeText={setSearch}
            value={search.length && search}
        />
      </View>
        {/* FoodList Container  */}
        <View style={productPage.productContainer}>
          <FlatList
                data={searchBrand.length && search.length ?  
                         [ ...foodData.filter(
                              food =>  {
                                return (food.foodType.toLowerCase())
                                        .includes(search.toLowerCase()) 
                                    || (food.foodTitle.toLowerCase())
                                        .includes(search.toLowerCase())
                                      }
                             )
                        ]
                        : 
                        foodData
                      }
                renderItem={({item}) => {
                  return ( <>
                      <View style={productPage.productCard}>
                        {console.log('id', item.foodId)}
                        <ProductCard item={item} />
                      </View>
                  </>)
                }}
                keyExtractor={item => item.foodId}
                horizontal={false}
                numColumns={2}
              />
        </View>

      </View>
    </ScrollView> 
  );
}

const productPage = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width:'100%',
    marginBottom: 100,
    padding: 10,
  },
  productContainer:{
    justifyContent: 'center',
  },
  productCard: {
    width: '46%',
    height: 290,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 40,
    alignContent: 'center',
    marginVertical: 8,
    marginHorizontal: 7,
    padding: 10,
    backgroundColor: 'white',
  },
  brandContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
    // backgroundColor: 'gray',
  },
  brandImgWrapper:{
    marginLeft: 10,
    padding: 10,
    // borderRadius: 40,
    width: '30%', 
  },
  brandImg : {
    borderRadius: 100,
    height: 92, 
  },
  brandDetail: {
    padding: 10,
    width: '70%', 
  },
  brandtitle: {
    fontSize: 20,
    color: '#a61900',
    fontWeight: 'bold',
  },
  brandHeader: {
    fontSize: 15,
  },
  brandDesc: {
    fontSize: 10,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  searchContainer: {
    width: '97%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    shadowColor: 'black', 
    padding: 0,
    margin: 0,
   },
  searchIcon :{
    backgroundColor: 'transparent',
    position: 'relative',
    top : 0,
    left: 5,
    color: 'black',
    size: 30,
    margin:0,
    padding: 0,
  },
  searchbar: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    shadowColor: 'black',
  },
  inputContainerStyle: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
});


{/* Search Bar Container  */}
{/* <View style={productPage.searchbarContainer}> */}
{/* </View> */}
// const productPage = StyleSheet.create({
  //   pageWrapper: {
  //     flex: 1,
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     width:'100%',
  //     marginBottom: 100,
  //     padding: 10,
  //   },
  //   productContainer:{
  //     justifyContent: 'center',
  //     // paddingHorizontal: 10,
  //   },
  //   productCard: {
  //     width: '46%',
  //     height: 290,
  //     borderRadius: 10,
  //     shadowColor: 'black',
  //     shadowOpacity: 40,
  //     alignContent: 'center',
  //     marginVertical: 8,
  //     marginHorizontal: 7,
  //     padding: 10,
  //     backgroundColor: 'white',
  //   },
  //   brandContainer: {
  //     flexDirection: 'row', 
  //     alignItems: 'center', 
  //     width: '100%',
  //     backgroundColor: '#a61900',
  //     // borderBottomWidth: 10,
  //     // borderBottomColor: '#a61900',
  //   },
  //   brandImgWrapper:{
  //     marginLeft: 10,
  //     padding: 10,
  //     // borderRadius: 40,
  //     width: '25%', 
  //   },
  //   brandImg : {
  //     borderRadius: 100,
  //     height: 73, 
  //   },
  //   brandDetail: {
  //     padding: 10,
  //     width: '70%', 
  //   },
  //   brandtitle: {
  //     fontSize: 20,
  //     // color: '#a61900',
  //     color: 'white',
  //     fontWeight: 'bold',
  //   },
  //   brandHeader: {
  //     color: 'white',
  //     fontSize: 15,
  //   },
  //   brandDesc: {
  //     color: 'white',
  //     fontSize: 10,
  //   },
  //   searchBarWrapper: {
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     marginVertical: 5,
  //   },
  //   searchContainer: {
  //     width: '97%',
  //     backgroundColor: 'transparent',
  //     borderRadius: 10,
  //     shadowColor: 'black', 
  //     padding: 0,
  //     margin: 0,
  //    },
  //   searchIcon :{
  //     backgroundColor: 'transparent',
  //     position: 'relative',
  //     top : 0,
  //     left: 5,
  //     color: 'black',
  //     size: 30,
  //     margin:0,
  //     padding: 0,
  //   },
  //   searchbar: {
  //     marginLeft: 10,
  //     backgroundColor: 'transparent',
  //     shadowColor: 'black',
  //   },
  //   inputContainerStyle: {
  //     width: '100%',
  //     backgroundColor: 'transparent',
  //     borderWidth: 1,
  //     borderColor: '#a61900',
  //     borderBottomWidth: 1,
  //   },
  // });
