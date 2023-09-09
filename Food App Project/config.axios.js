import axios from 'axios';
const baseUrl = 'https://reqres.in';

// import { API_URL } from './config'
import { useDispatch } from 'react-redux'
const API_ENDPOINT = API_URL

// const authHeader = () => ({
//   _sdq_user_token: `${getItem('_token')}`,
// })

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

const MSG_SERVER_ERROR = 'INTERNAL SERVER ERROR'
/**
Dataservice class handles all operations by creating an instance of the mentods.
To access the local storage use the utility
 */
class DataService {

//    static get(path = '', optionalHeader = {}) {
//         return client({
//           method: 'GET',
//           url: path,
//           headers: { ...authHeader(), ...optionalHeader },
//           cancelToken,
//         })
//       }

  static get(path = '', optionalHeader = {}) {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader(), ...optionalHeader },
    })
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    })
  }

//   static patch(path = '', data = {}) {
//     return client({
//       method: 'PATCH',
//       url: path,
//       data: JSON.stringify(data),
//       headers: { ...authHeader() },
//     })
//   }

//   static put(path = '', data = {}) {
//     return client({
//       method: 'PUT',
//       url: path,
//       data: data,
//       headers: { ...authHeader() },
//     })
//   }

//   static delete(path = '', data = {}) {
//     return client({
//       method: 'DELETE',
//       url: path,
//       data: JSON.stringify(data),
//       headers: { ...authHeader() },
//     })
//   }
}