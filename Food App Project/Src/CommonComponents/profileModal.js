import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {setModelShow} from '../Redux/Slices/AppSlice';
import {Avatar} from '@rneui/themed';
const ProfileModal = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.appData.showModal);
  const {userInfo} = useSelector(state => state.userData);
  // console.log('showModela', showModal);
  // useEffect(() => {
  //   setModalVisible(props);
  // }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        act
        native
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          dispatch(setModalVisible(!modalVisible));
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.headerPartition}>
              <Text>Profile</Text>
              <Pressable
                style={styles.buttonCloseModal}
                onPress={() => dispatch(setModelShow(!showModal))}>
                <Text style={styles.textStyle}>Exit</Text>
              </Pressable>
              {!userInfo.img ? (
                  <Text  style={header.userIcon}>
                    {userInfo.charAt(0)} 
                  </Text>
                 
                 ) : ( <Avatar
                      size={64}
                      style={header.userIcon}
                      rounded
                      source={require('../assets/images/user.jpeg')}
                  />)
                } 
            </View>
            <View style={styles.bodyPartition}>
              <View style={styles.btnsContainer}>
                <Pressable style={[styles.button]}>
                  {/* onPress={() => setModalVisible(!modalVisible)} */}
                  <Text style={styles.contentText}>View Profile</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonClose]}>
                  {/* onPress={() => setModalVisible(!modalVisible)} */}
                  <Text style={styles.contentText}>Log Out</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
  },
  modalView: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerPartition: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '35%',
    backgroundColor: '#601111',
    paddingTop: 80,
  },
  buttonCloseModal: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    color: 'white',
  },
  userIcon: {
    padding: 10,
    width: 150,
    height: 150,
  },
  bodyPartition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  contentText: {
    fontSize: 12,
    color: '#601111',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 130,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 8,
  },
});

export default ProfileModal;

// centeredView: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   // justifyContent: 'flex-end', // Show modal at the bottom
// },
// modalView: {
//   // marginTop: 100,
//   flex: 1,
//   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//   // position: 'absolute',
//   // top: 55,
//   // right: 20,
//   justifyContent: 'center',
//   // alignItems: 'center',
//   backgroundColor: 'white',
//   borderRadius: 20,
//   // padding: 35,
//   alignItems: 'center',
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
//   elevation: 5,
// },
// button: {
//   width: 130,
//   height: 35,
//   borderRadius: 10,
//   justifyContent: 'center',
//   elevation: 2,
//   marginBottom: 8,
// },
// buttonOpen: {
//   backgroundColor: '#F194FF',
// },
// buttonClose: {
//   backgroundColor: '#601111',
// },

// modalText: {
//   color: '#601111',
//   marginBottom: 15,
//   textAlign: 'center',
// },
