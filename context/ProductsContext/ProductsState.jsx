import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductsReducer from '../../context/ProductsContext/ProductsReducer'

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
      const res = await axios.get(API_URL + '/products');
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const deleteProduct = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.delete(`${API_URL}/products/id/${id}`, {
      headers: {
        authorization: token,
      },
    })
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: res.data.response,
    })
  }


  const createProduct = async (product) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.post(`${API_URL}/products`, product, {
      headers: { authorization: token },
    })
    dispatch({
      type: 'CREATE_PRODUCT',
      payload: res.data,
    })
    return res
  }

  const getProductById = async (id) => {
    const res = await axios.get(`${API_URL}/products/productid/id/${id}`)
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: res.data,
    })
  }

  const editProduct = async (product, id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.put(`${API_URL}/products/id/${id}`, product, {
      headers: {authorization: token},
    })
    dispatch({
      type: 'EDIT_PRODUCT',
      payload: res.data,
    })
    return res
  }
 
 
 

  return (
    <ProductsContext.Provider value={{ 
      products: state.products,
      product: state.product,
      getProducts,
      deleteProduct,
      createProduct,
      getProductById,
      editProduct,

      }}>
      {children}
    </ProductsContext.Provider>
  );
}
   

export const ProductsContext = createContext(initialState)