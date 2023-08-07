import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from react-native-vector-icons

const UserProfile = () => {
  return (
    <View style={styles.container}>
      {/* User Photo */}
      <Avatar.Image size={100} source={require('../assets/images/user.jpeg')} />

      {/* User Name */}
      <Title style={styles.name}>Peru</Title>

      {/* Email */}
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Email: johndoe@example.com</Paragraph>
        </Card.Content>
      </Card>

      {/* Phone Number */}
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Phone Number: +1 (123) 456-7890</Paragraph>
        </Card.Content>
      </Card>

      {/* Address */}
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Address: 123 Main Street, City, Country</Paragraph>
        </Card.Content>
      </Card>

      {/* Edit Profile Button */}
      <Button mode="contained" style={styles.button}>
        Edit Profile
      </Button>

      {/* Horizontal Container for Orders, Credit Score, and Total Orders */}
      <View style={styles.horizontalContainer}>
        {/* Orders */}
        <View style={styles.box}>
          <Icon name="shopping-basket" size={24} color="#555" />
          <Text style={styles.boxHeading}>Orders</Text>
          <View style={styles.line} />
          <Text style={styles.boxValue}>10</Text>
        </View>

        {/* Credit Score */}
        <View style={styles.box}>
          <Icon name="star" size={24} color="#555" />
          <Text style={styles.boxHeading}>Credit Score</Text>
          <View style={styles.line} />
          <Text style={styles.boxValue}>800</Text>
        </View>

        {/* Total Orders */}
        <View style={styles.box}>
          <Icon name="file-text" size={24} color="#555" />
          <Text style={styles.boxHeading}>Total Orders</Text>
          <View style={styles.line} />
          <Text style={styles.boxValue}>100</Text>
        </View>
      </View>

      {/* Likes Food Button */}
      {/* <Button mode="contained" style={styles.button}>
        Likes Food
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  card: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#601111',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 40,
  },
  box: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#601111',
    marginHorizontal: 8,
  },
  boxHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#601111',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  boxValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#555',
  },
});

export default UserProfile;

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

// const UserProfile = () => {
//   return (
//     <View style={styles.container}>
//       {/* User Photo */}

//       {/* User Name */}
//       <Title style={styles.name}>John Doe</Title>

//       {/* Email */}
//       <Card style={styles.card}>
//         <Card.Content>
//           <Paragraph>Email: johndoe@example.com</Paragraph>
//         </Card.Content>
//       </Card>

//       {/* Phone Number */}
//       <Card style={styles.card}>
//         <Card.Content>
//           <Paragraph>Phone Number: +1 (123) 456-7890</Paragraph>
//         </Card.Content>
//       </Card>

//       {/* Address */}
//       <Card style={styles.card}>
//         <Card.Content>
//           <Paragraph>Address: 123 Main Street, City, Country</Paragraph>
//         </Card.Content>
//       </Card>

//       {/* Edit Profile Button */}
//       <Button mode="contained" style={styles.button}>
//         Edit Profile
//       </Button>

//       {/* Horizontal Container for Orders, Credit Score, and Total Orders */}
//       <View style={styles.horizontalContainer}>
//         {/* Orders */}
//         <View style={styles.box}>
//           <Text style={styles.boxHeading}>Orders</Text>
//           <View style={styles.line} />
//           <Text style={styles.boxValue}>10</Text>
//         </View>

//         {/* Credit Score */}
//         <View style={styles.box}>
//           <Text style={styles.boxHeading}>Credit Score</Text>
//           <View style={styles.line} />
//           <Text style={styles.boxValue}>800</Text>
//         </View>

//         {/* Total Orders */}
//         <View style={styles.box}>
//           <Text style={styles.boxHeading}>Total Orders</Text>
//           <View style={styles.line} />
//           <Text style={styles.boxValue}>100</Text>
//         </View>
//       </View>

//       {/* Likes Food Button */}
//       <Button mode="contained" style={styles.button}>
//         Likes Food
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   card: {
//     marginVertical: 10,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   button: {
//     marginTop: 10,
//   },
//   horizontalContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   box: {
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f2f2f2',
//   },
//   boxHeading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 5,
//     color: '#555',
//   },
//   boxValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 5,
//     color: '#555',
//   },
// });

// export default UserProfile;
