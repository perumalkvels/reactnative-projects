/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';

//***  For Setting Redux Store  ***//
import {store} from './Src/Redux/Store';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Header from './Src/CommonComponents/Header';
import DrawerContent from './Src/Navigations/DrawerContent';
import BottomTabs from './Src/Navigations/BottomTabs';

const Drawer = createDrawerNavigator();

export function App() {
  // const [currentScreen, setCurrentScreen] = useState('Home');
  // const [drawerState, setDrawerState] = useState(false);
  // console.log('currentScreenFromHCounterSliceome', currentScreen);
  // console.log('App cart Item:', cart);
  const customProps = {
    // currentScreen,
    // setCurrentScreen,
    // drawerState,
    // setDrawerState,
  };

  // const storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       '@MySuperStore:key',
  //       'I like to save it.',
  //     );
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  const drawerContentFunction = props => {
    return <DrawerContent {...props} customProps={customProps} />;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header customProps={customProps} />
        <Drawer.Navigator
          drawerContent={props => drawerContentFunction(props)}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="BottomTabs">
            {props => <BottomTabs {...props} customProps={customProps} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

//****  Equdo Codes Here  *****/
// import {
//   DocumentBuilder,
//   DocumentType,
//   EnrollmentBuilder,
//   UqudoIdSDK,
// } from 'uqudosdk-react-native';
// class App extends Component {
// constructor() {
//   super();
//   new UqudoIdSDK().init();
// }

// componentDidMount() {
//   this.setLocale('en');
//   this.checkDocumentSupport();
//   console.log('checkDocumentSupport is success');
//   this.initiateEnrolmentProcess();
// }

// setLocale(locale) {
//   new UqudoIdSDK().setLocale(locale);
// }

// async checkDocumentSupport() {
//   const sdk = new UqudoIdSDK();
//   const isReadingSupported = await sdk.isReadingSupported(
//     DocumentType.UGA_ID,
//   );
//   const isFacialRecognitionSupported = await sdk.isFacialRecognitionSupported(
//     DocumentType.UGA_ID,
//   );
//   console.log('Is Reading Supported:', isReadingSupported);
//   console.log(
//     'Is Facial Recognition Supported:',
//     isFacialRecognitionSupported,
//   );
// }

// async getToken() {
//   // const requestBody = new URLSearchParams();
//   // console.log(requestBody);
//   // requestBody.append('grant_type', encodeURIComponent('client_credentials'));
//   // requestBody.append('client_id',  encodeURIComponent('fff6faff-9867-400d-9b54-7fc99048d69c'));
//   // requestBody.append('client_secret', encodeURIComponent('DEdh2WSGEOQQc6MkhJhzHKkOoSpIu5XiC8g7GmuEV8wnj3U7VynI0OJZEgCRUBfr'));
//   let encodedData = [];
//   details = {
//     grant_type: 'client_credentials',
//     client_id: 'fff6faff-9867-400d-9b54-7fc99048d69c',
//     client_secret:
//       'DEdh2WSGEOQQc6MkhJhzHKkOoSpIu5XiC8g7GmuEV8wnj3U7VynI0OJZEgCRUBfr',
//   };
//   for (let property in details) {
//     let encodedKey = encodeURIComponent(property);
//     let encodedValue = encodeURIComponent(details[property]);
//     encodedData.push(encodedKey + '=' + encodedValue);
//   }
//   encodedData = encodedData.join('&');
//   const response = await fetch('https://auth.uqudo.io/api/oauth/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: encodedData,
//     // {
//     //   'grant_type' :  encodeURIComponent('client_credentials'),
//     //   'client_id' : encodeURIComponent('fff6faff-9867-400d-9b54-7fc99048d69c'),
//     //   'client_secret' : encodeURIComponent('DEdh2WSGEOQQc6MkhJhzHKkOoSpIu5XiC8g7GmuEV8wnj3U7VynI0OJZEgCRUBfr'),
//     // }
//   });
//   console.log('response : ', response);
// }

// async initiateEnrolmentProcess() {
//   // const token = new this.getToken();
//   // console.log('token : ',token)
//   const token =
//     'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjE5NjU2MjA0MGYxMjRhMjY4ZDk2MDI3MDk3OWI3YjU5In0.eyJhdWQiOlsiZmZmNmZhZmYtOTg2Ny00MDBkLTliNTQtN2ZjOTkwNDhkNjljIl0sInN1YiI6ImZmZjZmYWZmLTk4NjctNDAwZC05YjU0LTdmYzk5MDQ4ZDY5YyIsInNjb3BlIjpbIlVRVURPX0lEX0FQSSIsIlVRVURPX0lEX0FQSV9URVNUSU5HIiwiVVFVRE9fSURfQVBJX1NDQU4iLCJVUVVET19JRF9BUElfU0NBTl9BTEwiLCJVUVVET19JRF9BUElfUkVBRCIsIlVRVURPX0lEX0FQSV9SRUFEX0FMTCIsIlVRVURPX0lEX0FQSV9GQUNFIiwiVVFVRE9fSURfQVBJX0lORk8iLCJVUVVET19JRF9BUElfRVZFTlQiXSwiaXNzIjoiaHR0cHM6Ly9hdXRoLnVxdWRvLmlvIiwiZXhwIjoxNjg2MTQ2NjcxLCJpYXQiOjE2ODYxNDQ4MTEsImF1dGhvcml0aWVzIjpbIlVRVURPX0lEX0FQSSIsIlVRVURPX0lEX0FQSV9SRUFEX0FMTCIsIlVRVURPX0lEX0FQSV9URVNUSU5HIiwiVVFVRE9fSURfQVBJX0lORk8iLCJVUVVET19JRF9BUElfU0NBTiIsIlVRVURPX0lEX0FQSV9SRUFEIiwiVVFVRE9fSURfQVBJX0VWRU5UIiwiVVFVRE9fSURfQVBJX1NDQU5fQUxMIiwiVVFVRE9fSURfQVBJX0ZBQ0UiXSwianRpIjoianJBbzRELUYyajlDc3dhRkdNTlZxSlZEcnhvIiwiY2xpZW50X2lkIjoiZmZmNmZhZmYtOTg2Ny00MDBkLTliNTQtN2ZjOTkwNDhkNjljIn0.VnTO-tiIvCJN8TYgl3gwdIFXBY49R-39RK_h2OQjDW4j5kePnP9uD4gXtM1ekKHXPH3peTsKwm6KUSuC_yu3b8yRjmqEGK2JVgzcWpJEHEcjYa-2k-ue_TnfGza1KPdk2YVSWMLVBmM_QszrsBoyzm7RSX836hPuP0I0hAH0ebQj5-neqc463j1D5KvS3lq1jdIEYBy6gG6A3prQErmMXSGCxbleONk5ctF81G8GBsI0I3-plDyMhProJiO3tkZA5U05Hsm7kG1tEEQL4JEPufTcYCxb4GU1pqytGzwT8oBRaVIMj0zThvjsjVQrYa5cZt4G1cC1wDsUArNG7o_cKA';
//   // try {
//   //   const passport = new DocumentBuilder()
//   //     .setDocumentType(DocumentType.PASSPORT)
//   //     .enableReading()
//   //     .build();
//   //   console.log('passport',passport);
//   //   const enrollmentConfiguration = new EnrollmentBuilder()
//   //     .setToken(token)
//   //     .enableFacialRecognition()
//   //     .add(passport)
//   //     .setAppearanceMode(AppearanceMode.SYSTEM)
//   //     .build();
//   //   console.log('enrol : ',enrollmentConfiguration);

//   //   const sdk = new UqudoIdSDK();
//   //   const result = await sdk.enroll(enrollmentConfiguration);
//   //   console.log('result',result);
//   // } catch (error) {
//   //   console.log('error : ',error.code);
//   //   // {"code":"USER_CANCEL","message":"User canceled the Enrollment process","task":"SCAN"}
//   // }
//   try {
//     const authorizationToken =
//       'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjE5NjU2MjA0MGYxMjRhMjY4ZDk2MDI3MDk3OWI3YjU5In0.eyJhdWQiOlsiZmZmNmZhZmYtOTg2Ny00MDBkLTliNTQtN2ZjOTkwNDhkNjljIl0sInN1YiI6ImZmZjZmYWZmLTk4NjctNDAwZC05YjU0LTdmYzk5MDQ4ZDY5YyIsInNjb3BlIjpbIlVRVURPX0lEX0FQSSIsIlVRVURPX0lEX0FQSV9URVNUSU5HIiwiVVFVRE9fSURfQVBJX1NDQU4iLCJVUVVET19JRF9BUElfU0NBTl9BTEwiLCJVUVVET19JRF9BUElfUkVBRCIsIlVRVURPX0lEX0FQSV9SRUFEX0FMTCIsIlVRVURPX0lEX0FQSV9GQUNFIiwiVVFVRE9fSURfQVBJX0lORk8iLCJVUVVET19JRF9BUElfRVZFTlQiXSwiaXNzIjoiaHR0cHM6Ly9hdXRoLnVxdWRvLmlvIiwiZXhwIjoxNjg2MTQ2NjcxLCJpYXQiOjE2ODYxNDQ4MTEsImF1dGhvcml0aWVzIjpbIlVRVURPX0lEX0FQSSIsIlVRVURPX0lEX0FQSV9SRUFEX0FMTCIsIlVRVURPX0lEX0FQSV9URVNUSU5HIiwiVVFVRE9fSURfQVBJX0lORk8iLCJVUVVET19JRF9BUElfU0NBTiIsIlVRVURPX0lEX0FQSV9SRUFEIiwiVVFVRE9fSURfQVBJX0VWRU5UIiwiVVFVRE9fSURfQVBJX1NDQU5fQUxMIiwiVVFVRE9fSURfQVBJX0ZBQ0UiXSwianRpIjoianJBbzRELUYyajlDc3dhRkdNTlZxSlZEcnhvIiwiY2xpZW50X2lkIjoiZmZmNmZhZmYtOTg2Ny00MDBkLTliNTQtN2ZjOTkwNDhkNjljIn0.VnTO-tiIvCJN8TYgl3gwdIFXBY49R-39RK_h2OQjDW4j5kePnP9uD4gXtM1ekKHXPH3peTsKwm6KUSuC_yu3b8yRjmqEGK2JVgzcWpJEHEcjYa-2k-ue_TnfGza1KPdk2YVSWMLVBmM_QszrsBoyzm7RSX836hPuP0I0hAH0ebQj5-neqc463j1D5KvS3lq1jdIEYBy6gG6A3prQErmMXSGCxbleONk5ctF81G8GBsI0I3-plDyMhProJiO3tkZA5U05Hsm7kG1tEEQL4JEPufTcYCxb4GU1pqytGzwT8oBRaVIMj0zThvjsjVQrYa5cZt4G1cC1wDsUArNG7o_cKA';
//     const uqudoIntent = UqudoBuilder.Enrollment()
//       .setToken(authorizationToken)
//       .add(
//         DocumentBuilder(applicationContext)
//           .setDocumentType(DocumentType.UGA_ID)
//           .enableReading()
//           .build(),
//       )
//       .enableFacialRecognition()
//       .build(this);
//     startActivityForResult(uqudoIntent, 101);
//   } catch (err) {
//     console.log('err :', err);
//   }
// }

//   render() {
//     return (
//       <>
//         <StatusBar style="auto" />
//       </>
//     );
//   }
// }
