import React from 'react';
import CommonBrandPage from '../CommonComponents/CommonBrandPage';
import {useFocusEffect} from '@react-navigation/native';

export default function KFCScreen({route}) {

  const {BrandList,foodList,setCurPrdScreen} = route.params;
  const [ KFCBrandData ] = BrandList.filter(item => item.brandName === 'KFC');
  const KFCFoodList = [...foodList.filter(item => item.foodBrand === 'KFC')];

  useFocusEffect(
    React.useCallback(() => {
      setCurPrdScreen('KFC');
    }, []),
  );

  return (
    <CommonBrandPage brandName={'KFC'} brandData={KFCBrandData} foodData={KFCFoodList}/>
  );
}

