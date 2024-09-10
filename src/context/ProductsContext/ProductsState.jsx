import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const initialState = {
    products: [],
	cart: cartStorage,
    product: {},
}

// const API_URL = 'https://fakestoreapi.com'
const API_URL = 'http://localhost:3000'

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)
    
	const getProducts = async () => {
        try{
            const res = await axios.get(`${API_URL}/products`)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data,
            })
        }catch (error){
            console.error("error en la peticion de productos", error)
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
    
/* 	const addCart = (product) => {
        dispatch({
            type: 'ADD_CART',
			payload: product,
		})
	}
    
	const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
		})
	} */
    
	return (
        <ProductsContext.Provider
        value={{
            products: state.products,
            product: state.product,
            cart: state.cart,
            getProducts,
            deleteProduct,
            createProduct,
            getProductById,
            editProduct,
            // addCart,
            // clearCart,
            // deleteProduct,
            // createProduct, 
    

        }}
		>
			{children}
		</ProductsContext.Provider>
    )
}

export const ProductsContext = createContext(initialState)
