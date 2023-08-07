import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LogoContainer from '../CommonComponents/logoContainer';
import {
  setRegisterData,
  registerUser,
} from '../Redux/Slices/UserSlices/userAuthSlice';

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const registerData = useSelector(state => state.userAuth.registerData);

  const updateRegisterData = (key, value) => {
    const updatedRegisterData = {...registerData, [key]: value};
    dispatch(setRegisterData(updatedRegisterData));
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <LogoContainer />
        <Text style={styles.textS1}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => updateRegisterData('email', text)}
            value={registerData.email}
            placeholder="Enter Your Email"
            placeholderTextColor="#784646"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => updateRegisterData('password', text)}
            value={registerData.password}
            placeholder="Enter Your Password"
            // keyboardType="password"
            secureTextEntry={true}
            placeholderTextColor="#784646"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => updateRegisterData('confirmPassword', text)}
            value={registerData.confirmPassword}
            placeholder="Confirm Your Password"
            // keyboardType="password"
            secureTextEntry={true}
            placeholderTextColor="#784646"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => updateRegisterData('mobileno', text)}
            value={registerData.mobileno}
            placeholder="Enter Your PhoneNo"
            keyboardType="numeric"
            placeholderTextColor="#784646"
          />

          <Pressable
            style={styles.button}
            onPress={() => dispatch(registerUser(registerData))}>
            <Text style={styles.text}>Register</Text>
          </Pressable>
          <Text
            style={styles.textS6}
            onPress={() => navigation.navigate('Login')}>
            Already have an Account ?
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
    // justifyContent: 'center',
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
  },
});
