import { createContext } from 'react'
import axios from 'axios'
import ProductsReducer from '../ProductsContext/ProductsReducer'

const initialState = {
  products: [],
 }
 
const API_URL = 'http://localhost:3000'

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL + '/products/getAll');
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products: state.products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
   

export const ProductsContext = createContext(initialState)