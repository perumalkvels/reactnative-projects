import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function PageLoader() {
  const [loader, setLoader] = useState(true);

  return (
    <View style={{flex: 1}}>
      {/* Add other content here */}
      {loader && (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
