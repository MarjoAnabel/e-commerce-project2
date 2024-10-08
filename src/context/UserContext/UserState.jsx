import { createContext, useReducer } from 'react'
import axios from 'axios'
import UserReducer from './UserReducer'

const storageToken = localStorage.getItem('token');
let parsedToken = null;

try {
  parsedToken = storageToken ? JSON.parse(storageToken) : null;
} catch (error) {
  console.error('Error parsing token:', error);
  parsedToken = null
}

const initialState = {
  token: parsedToken,
  user: null,
}

const API_URL = 'http://localhost:3000'

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)
 
  const login = async (user) => {
    try {
      const res = await axios.post(`${API_URL}/users/login`, user);
      console.log('Response from API:', res.data);

      if (res.data && res.data.token) {
      localStorage.setItem('token', JSON.stringify(res.data.token));
      
      dispatch({
        type: 'LOGIN',
        payload: res.data,
      });
      } else {
      console.error('Token not found in the response');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    }

    const getUserInfo = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
      
        if (!token) {
        throw new Error('Token not found');
        }
      
        const res = await axios.get(`${API_URL}/users/userLogin`, {
        headers: {
          authorization: token,
        },
        });
      
        if (res.data && res.data.user) {
        dispatch({
          type: 'GET_USER_INFO',
          payload: res.data.user,
        });
        } else {
        console.error('User info not found in the response');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
      }

      const logout = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.delete(API_URL + "/users/logout", {
          headers: {
            authorization: token,
          },
        });
        dispatch({
          type: "LOGOUT",
          payload: res.data,
        });
        if (res.data) {
          localStorage.removeItem("token");
        }
      };
      
     
   

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
 }
  
 

export const UserContext = createContext(initialState)