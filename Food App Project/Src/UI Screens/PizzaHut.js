import React from 'react';
import CommonBrandPage from '../CommonComponents/CommonBrandPage';
import {useFocusEffect} from '@react-navigation/native';

export default function PizzaHutScreen({route}) {
  const {BrandList,foodList,setCurPrdScreen} = route.params;
  const [ PizzaHutBrandData ] = BrandList.filter(item => item.brandName === 'PizzaHut');
  const PizzaHutFoodList = [...foodList.filter(item => item.foodBrand === 'PizzaHut')];
  useFocusEffect(
    React.useCallback(() => {
      setCurPrdScreen('PizzaHut');
    }, []),
  );
  return (
    <CommonBrandPage  brandName={'PizzaHut'} brandData={PizzaHutBrandData} foodData={PizzaHutFoodList}/>
  );
}
