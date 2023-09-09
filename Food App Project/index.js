/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { firebase } from '@react-native-firebase/app';
import App from './App';
import {name as appName} from './app.json';


import '@react-native-firebase/auth'; // Import the Firebase Auth library

firebase.initializeApp();

AppRegistry.registerComponent(appName, () => App);
