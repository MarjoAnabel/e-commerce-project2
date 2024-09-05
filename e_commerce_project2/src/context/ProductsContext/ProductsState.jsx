import { createContext, useReducer } from 'react'
// import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cartStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
    products: null,
	cart: cartStorage ? cartStorage : [],
    product: {},
}

const API_URL = 'http://localhost:3001'

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)
    
	const getProducts = async () => {
        const res = await axios.get(API_URL + '/products/getAll')
        
		dispatch({
            type: 'GET_PRODUCTS',
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
            /* addCart,
            clearCart, */
            /* deleteProduct,
            createProduct, */
        }}
		>
			{children}
		</ProductsContext.Provider>
    )
}
export const ProductsContext = createContext(initialState)
