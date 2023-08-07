import React, {useEffect, useState} from 'react';
import {ButtonGroup} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import keyboardStatusCheck from './keyboardStatusCheck';

export default function ProductStack({
  navigation,
  btnGpName,
  btnsArray,
  nowSelected,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isKeyboardOpen = keyboardStatusCheck();
  const styles = useStyles(isKeyboardOpen);

  useEffect(() => {
    handleBtnGroup(nowSelected);
  }, [nowSelected]);

  const handleBtnGroup = btnIndex => {
    setSelectedIndex(btnIndex);
    const screenName =
      btnIndex === 0
        ? btnGpName === 'Account'
          ? 'Login'
          : 'All'
        : btnIndex === 1
        ? btnGpName === 'Account'
          ? 'Register'
          : 'KFC'
        : btnIndex === 2
        ? 'McDonald'
        : btnIndex === 3
        ? 'PizzaHut'
        : 'AllProduct';

    navigation.navigate(screenName);
  };

  return (
    <View
      style={[
        styles.container,
        styles.opacity,
        {width: btnGpName == 'Account' ? '80%' : '90%'},
      ]}>
      <ButtonGroup
        buttons={btnsArray}
        selectedIndex={selectedIndex}
        onPress={value => handleBtnGroup(value)}
        //     {
        //   btnGpName === 'account'
        //     ? handleAccountBtnGroup(value)
        //     : handleProductBtnGroup(value);
        // }
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        buttonContainerStyle={styles.buttonContainerStyle}
        selectedButtonStyle={styles.selectedButtonStyle}
        innerBorderStyle={{width: 0}}
        containerBorderRadius={0}
        underlayColor={'red'}
      />
      <View style={styles.overlay} />
    </View>
  );
}
const useStyles = isKeyboardOpen =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      ...(!isKeyboardOpen && {
        position: 'absolute',
        bottom: 25,
      }),
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    opacity: {
      shadowColor: 'white',
      shadowOpacity: 0.9,
      elevation: 15,
      shadowRadius: 30,
      shadowOffset: {width: '100%', height: 100},
      borderWidth: 0,
      borderRadius: 0,
    },
    containerStyle: {
      height: 40,
      borderWidth: 0,
      borderRadius: 5,
    },
    buttonStyle: {
      borderRadius: 5,
      backgroundColor: '#dbcaca',
    },
    buttonContainerStyle: {
      borderWidth: 3,
      borderColor: '#fcfafa',
      backgroundColor: 'transperant',
    },
    selectedButtonStyle: {
      paddingLeft: 4,
      backgroundColor: '#601111',
    },
  });

//   const handleAccountBtnGroup = btnIndex => {};

//   const handleProductBtnGroup = btnIndex => {
//     setSelectedIndex(btnIndex);
//     const screenName =
//       btnIndex === 0
//         ? btnGpName === 'Account'
//           ? 'Login'
//           : 'AllProduct'
//         : btnIndex === 1
//         ? btnGpName === 'Account'
//           ? 'Register'
//           : 'KFC'
//         : btnIndex === 2
//         ? 'McDonald'
//         : btnIndex === 3
//         ? 'PizzaHut'
//         : 'AllProduct';

//     navigation.navigate(screenName);
//   };
