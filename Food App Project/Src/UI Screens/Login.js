import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {useRoute} from '@react-navigation/native';
import LogoContainer from '../CommonComponents/logoContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from '../CommonComponents/customToast';
import {
  setLoginData,
  loginUser,
} from '../Redux/Slices/UserSlices/userAuthSlice';

export default function LoginScreen({isLogged, setIsLogged, navigation}) {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.userAuth.loginData);
  const {currentScreen, drawerState, toastAlert} = useSelector(state => state.appData);

  const updateLoginData = (key, value) => {
    const updatedLoginData = {...loginData, [key]: value};
    dispatch(setLoginData(updatedLoginData));
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <LogoContainer />
        <Text style={styles.textS1}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => updateLoginData('email', text)}
            value={loginData.email}
            placeholder="Enter Your Email"
            placeholderTextColor="#784646"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => updateLoginData('password', text)}
            value={loginData.password}
            placeholder="Enter Your Password"
            placeholderTextColor="#784646"
            // keyboardType="password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(loginUser(loginData))}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <Text
            style={styles.textS6}
            onPress={() => navigation.navigate('Register')}>
            Didn't you have an Account?
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 70,
  },
  text: {
    color: '#601111',
  },
  textS1: {
    position: 'absolute',
    top: 120,
    left: 30,
    marginBottom: 20,
    opacity: 0.7,
    fontSize: 30,
    color: 'black',
    // color: '#601111',
    margin: 20,
  },
  textS6: {
    fontSize: 15,
    color: '#601111',
    margin: 5,
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#601111',
    borderRadius: 5,
    color: '#601111',
    width: 300,
    height: 50,
    margin: 12,
    padding: 10,
  },
  button: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 42,
    borderWidth: 1,
    borderColor: '#601111',
    borderRadius: 30,
    // elevation: 1,
  },
});
