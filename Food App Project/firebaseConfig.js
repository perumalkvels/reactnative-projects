import { database } from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/app';

export const fbdataservice = async (path, action, data=null) => {
  const ref = firebase.database().ref(path);

  switch (action) {

    case 'get':
      return ref.once("value")
        .then(snapshot => {
          const fbData = snapshot.val();
          return fbData;
        })
        .catch(error => {
          console.error("Error reading data:", error);
          throw error;
        });
    
    case 'set':
      return await ref.set(data)
        .then(() => { return 'Success' })
        .catch(error => console.error('Error setting data:', error));

    case 'update':
      return await ref.update(data)
        .then(() => console.log('Data updated.'))
        .catch(error => console.error('Error updating data:', error));

    case 'remove' :
      return await ref.remove()
      .then(() => console.log('Data removed'))
      .catch(error => console.error('Error removing data:', error));

    default:
      console.warn('Invalid action:', action);
      break;
  }
};