import React from 'react';
import CommonBrandPage from '../CommonComponents/CommonBrandPage';
import {useFocusEffect} from '@react-navigation/native';

export default function McDonaldsScreen({route}) {
  const {BrandList,foodList,setCurPrdScreen} = route.params;
  const [ McDonaldBrandData ] = BrandList.filter(item => item.brandName === 'McDonald');
  const McDonaldFoodList = [...foodList.filter(item => item.foodBrand === 'McDonald')];

  useFocusEffect(
    React.useCallback(() => {
      setCurPrdScreen('McDonald');
    }, []),
  );

  return (
    <CommonBrandPage brandName={'McDonald'} brandData={McDonaldBrandData} foodData={McDonaldFoodList}/>
  );
}

