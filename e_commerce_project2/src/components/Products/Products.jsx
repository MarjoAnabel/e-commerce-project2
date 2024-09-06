import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
const Products = () => {

  
  // const { getProducts, products, addCart, cart } = useContext(ProductsContext)
  // useEffect(() => {
    //   getProducts()
    // }, [])
    // useEffect(() => {
      //   localStorage.setItem('cart', JSON.stringify(cart))
      // }, [cart])
      const { getProducts, products } = useContext(ProductsContext)
      useEffect(() => {
        getProducts()
      }, [])
      
    return(
      <main className='products'>
        <ul>
        {products.slice(0, 10).map(product => {

          return (
            <li key={product.id}>
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
            </li>
          )
        })}
        </ul>
      </main>
    )

  // return (
  //   <main className='products'>
  //     <ul>
  //       {console.log("a ver esos productos:" + products) }
  //       {products.slice(0, 10).map(product => {
  //         const isProductInCart = checkProductInCart(product)

  //         return (
  //           <li key={product.id}>
  //             <img
  //               src={product.image}
  //               alt={product.title}
  //             />
  //             <div>
  //               <strong>{product.title}</strong> - ${product.price}
  //             </div>
  //             <div>
  //               <button
  //                 style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
  //                   isProductInCart
  //                     ? removeFromCart(product)
  //                     : addToCart(product)
  //                 }}
  //               >
  //                 {
  //                   isProductInCart
  //                     ? <RemoveFromCartIcon />
  //                     : <AddToCartIcon />
  //                 }
  //               </button>
  //             </div>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </main>
  // )
  
}

export default Products