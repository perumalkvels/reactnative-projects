import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,Image , Animated} from 'react-native';
import { setToastAlert } from '../Redux/Slices/AppSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
const Toast = () => {
    const dispatch = useDispatch();
    const {toastAlert} = useSelector(state => state.appData);
    const {msg,visible,duration,result} = toastAlert;
    console.log('this is from toast response', result);

    const [position] = useState(new Animated.Value(-100)); // Initial position off the screen

    const handleCancelToast = () => {
      Animated.timing(position, {
        toValue: -200, // Slide back off the screen
        duration: 400,
        useNativeDriver: false,
      }).start(() => {
        dispatch(setToastAlert({ 
          ...toastAlert, 
          visible: false , 
          msg : "",
          result: ""
        }));
      });
    };
  
    useEffect(() => {
      if (visible) {
        // Slide in from the top
        Animated.timing(position, {
          toValue: 0,
          duration: 500,
          // useNativeDriver: false,
        }).start();
        
        // Auto-dismiss after 'duration' milliseconds
        if (duration) {
          const timeout = setTimeout(() => {
            handleCancelToast();
          }, duration);
          return () => clearTimeout(timeout);
        }
      }
    }, [visible, position, duration]);

  return (
    <Animated.View style={[styles.container, { top: position }]}>
      <View style={[styles.toast, {backgroundColor : result == 'Success' ? '#22bb33' : '#BB2124' }] }>
        <Icon
              name={result == 'Success' ? 'check-circle-outline' : 'error-outline'}
              size={35}
              color={'white'}
              style={{marginLeft : 15}}
            />
        <View style={styles.toastContent}>  
          <Text style={styles.response}>{result}</Text>
          <Text style={styles.message}>{msg}</Text>
        </View>
        
        <TouchableOpacity style={styles.closeButton} onPress={handleCancelToast}>
        <Icon
              name={'close'}
              size={20}
              color={'white'}
            />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '2%',
    postion: 'absolute',
    top: 10,
  },
  toast: {
    flexDirection: 'row',
    // flex:2,
    justifyContent:'space-between',
    borderRadius: 15,
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  toastContent: {
    flexDirection: 'column',
  },
  response: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    color: 'white',
    fontSize: 12,
  },
  closeButton: {
    paddingHorizontal: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Toast;
