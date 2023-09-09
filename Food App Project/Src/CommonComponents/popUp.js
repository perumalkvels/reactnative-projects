import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';

export default function Popup({title,type,icon}) {

  const [isOpen,setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [type, setType] = useState(success);
  const [textBody, setTextBody] = useState('');
//   const [button, setButton] = useState(true);
//   const [buttonText, setButtonText] = useState('Ok');
//   const [autoClose, setAutoClose] = useState(false);

//   const start = ({ ...config }) => {
//     setTitle(config.title);
//     setType(config.type);
//     setIcon(config.icon !== undefined ? config.icon : false);
//     setTextBody(config.textBody);
//     setButton(config.button !== undefined ? config.button : true);
//     setButtonText(config.buttonText || 'Ok');
//     setCallback(
//       config.callback !== undefined ? config.callback : defaultCallback
//     );
//     setBackground(config.background || 'rgba(0, 0, 0, 0.5)');
//     setTiming(config.timing);
//     setAutoClose(
//       config.autoClose !== undefined ? config.autoClose : false
//     );

//     Animated.sequence([
//       Animated.timing(positionView, {
//         toValue: 0,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false,
//       }),
//       Animated.spring(positionPopup, {
//         toValue: HEIGHT / 2 - popupHeight / 2,
//         bounciness: 15,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     if (autoClose && timing !== 0) {
//       const duration = timing > 0 ? timing : 5000;
//       setTimeout(() => {
//         hidePopup();
//       }, duration);
//     }
//   };

//   const hidePopup = () => {
//     Animated.sequence([
//       Animated.timing(positionPopup, {
//         toValue: HEIGHT,
//         duration: 250,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacity, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: false,
//       }),
//       Animated.timing(positionView, {
//         toValue: HEIGHT,
//         duration: 100,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };


  const handleImage = (type) => {
    switch (type) {
      case 'Success':
        return require('../../assets/Success.png');
      case 'Danger':
        return require('../../assets/Error.png');
      default:
        return null;
    }
  };

  return (
    <Animated.View
      style={[
        styles.Container,
        {
          backgroundColor: 'transparent',
          transform: [{ translateY: positionView }],
        },
      ]}>
      <Animated.View
        onLayout={(event) => {
          setPopupHeight(event.nativeEvent.layout.height);
        }}
        style={[
          styles.Message,
          {
            transform: [{ translateY: positionPopup }],
          },
        ]}>
        <View style={styles.Header} />
        {icon ? (
          icon
        ) : (
          <Image
            source={handleImage(type)}
            resizeMode="contain"
            style={styles.Image}
          />
        )}
        <View style={styles.Content}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Desc}>{textBody}</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    zIndex: 99999,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  Message: {
    maxWidth: 300,
    width: 230,
    minHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
  },
  Content: {
    padding: 20,
    alignItems: 'center',
  },
  Header: {
    height: 230,
    width: 230,
    backgroundColor: '#FBFBFB',
    borderRadius: 100,
    marginTop: -120,
  },
  Image: {
    width: 150,
    height: 80,
    position: 'absolute',
    top: 20,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  Desc: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  Button: {
    borderRadius: 50,
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  TextButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Success: {
    backgroundColor: '#AAF577',
    shadowColor: '#AAF577',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  Danger: {
    backgroundColor: '#F29091',
    shadowColor: '#F29091',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  Warning: {
    backgroundColor: '#fbd10d',
    shadowColor: "#fbd10d",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
}
})
