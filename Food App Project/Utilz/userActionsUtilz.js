import React,{useEffect, useState} from 'react';
import { fbdataservice } from '../firebaseConfig';
import {useSelector, useDispatch} from 'react-redux';

export const  userActionsUtilz = (modState) => {
  const {isLogged,userInfo,cartList,orderList,favList} = useSelector(state => state.userData);
  // if (isLogged) {
  //     const data =  modState == 'cartList' ? cartList :  'orderList' ? orderList : favList
  //     data.length ?  :  fbdataservice( 
    
  //           `/userData/${userInfo.uid}/${modState}`,'remove'
  //       )
  // }
  // else {
  //     console.log('You Must Ligin First to continue the services');
  // }
 
  
  };