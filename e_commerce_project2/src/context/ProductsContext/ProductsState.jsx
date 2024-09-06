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

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)
    
	const getProducts = async () => {
        try{
            const res = await axios.get(`${API_URL}/products`)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data,
            })
            console.log("productos extraidos"+res.data)
        }catch (error){
            console.error("error en la peticion de productos", error)
        }
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
